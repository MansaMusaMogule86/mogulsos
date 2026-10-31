# Higgsfield Hero Assets Integration Guide

## Current Status (Credits Unavailable)

The HeroSculptureInteractive component has been refactored to support Higgsfield-generated media integration. The architecture is ready; assets are pending credit availability.

## Generated Assets Needed

### 1. Hero Poster Image (16:9, 1920×1080)
**Model:** Cinema Studio Image 2.5  
**Prompt (from brief):**
```
Cinematic abstract digital sculpture for a premium Dubai creative and technology 
studio. Continuous translucent smoked-glass ribbons flowing into an elegant 
asymmetric formation. Lighting transitions from deep violet (#7456F2) at the core 
to bright ice cyan (#85E8F2) at the edges, with fine ivory (#F7F5F0) specular 
highlights on glass surfaces. Dark translucent materials suggesting depth and 
sophistication. Near-black environment matching #141418. Sculpture concentrated 
in the right two thirds, with generous dark negative space on the left for 
website typography. Organic silhouette dissolving softly into darkness on every 
side. Controlled luminous edges, refined material detail, convincing depth, 
restrained glow, elegant experimental art direction. No text, no logos, no 
interface, no frame, no rectangular panel, no dense floating spheres, no stock 
technology imagery, no rainbow gradients, no large colored fog patches.
```

**Output Path:** `/public/posters/hero/desktop-1920x1080.webp`  
**Responsive Variants:**
- Tablet: `/public/posters/hero/tablet-1366x768.webp`
- Mobile: `/public/posters/hero/mobile-390x844.webp`

### 2. Hero Video Loop (Optional, 16:9, 6-10 seconds)
**Model:** Cinema Studio Video v2  
**Parameters:**
- Duration: 8 seconds
- Genre: "spectacle" (seamless, ambient)
- Speed Ramp: "linear" (smooth, no abrupt motion)
- Sound: "off" (muted playback)
- Start Image: (the poster image above)

**Output Path:** `/public/videos/hero/ambient-loop.webm` (muted)  
**Fallback:** If seamless looping is not achieved, use the poster image with realtime effects instead.

## Integration Steps

### 1. Upload Generated Assets
Once assets are generated:
```bash
# Place in correct paths
cp hero-poster.webp public/posters/hero/desktop-1920x1080.webp
cp hero-video.webm public/videos/hero/ambient-loop.webm
```

### 2. Update HeroSculptureInteractive.tsx

Add a `backgroundMedia` prop and state management:

```typescript
interface Props {
  locale?: string;
  backgroundMedia?: {
    posterUrl?: string;
    videoUrl?: string;
  };
}
```

Update the backdrop div in the return statement:

```typescript
<div 
  className={`hero-backdrop ${backgroundMedia?.posterUrl ? 'is-loaded' : ''}`}
  style={backgroundMedia?.posterUrl ? {
    backgroundImage: `url('${backgroundMedia.posterUrl}')`,
  } : undefined}
/>
```

For video support, add to the backdrop layer:

```typescript
{backgroundMedia?.videoUrl && (
  <video
    className="hero-backdrop-video"
    src={backgroundMedia.videoUrl}
    autoPlay
    muted
    loop
    playsInline
  />
)}
```

### 3. Add CSS for Video Backdrop

```css
.hero-backdrop-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.95;
  pointer-events: none;
}
```

### 4. Lazy Load Media

```typescript
// Preload poster before optional video
useEffect(() => {
  if (backgroundMedia?.posterUrl) {
    const img = new Image();
    img.onload = () => {
      // Update backdrop visibility
      const backdrop = stageRef.current?.querySelector('.hero-backdrop');
      if (backdrop) backdrop.classList.add('is-loaded');
    };
    img.src = backgroundMedia.posterUrl;
  }
}, [backgroundMedia?.posterUrl]);

// Load video async if available
useEffect(() => {
  if (backgroundMedia?.videoUrl) {
    // Fetch metadata to ensure playback will work
    const video = document.createElement('video');
    video.src = backgroundMedia.videoUrl;
    video.onloadedmetadata = () => {
      // Video ready for playback
    };
  }
}, [backgroundMedia?.videoUrl]);
```

### 5. Update Parent Page Component

In the page that renders HeroSculptureInteractive, pass the media URLs:

```typescript
<HeroSculptureInteractive 
  locale={locale}
  backgroundMedia={{
    posterUrl: '/posters/hero/desktop-1920x1080.webp',
    videoUrl: '/videos/hero/ambient-loop.webm',
  }}
/>
```

## Responsive Variants Strategy

The poster image should have clear region division:
- **Right 2/3:** Sculpture (the generated visual)
- **Left 1/3:** Negative space (for headline text overlay)

On mobile, reframe the composition:
- Center the sculpture
- Adjust aspect ratio to accommodate taller viewports (e.g., 390×844)
- Ensure headline remains readable

## Canvas Rendering Notes

- The WebGL canvas now has **soft radial masking** to prevent hard rectangular edges
- Particles are reduced from 1600 → 640 for cleaner accents
- Particle sizes refined: 2-4px standard, 5-7px highlights only (12% of particles)
- Fragment shader reduced glow intensity by 15-40% for subtlety

The realtime effects now layer gracefully over the background media without visual conflict.

## Performance Optimization

1. **Poster Loading:** Defer video until poster is visible
2. **Video Playback:** Use muted autoplay for faster startup
3. **Canvas Rendering:** Stop when hero scrolls out of view
4. **Device Pixel Ratio:** Clamped to ≤2 for efficient rendering

## Testing Checklist

Once assets are integrated:

- [ ] Poster loads and fades in smoothly
- [ ] No rectangular clipping visible at left/right edges
- [ ] Canvas soft edges blend with background media
- [ ] Video loops seamlessly (or gracefully falls back to poster)
- [ ] Pointer effects respond without visual lag
- [ ] Division selector remains readable and responsive
- [ ] Mobile reframing works at 390×844
- [ ] Scroll movement transitions smoothly to next section
- [ ] No console errors or warnings
- [ ] Performance maintained at 60fps when possible

## Credit Cost Estimation

- **Cinema Studio 2.5:** ~50-100 credits (1 image, 1920×1080, 1k default)
- **Cinema Studio Video v2:** ~200-400 credits (1 video, 8 seconds, standard mode)
- **Total:** ~250-500 credits for both assets

Request can be batched into a single job or split as needed.
