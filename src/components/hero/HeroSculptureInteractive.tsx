import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { divisions, divisionSlugs, type DivisionSlug } from '../../data/divisions';

interface Props {
  locale?: string;
}

// Particle vertex shader: handles fluid motion, wake trailing, and pointer repulsion
const PARTICLE_VERT = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uPointer;
  uniform float uPointerActive;
  uniform vec2 uPointerVelocity;
  
  attribute float aSize;
  attribute float aColorType; // 0.0: Violet (#7456F2), 1.0: Warm Ivory (#F7F5F0), 2.0: Soft Lavender (#EAE4FF)
  attribute vec3 aHome;
  attribute vec3 aVelocity;
  attribute float aPhase;
  
  varying float vColorType;
  varying float vAlpha;

  void main() {
    vColorType = aColorType;
    
    // Ambient orbital flow
    float t = uTime * 0.45 + aPhase;
    vec3 pos = position;
    
    // Harmonic flow around the home attractor
    pos.x = aHome.x + sin(t * 1.2 + aHome.y) * 0.22 + cos(t * 0.8) * 0.15;
    pos.y = aHome.y + cos(t * 1.1 + aHome.x) * 0.20 + sin(t * 0.9) * 0.12;
    pos.z = aHome.z + sin(t * 0.7 + aHome.z) * 0.28;
    
    // Interaction with 2D pointer projected into world space (Z ~ 0)
    if (uPointerActive > 0.5) {
      vec2 diff = pos.xy - uPointer;
      float dist = length(diff);
      float radius = 1.35; // Interaction sphere radius
      
      if (dist < radius) {
        float factor = (1.0 - dist / radius);
        // Repulsion away from pointer
        vec2 repel = normalize(diff) * factor * 0.45;
        // Wake turbulence from pointer velocity
        vec2 wake = uPointerVelocity * factor * 0.75;
        
        pos.xy += repel + wake;
        pos.z += factor * 0.35;
      }
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Responsive point size with distance attenuation
    float distScale = clamp(4.5 / -mvPosition.z, 0.4, 2.4);
    gl_PointSize = aSize * distScale * uPixelRatio;

    // Depth alpha fading
    vAlpha = smoothstep(-3.5, 2.0, pos.z) * 0.92;
  }
`;

// Particle fragment shader: fine luminous trails, responds to division colors
const PARTICLE_FRAG = `
  uniform vec3 uAccentColor;
  uniform vec3 uSecondaryColor;

  varying float vColorType;
  varying float vAlpha;

  void main() {
    // Distance from center of point sprite
    vec2 centerCoord = gl_PointCoord - vec2(0.5);
    float dist = length(centerCoord);
    if (dist > 0.5) discard;

    // Refined falloff: softer edges, controlled core
    float intensity = exp(-dist * 3.8);
    float core = smoothstep(0.15, 0.0, dist) * 0.45;

    // Color based on type, influenced by division accent colors
    // 0: Primary accent color, 1: Secondary accent, 2: Fine ivory highlights
    vec3 col = mix(uAccentColor, vec3(0.968, 0.960, 0.941), vColorType * 0.3);
    if (vColorType > 1.5) {
      col = mix(uSecondaryColor, vec3(0.968, 0.960, 0.941), 0.2);
    } else if (vColorType > 0.5) {
      col = vec3(0.968, 0.960, 0.941);
    }

    // Subtle white core, no dominant bloom
    col += vec3(0.15) * core;

    gl_FragColor = vec4(col, (intensity * 0.85 + core * 0.6) * vAlpha);
  }
`;

// Ribbon vertex and fragment shaders for coherent flowing strands
const RIBBON_VERT = `
  uniform float uTime;
  uniform float uFrequency;
  uniform float uTwist;
  uniform float uSpread;
  uniform vec2 uPointer;
  uniform float uPointerActive;
  
  attribute float aRibbonIndex;
  attribute float aProgress;
  
  varying float vProgress;
  varying float vRibbonIndex;
  varying float vElevation;

  void main() {
    vProgress = aProgress;
    vRibbonIndex = aRibbonIndex;

    float t = aProgress * 6.2831853;
    float idxOffset = aRibbonIndex * 0.62;

    // Controlled, coherent architectural curves (braided harmonic torus)
    float baseRadius = 1.65 + 0.42 * sin(t * uFrequency + idxOffset + uTime * 0.45);
    float angle = t + sin(t * 0.5 + uTime * 0.3) * 0.45 + aRibbonIndex * 0.32 * uSpread;

    vec3 pos;
    pos.x = cos(angle) * baseRadius;
    pos.z = sin(angle) * baseRadius * 0.75;
    pos.y = sin(t * uTwist + idxOffset + uTime * 0.55) * (0.85 * uSpread)
          + cos(t * 0.5 - uTime * 0.35) * 0.35;

    // Pointer gentle wave displacement
    if (uPointerActive > 0.5) {
      float distToPointer = length(pos.xy - uPointer * 1.5);
      float pointerInfluence = exp(-distToPointer * 1.8) * 0.32;
      pos.x += uPointer.x * pointerInfluence;
      pos.y += uPointer.y * pointerInfluence;
      pos.z += pointerInfluence * 0.45;
    }

    vElevation = (pos.z + 2.0) / 4.0;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const RIBBON_FRAG = `
  uniform float uTime;
  varying float vProgress;
  varying float vRibbonIndex;
  varying float vElevation;

  void main() {
    vec3 colorViolet = vec3(0.455, 0.337, 0.949); // #7456F2
    vec3 colorLavender = vec3(0.918, 0.894, 1.0); // #EAE4FF
    vec3 colorIvory = vec3(0.968, 0.960, 0.941);    // #F7F5F0

    // Flowing luminosity pulse along the strand
    float pulse = 0.5 + 0.5 * sin(vProgress * 14.0 - uTime * 2.0 + vRibbonIndex * 1.5);
    vec3 baseCol = mix(colorViolet, colorLavender, smoothstep(0.2, 0.88, pulse * vElevation));
    baseCol = mix(baseCol, colorIvory, smoothstep(0.85, 0.98, pulse) * 0.4);

    // Taper ends cleanly
    float edgeFade = sin(vProgress * 3.1415926);
    float alpha = (0.24 + 0.62 * vElevation) * smoothstep(0.0, 0.14, edgeFade);

    gl_FragColor = vec4(baseCol, alpha);
  }
`;

export default function HeroSculptureInteractive({ locale = 'en' }: Props) {
  const [activeDivision, setActiveDivision] = useState<DivisionSlug>('digital');
  const [webglActive, setWebglActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Target sculpture shape parameters
  const targetParamsRef = useRef({
    frequency: divisions.digital.sculptureMode.frequency,
    twist: divisions.digital.sculptureMode.twist,
    spread: divisions.digital.sculptureMode.ribbonSpread,
  });

  useEffect(() => {
    const mode = divisions[activeDivision].sculptureMode;
    targetParamsRef.current = {
      frequency: mode.frequency,
      twist: mode.twist,
      spread: mode.ribbonSpread,
    };
    window.dispatchEvent(
      new CustomEvent('moguls:division-select', { detail: { division: activeDivision } })
    );
  }, [activeDivision]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglActive(false);
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglActive(false);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    setWebglActive(true);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
    camera.position.set(0, 0, 5.2);

    // Measure container and set initial renderer size
    const updateRendererSize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer?.setSize(width, height, false);
    };

    // Observe container resize and update renderer
    const resizeObserver = new ResizeObserver(() => {
      updateRendererSize();
    });
    resizeObserver.observe(container);

    // Initial size
    updateRendererSize();

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Convert hex color to vec3
    const hexToVec3 = (hex: string): THREE.Vector3 => {
      const num = parseInt(hex.slice(1), 16);
      return new THREE.Vector3(
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255
      );
    };

    // Uniforms for shaders
    const accentColor = hexToVec3(divisions[activeDivision].accent);
    const secondaryColor = hexToVec3(divisions[activeDivision].accentSecondary || '#7456f2');

    const uniforms = {
      uTime: { value: 0 },
      uPixelRatio: { value: dpr },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uPointerActive: { value: 0 },
      uPointerVelocity: { value: new THREE.Vector2(0, 0) },
      uFrequency: { value: targetParamsRef.current.frequency },
      uTwist: { value: targetParamsRef.current.twist },
      uSpread: { value: targetParamsRef.current.spread },
      uAccentColor: { value: accentColor },
      uSecondaryColor: { value: secondaryColor },
    };

    // 1. Coherent Flowing Ribbons (8 architectural strands)
    const RIBBON_COUNT = 8;
    const SEGMENTS = 180;
    const ribbonMaterial = new THREE.ShaderMaterial({
      vertexShader: RIBBON_VERT,
      fragmentShader: RIBBON_FRAG,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const geometries: THREE.BufferGeometry[] = [];
    for (let r = 0; r < RIBBON_COUNT; r++) {
      const geom = new THREE.BufferGeometry();
      const pos = new Float32Array(SEGMENTS * 3);
      const prog = new Float32Array(SEGMENTS);
      const idx = new Float32Array(SEGMENTS);

      for (let s = 0; s < SEGMENTS; s++) {
        prog[s] = s / (SEGMENTS - 1);
        idx[s] = r;
      }

      geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geom.setAttribute('aProgress', new THREE.BufferAttribute(prog, 1));
      geom.setAttribute('aRibbonIndex', new THREE.BufferAttribute(idx, 1));
      geometries.push(geom);

      const line = new THREE.Line(geom, ribbonMaterial);
      rootGroup.add(line);
    }

    // 2. Refined Pointer-Responsive Particles (640 particles, smaller accent luminosity)
    const PARTICLE_COUNT = 640;
    const particleGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(PARTICLE_COUNT * 3);
    const pHome = new Float32Array(PARTICLE_COUNT * 3);
    const pVelocity = new Float32Array(PARTICLE_COUNT * 3);
    const pSize = new Float32Array(PARTICLE_COUNT);
    const pColorType = new Float32Array(PARTICLE_COUNT);
    const pPhase = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // 75% particles clustered around ribbon orbit, 25% ambient field
      const isStrand = Math.random() < 0.75;
      let x = 0, y = 0, z = 0;

      if (isStrand) {
        const u = Math.random() * Math.PI * 2;
        const rad = 1.45 + (Math.random() - 0.5) * 0.85;
        x = Math.cos(u) * rad;
        z = Math.sin(u) * rad * 0.8;
        y = (Math.random() - 0.5) * 1.6 + Math.sin(u * 2.0) * 0.45;
      } else {
        // Floating spatial dust — constrain to visible sculpture region
        x = (Math.random() - 0.5) * 3.2;
        y = (Math.random() - 0.5) * 2.4;
        z = (Math.random() - 0.5) * 2.2;
      }

      pPos[i3] = x;
      pPos[i3 + 1] = y;
      pPos[i3 + 2] = z;

      pHome[i3] = x;
      pHome[i3 + 1] = y;
      pHome[i3 + 2] = z;

      pVelocity[i3] = 0;
      pVelocity[i3 + 1] = 0;
      pVelocity[i3 + 2] = 0;

      // Fine accent particles: most 2-4px, few bright 5-7px highlights
      const isBright = Math.random() < 0.12;
      pSize[i] = isBright ? 5.0 + Math.random() * 2.5 : 2.0 + Math.random() * 2.2;

      // Color distribution: 65% Violet, 20% Lavender, 15% Ivory
      const randCol = Math.random();
      pColorType[i] = randCol < 0.65 ? 0.0 : randCol < 0.85 ? 2.0 : 1.0;

      pPhase[i] = Math.random() * Math.PI * 2;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    particleGeom.setAttribute('aHome', new THREE.BufferAttribute(pHome, 3));
    particleGeom.setAttribute('aVelocity', new THREE.BufferAttribute(pVelocity, 3));
    particleGeom.setAttribute('aSize', new THREE.BufferAttribute(pSize, 1));
    particleGeom.setAttribute('aColorType', new THREE.BufferAttribute(pColorType, 1));
    particleGeom.setAttribute('aPhase', new THREE.BufferAttribute(pPhase, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeom, particleMaterial);
    rootGroup.add(particleSystem);

    // Pointer velocity & position tracker
    let lastMouseX = 0;
    let lastMouseY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;
    let pointerVelX = 0;
    let pointerVelY = 0;
    let isPointerInHero = false;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Calculate normalized coords (-1 to +1) relative to container center
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Convert to 3D world space coordinates approx
      targetPointerX = px * 2.8;
      targetPointerY = py * 2.0;

      // Velocity computation
      const dx = targetPointerX - lastMouseX;
      const dy = targetPointerY - lastMouseY;
      pointerVelX = THREE.MathUtils.lerp(pointerVelX, dx * 0.8, 0.4);
      pointerVelY = THREE.MathUtils.lerp(pointerVelY, dy * 0.8, 0.4);

      lastMouseX = targetPointerX;
      lastMouseY = targetPointerY;
      isPointerInHero = true;
    };

    const onPointerLeave = () => {
      isPointerInHero = false;
    };

    // Attach listeners to container — pointer effects respond across entire hero
    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mouseleave', onPointerLeave, { passive: true });

    // Also track window-level mouse to ensure pointer events work even when moving quickly
    const onWindowMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inBounds) {
        onPointerMove(e);
      } else if (isPointerInHero) {
        isPointerInHero = false;
      }
    };
    window.addEventListener('mousemove', onWindowMouseMove, { passive: true });

    // Render animation loop
    let animId = 0;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      uniforms.uTime.value = elapsedTime;

      // Smoothly interpolate parameters on division changes
      uniforms.uFrequency.value = THREE.MathUtils.lerp(
        uniforms.uFrequency.value,
        targetParamsRef.current.frequency,
        0.05
      );
      uniforms.uTwist.value = THREE.MathUtils.lerp(
        uniforms.uTwist.value,
        targetParamsRef.current.twist,
        0.05
      );
      uniforms.uSpread.value = THREE.MathUtils.lerp(
        uniforms.uSpread.value,
        targetParamsRef.current.spread,
        0.05
      );

      // Smoothly interpolate accent colors on division changes
      const targetAccent = hexToVec3(divisions[activeDivision].accent);
      const targetSecondary = hexToVec3(divisions[activeDivision].accentSecondary || '#7456f2');

      uniforms.uAccentColor.value.lerp(targetAccent, 0.08);
      uniforms.uSecondaryColor.value.lerp(targetSecondary, 0.08);

      // Smooth pointer interpolation and damping
      currentPointerX = THREE.MathUtils.lerp(currentPointerX, targetPointerX, 0.15);
      currentPointerY = THREE.MathUtils.lerp(currentPointerY, targetPointerY, 0.15);
      uniforms.uPointer.value.set(currentPointerX, currentPointerY);

      pointerVelX *= 0.91; // decay wake momentum
      pointerVelY *= 0.91;
      uniforms.uPointerVelocity.value.set(pointerVelX, pointerVelY);

      // Smooth pointer active fade
      const targetActive = isPointerInHero ? 1.0 : 0.0;
      uniforms.uPointerActive.value = THREE.MathUtils.lerp(
        uniforms.uPointerActive.value,
        targetActive,
        0.1
      );

      // Gentle, controlled rotation of the sculpture (no endless spinning)
      rootGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.18 + currentPointerX * 0.08;
      rootGroup.rotation.x = Math.cos(elapsedTime * 0.15) * 0.12 - currentPointerY * 0.08;

      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('mousemove', onWindowMouseMove);

      geometries.forEach((g) => g.dispose());
      particleGeom.dispose();
      ribbonMaterial.dispose();
      particleMaterial.dispose();
      renderer?.dispose();
    };
  }, []);

  const currentDivision = divisions[activeDivision];

  return (
    <>
      {/* Scene layer: fills entire parent container */}
      <div ref={containerRef} className="hero-scene-wrapper">
        {/* Background media layer (poster/video, when generated) */}
        <div className="hero-backdrop" aria-hidden="true" />

        {/* Static SVG Fallback for instant render */}
        <div className={`hero-static-fallback ${webglActive ? 'is-faded' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 640 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="heroRibbonGrad1" x1="80" y1="360" x2="520" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7456F2" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#7456F2" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAE4FF" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M60 260 C 180 120, 360 380, 560 180"
              stroke="url(#heroRibbonGrad1)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M90 320 C 220 180, 340 320, 580 140"
              stroke="#7456F2"
              strokeWidth="1.8"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
            <path
              d="M120 200 C 260 340, 420 160, 540 280"
              stroke="#EAE4FF"
              strokeWidth="1.6"
              strokeOpacity="0.45"
              strokeLinecap="round"
            />
            <circle cx="280" cy="220" r="4.5" fill="#7456F2" />
            <circle cx="410" cy="190" r="5" fill="#EAE4FF" />
            <circle cx="340" cy="280" r="3.5" fill="#F7F5F0" />
          </svg>
        </div>

        {/* Transparent WebGL Canvas — fills layer completely */}
        <canvas ref={canvasRef} className="hero-webgl-canvas" />
      </div>

      {/* Division Selector: positioned over the scene */}
      <div className="hero-division-selector" role="region" aria-label="Five agency practices">
        <div className="division-tabs-grid" role="tablist" aria-label="Select practice to preview">
          {divisionSlugs.map((slug) => {
            const div = divisions[slug];
            const isSelected = slug === activeDivision;
            return (
              <button
                key={slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveDivision(slug)}
                className={`division-pill ${isSelected ? 'is-selected' : ''}`}
                style={isSelected ? { '--accent-color': div.accent } as React.CSSProperties : undefined}
              >
                {div.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Division Context Readout */}
        <div className="division-readout" role="tabpanel" aria-live="polite">
          <div className="readout-header">
            <span className="readout-label">{currentDivision.eyebrow}</span>
            <a href={`/${locale}/services/${currentDivision.slug}/`} className="readout-anchor">
              View {currentDivision.title} Services →
            </a>
          </div>
          <p className="readout-text">{currentDivision.heroSummary}</p>
        </div>
      </div>

      <style>{`
        /* Scene wrapper: fills container, no constraints */
        .hero-scene-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: block;
          background: #141418;
          cursor: default;
        }

        /* Background media layer: poster image or video */
        .hero-backdrop {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 800ms ease;
          pointer-events: none;
        }

        .hero-backdrop.is-loaded {
          opacity: 1;
        }

        .hero-webgl-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          pointer-events: none;
          z-index: 2;
          /* Soft radial fade to prevent hard edges */
          mask-image: radial-gradient(ellipse 85% 100% at center 50%, black 0%, black 80%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 100% at center 50%, black 0%, black 80%, transparent 100%);
        }

        .hero-static-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
          transition: opacity 400ms ease;
        }

        .hero-static-fallback.is-faded {
          opacity: 0;
          pointer-events: none;
        }

        /* Division Selector: positioned over scene, near bottom */
        .hero-division-selector {
          position: absolute;
          bottom: clamp(1.5rem, 3vw, 3rem);
          left: var(--gutter, clamp(1.25rem, 4vw, 3.5rem));
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          background: transparent;
          border: none;
          padding: 0;
          pointer-events: auto;
          width: auto;
          max-width: 90%;
        }

        .hero-division-selector button {
          pointer-events: auto;
        }

        .hero-division-selector a {
          pointer-events: auto;
        }

        /* Desktop: auto-fit layout with minimum button width */
        .division-tabs-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
          max-width: 280px;
        }

        @media (min-width: 1200px) {
          .division-tabs-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(auto, 1fr));
            gap: 0.4rem;
            max-width: none;
          }
        }

        @media (min-width: 900px) and (max-width: 1199px) {
          .division-tabs-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(auto, 1fr));
            gap: 0.4rem;
            max-width: none;
          }
        }

        @media (max-width: 640px) {
          .division-tabs-grid {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.3rem;
          }
          .division-tabs-grid button {
            flex: 1 1 auto;
            min-width: 0;
          }
        }

        .division-pill {
          padding: 0.45rem 0.7rem;
          border-radius: 0.35rem;
          border: none;
          background: transparent;
          color: #8E8D9A;
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 140ms ease;
          min-height: 36px;
          text-align: center;
          white-space: normal;
          word-wrap: break-word;
          border-bottom: 2px solid transparent;
          line-height: 1.2;
        }

        .division-pill:hover {
          color: #EAE4FF;
          border-bottom-color: rgba(116, 86, 242, 0.4);
        }

        .division-pill.is-selected {
          background: transparent;
          border-bottom-color: var(--accent-color, #7456f2);
          color: #F7F5F0;
        }

        .division-readout {
          padding-top: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.04);
        }

        .readout-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .readout-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #7456F2;
          font-weight: 600;
        }

        .readout-anchor {
          font-size: 0.8rem;
          font-weight: 600;
          color: #EAE4FF;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .readout-anchor:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        .readout-text {
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.5;
          color: #b8b6c4;
        }

        /* Mobile: division selector responsive */
        @media (max-width: 640px) {
          .hero-division-selector {
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
