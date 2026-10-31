import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface DirectionalSculptureProps {
  activeStep: number; // 0: Research, 1: Positioning, 2: Roadmap, 3: Execution
  divisionSlug?: string;
}

export default function DirectionalSculpture({
  activeStep = 0,
  divisionSlug = 'strategy',
}: DirectionalSculptureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglActive, setWebglActive] = useState<boolean>(false);

  // References for animation state
  const stateRef = useRef({
    step: activeStep,
    alignmentProgress: 0, // lerps to 1 on mount/enter
    targetRotX: 0,
    targetRotY: 0,
    currentRotX: 0,
    currentRotY: 0,
  });

  useEffect(() => {
    stateRef.current.step = activeStep;
  }, [activeStep]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check reduced motion preference
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

    // Camera
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
    camera.position.set(0, 0.6, 5.8);
    camera.lookAt(0.3, 0, 0);

    // Root sculpture group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Lighting (Restrained violet + soft ivory rim)
    const ambientLight = new THREE.AmbientLight(0x141418, 2.5);
    scene.add(ambientLight);

    const violetKeyLight = new THREE.DirectionalLight(0x7456f2, 4.2);
    violetKeyLight.position.set(3, 4, 3);
    scene.add(violetKeyLight);

    const ivoryRimLight = new THREE.DirectionalLight(0xf7f5f0, 1.8);
    ivoryRimLight.position.set(-3, 2, -2);
    scene.add(ivoryRimLight);

    const fillLight = new THREE.PointLight(0x7456f2, 2.5, 8);
    fillLight.position.set(1.5, -1, 2);
    scene.add(fillLight);

    // Build the sculptural layered planes:
    // 7 architectural strata that flow from left (scattered/offset) to right (aligned directional formation)
    const PLANE_COUNT = 7;
    const planes: {
      mesh: THREE.Mesh;
      line: THREE.Line;
      baseX: number;
      baseY: number;
      baseZ: number;
      scatterX: number;
      scatterY: number;
      scatterRotZ: number;
      scatterRotY: number;
      alignRotZ: number;
      alignRotY: number;
    }[] = [];

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // Shared materials
    const planeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x22212d,
      roughness: 0.25,
      metalness: 0.1,
      transparent: true,
      opacity: 0.72,
      transmission: 0.45,
      ior: 1.35,
      reflectivity: 0.5,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    materialsToDispose.push(planeMaterial);

    const accentPlaneMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3d2b7a,
      emissive: 0x7456f2,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.15,
      transparent: true,
      opacity: 0.88,
      transmission: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    materialsToDispose.push(accentPlaneMaterial);

    const edgeLineMaterial = new THREE.LineBasicMaterial({
      color: 0x7456f2,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });
    materialsToDispose.push(edgeLineMaterial);

    const ivoryLineMaterial = new THREE.LineBasicMaterial({
      color: 0xf7f5f0,
      transparent: true,
      opacity: 0.45,
    });
    materialsToDispose.push(ivoryLineMaterial);

    for (let i = 0; i < PLANE_COUNT; i++) {
      const norm = i / (PLANE_COUNT - 1); // 0 to 1
      const isLead = i === 3 || i === 4;

      // Create elongated sleek architectural trapezoid/plane
      const width = 2.4 - norm * 0.4;
      const height = 0.55 + Math.sin(norm * Math.PI) * 0.25;
      const geom = new THREE.PlaneGeometry(width, height, 16, 2);

      // Subtle curvature along the plane so it acts like a sculptural ribbon
      const posAttr = geom.attributes.position;
      for (let j = 0; j < posAttr.count; j++) {
        const x = posAttr.getX(j);
        // Curve the trailing left edge slightly more, straighten the leading right edge
        const curve = Math.sin((x / width + 0.5) * Math.PI) * 0.12 * (1 - norm * 0.5);
        posAttr.setZ(j, curve);
      }
      geom.computeVertexNormals();
      geometriesToDispose.push(geom);

      const mat = isLead ? accentPlaneMaterial : planeMaterial;
      const mesh = new THREE.Mesh(geom, mat);

      // Edge wire along the top contour
      const edges = new THREE.EdgesGeometry(geom);
      geometriesToDispose.push(edges);
      const line = new THREE.LineSegments(edges, isLead ? edgeLineMaterial : ivoryLineMaterial);
      mesh.add(line);

      // Position parameters:
      // In base alignment: stacked smoothly along diagonal depth
      const baseX = (norm - 0.5) * 1.35;
      const baseY = (norm - 0.5) * 0.75;
      const baseZ = (norm - 0.5) * 1.5;

      // In scattered state (representing initial divergent inputs):
      const scatterX = baseX - 0.35 + (i % 2 === 0 ? 0.25 : -0.3);
      const scatterY = baseY + (i % 2 === 0 ? -0.4 : 0.45);
      const scatterRotZ = (i - 3) * 0.12;
      const scatterRotY = (i % 2 === 0 ? 0.25 : -0.35);

      // In aligned state: parallel, pointing decisively toward upper right
      const alignRotZ = -0.18;
      const alignRotY = 0.32;

      mesh.position.set(scatterX, scatterY, baseZ);
      mesh.rotation.set(0.1, scatterRotY, scatterRotZ);

      sculptureGroup.add(mesh);

      planes.push({
        mesh,
        line,
        baseX,
        baseY,
        baseZ,
        scatterX,
        scatterY,
        scatterRotZ,
        scatterRotY,
        alignRotZ,
        alignRotY,
      });
    }

    // A sleek focal guide vector strand running through the formation
    const guideCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-1.8, -0.6, -1.0),
      new THREE.Vector3(-0.6, -0.2, -0.2),
      new THREE.Vector3(0.8, 0.3, 0.8),
      new THREE.Vector3(2.0, 0.75, 1.4)
    );
    const guidePoints = guideCurve.getPoints(40);
    const guideGeom = new THREE.BufferGeometry().setFromPoints(guidePoints);
    geometriesToDispose.push(guideGeom);

    const guideMaterial = new THREE.LineBasicMaterial({
      color: 0x7456f2,
      transparent: true,
      opacity: 0.75,
    });
    materialsToDispose.push(guideMaterial);

    const guideLine = new THREE.Line(guideGeom, guideMaterial);
    sculptureGroup.add(guideLine);

    // Initial positioning of sculpture in right area
    sculptureGroup.position.set(0.2, 0.05, 0);

    // Resize observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const rect = container.getBoundingClientRect();
      const w = Math.max(rect.width, 240);
      const h = Math.max(rect.height, 260);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Pointer parallax on desktop (restrained, no endless spin)
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.targetRotY = Math.max(-0.25, Math.min(0.25, nx * 0.18));
      stateRef.current.targetRotX = Math.max(-0.15, Math.min(0.15, ny * 0.12));
    };

    const handlePointerLeave = () => {
      stateRef.current.targetRotY = 0;
      stateRef.current.targetRotX = 0;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Intersection Observer to pause when scrolled out
    let isVisible = true;
    let isTabActive = !document.hidden;
    let contextLost = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLost = true;
      setWebglActive(false);
    };
    const handleContextRestored = () => {
      contextLost = false;
      setWebglActive(true);
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    let startTime = performance.now();
    let lastTime = performance.now();

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible || !isTabActive || contextLost || !renderer) return;

      const dt = Math.min((now - lastTime) * 0.001, 0.05);
      lastTime = now;
      const elapsed = (now - startTime) * 0.001;

      // Entrance alignment lerp (0 -> 1 over ~1.6s)
      stateRef.current.alignmentProgress += (1 - stateRef.current.alignmentProgress) * 0.04;
      const alignP = stateRef.current.alignmentProgress;

      // Smooth parallax tracking
      const state = stateRef.current;
      state.currentRotX += (state.targetRotX - state.currentRotX) * 0.05;
      state.currentRotY += (state.targetRotY - state.currentRotY) * 0.05;

      // Step influence:
      // step 0: slightly more dispersed
      // step 1: starting to orient
      // step 2: structured parallel strata
      // step 3: razor-aligned forward trajectory
      const stepT = state.step / 3; // 0, 0.33, 0.66, 1.0

      // Gentle organic breathing wave (subtle, no rapid rotation)
      const breath = Math.sin(elapsed * 0.75) * 0.02;

      planes.forEach((p, i) => {
        const norm = i / (PLANE_COUNT - 1);
        const stagger = (1 - norm) * (1 - stepT * 0.7);

        // Position interpolation from scattered to aligned
        const targetX = THREE.MathUtils.lerp(p.scatterX, p.baseX, alignP) + (1 - stepT) * (i % 2 === 0 ? 0.08 : -0.08);
        const targetY = THREE.MathUtils.lerp(p.scatterY, p.baseY, alignP) + Math.sin(elapsed * 0.9 + i * 0.5) * 0.018 * (1 - stepT * 0.5);
        const targetZ = p.baseZ;

        p.mesh.position.x += (targetX - p.mesh.position.x) * 0.06;
        p.mesh.position.y += (targetY - p.mesh.position.y) * 0.06;
        p.mesh.position.z += (targetZ - p.mesh.position.z) * 0.06;

        // Rotation interpolation
        const curRotZ = THREE.MathUtils.lerp(p.scatterRotZ, p.alignRotZ, alignP * (0.6 + stepT * 0.4)) + breath;
        const curRotY = THREE.MathUtils.lerp(p.scatterRotY, p.alignRotY, alignP * (0.5 + stepT * 0.5));

        p.mesh.rotation.z += (curRotZ - p.mesh.rotation.z) * 0.06;
        p.mesh.rotation.y += (curRotY - p.mesh.rotation.y) * 0.06;
        p.mesh.rotation.x = 0.08 + state.currentRotX;
      });

      // Overall sculpture sway (controlled, no endless spin)
      sculptureGroup.rotation.y = 0.15 + state.currentRotY + Math.sin(elapsed * 0.45) * 0.03;
      sculptureGroup.rotation.x = 0.05 + state.currentRotX;

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer?.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="directional-sculpture-container">
      {/* Designed Static SVG Fallback (Always present underneath / rendered when WebGL off or initializing) */}
      <div
        className="sculpture-svg-fallback"
        style={{ opacity: webglActive ? 0 : 1 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="planeGrad1" x1="60" y1="360" x2="480" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22212D" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#3D2B7A" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7456F2" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="planeGrad2" x1="100" y1="380" x2="520" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1C1C24" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#2A2938" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F7F5F0" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Layered translucent planes converging from scattered inputs on the left into aligned direction on the right */}
          {/* Strata 1 (Base deep plane) */}
          <polygon
            points="70,330 310,240 500,200 240,290"
            fill="url(#planeGrad2)"
            stroke="#7456F2"
            strokeOpacity="0.25"
            strokeWidth="1"
          />

          {/* Strata 2 (Offset input plane) */}
          <polygon
            points="90,290 330,200 515,165 260,250"
            fill="#22212D"
            fillOpacity="0.65"
            stroke="#F7F5F0"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          {/* Strata 3 (Aligning transition plane) */}
          <polygon
            points="115,250 350,165 530,130 280,215"
            fill="url(#planeGrad1)"
            stroke="#7456F2"
            strokeOpacity="0.4"
            strokeWidth="1.2"
          />

          {/* Strata 4 (Leading illuminated plane) */}
          <polygon
            points="140,210 375,130 545,95 300,175"
            fill="url(#planeGrad1)"
            stroke="#7456F2"
            strokeWidth="1.6"
          />

          {/* Strata 5 (Upper refining plane) */}
          <polygon
            points="170,170 395,95 555,65 320,138"
            fill="#272535"
            fillOpacity="0.75"
            stroke="#F7F5F0"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* Strata 6 (Top sharp guide plane) */}
          <polygon
            points="200,130 415,65 560,40 340,105"
            fill="#1E1D28"
            fillOpacity="0.6"
            stroke="#7456F2"
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />

          {/* Continuous directional vector trace line */}
          <path
            d="M60 340 C180 270 340 180 570 40"
            stroke="#7456F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />

          <circle cx="570" cy="40" r="4.5" fill="#7456F2" />
          <circle cx="570" cy="40" r="9" stroke="#7456F2" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
      </div>

      {/* Interactive WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="sculpture-webgl-canvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'relative',
          zIndex: 2,
        }}
      />

      <style>{`
        .directional-sculpture-container {
          position: relative;
          width: 100%;
          height: clamp(340px, 44vw, 540px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          overflow: visible;
        }
        .sculpture-svg-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
          transition: opacity 300ms ease;
        }
        .sculpture-webgl-canvas {
          cursor: default;
        }
      `}</style>
    </div>
  );
}

