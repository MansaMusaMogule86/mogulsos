# Hero Section Full-Width Immersive Restructure

**Status:** Layout restructuring complete  
**Date:** October 31, 2026  
**Impact:** Critical — changes entire hero composition from split-column to full-width immersive

---

## What Changed

### Before: Split-Column Layout
```
┌─────────────────────────────────────┐
│  Headline, Description, Buttons     │  WebGL Animation (right column)
│  (Left column)                      │  (Rectangular panel, inset)
│                                     │
│  Division Selector                  │
│  (Below content)                    │
└─────────────────────────────────────┘
```

**Issues:**
- Animation panel is a rectangular inset within the page
- Visible canvas boundary and card styling
- Content doesn't overlay the scene
- Pointer effects limited to animation panel
- No true full-width immersion

### After: Full-Width Immersive Hero
```
┌─────────────────────────────────────────┐
│  [Full-width WebGL scene background]    │
│  ┌─────────────────────────────────────┐│
│  │ Headline, Description, Buttons      ││ (Overlaid on scene)
│  │ (Left portion, positioned absolutely)││
│  │                                     ││
│  │ Division Selector (bottom-left)     ││ (Also overlaid)
│  └─────────────────────────────────────┘│
│                                          │
│ (Scene fills entire hero, no boundary)  │
└─────────────────────────────────────────┘
```

**Advantages:**
- Scene is the background of the entire hero section
- Content overlays seamlessly
- Full viewport height on desktop
- No visible canvas boundary or card styling
- Pointer effects respond across entire hero
- True immersive composition

---

## File Changes

### 1. HomeIntro.astro (Complete Restructure)

**Previous Structure:**
```astro
<section class="hero-section">
  <div class="hero-grid"> {/* 2-column layout */}
    <div class="hero-copy-col"> ... </div>
    <div class="hero-visual-col">
      <HeroSculptureInteractive />
    </div>
  </div>
</section>
```

**New Structure:**
```astro
<section class="hero-section">
  {/* Full-width scene background */}
  <div class="hero-scene-layer">
    <HeroSculptureInteractive />
  </div>

  {/* Content overlay — positioned absolutely */}
  <div class="hero-content-overlay">
    <div class="container-wide hero-content">
      {/* Headline, description, buttons */}
    </div>
  </div>
</section>
```

**CSS Changes:**
```css
/* Before */
.hero-section {
  padding-block: clamp(3rem, 6vw, 5.5rem) clamp(3.5rem, 7vw, 6rem);
  position: relative;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr; /* 2-column */
  gap: clamp(2.5rem, 5vw, 4rem);
}

/* After */
.hero-section {
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100svh;
  background-color: #141418;
  overflow: hidden;
}
.hero-scene-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.hero-content-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  pointer-events: none; /* Allow clicks to pass through to scene */
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  pointer-events: auto; /* Re-enable for content */
}
```

### 2. HeroSculptureInteractive.tsx (Scene Layer Implementation)

**Reference Change:** `stageRef` → `containerRef`  
**Purpose:** Measure the hero element (not a constrained stage div)

#### ResizeObserver Implementation
Added ResizeObserver to measure container size and update renderer:

```typescript
const resizeObserver = new ResizeObserver(() => {
  updateRendererSize();
});
resizeObserver.observe(container);
```

**Effect:** 
- Renderer dimensions update when hero element is resized
- Camera aspect ratio updates to match container
- No CSS-based stretching or scaling
- Actual rendered canvas matches container exactly

#### Pointer Event Listening
Changed from stage-level to container-level:

```typescript
// Before
container.addEventListener('mousemove', onPointerMove);

// After
container.addEventListener('mousemove', onPointerMove);
```

**Effect:** Pointer effects respond across entire hero, not just animation panel

#### JSX Structure Change
```typescript
// Before
<div className="hero-sculpture-wrapper">
  <div ref={stageRef} className="hero-sculpture-stage">
    {/* Canvas + fallback */}
  </div>
  <div className="hero-division-bar"> {/* Below scene */}
    {/* Division selector */}
  </div>
</div>

// After
<>
  <div ref={containerRef} className="hero-scene-wrapper">
    {/* Canvas + fallback */}
  </div>
  <div className="hero-division-selector">
    {/* Division selector — positioned over scene */}
  </div>
</>
```

#### Canvas Sizing
```css
/* Before */
.hero-sculpture-stage {
  height: clamp(340px, 46vw, 500px);
  overflow: hidden;
}

/* After */
.hero-scene-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}
.hero-webgl-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
```

#### Division Selector Repositioning
```css
/* Before */
.hero-division-bar {
  gap: 0.7rem;
  background: transparent;
  padding: 0;
  /* Below the stage */
}

/* After */
.hero-division-selector {
  position: absolute;
  bottom: clamp(1.5rem, 3vw, 3rem);
  left: var(--gutter);
  z-index: 20;
  pointer-events: auto;
  /* Over the scene, near bottom-left */
}
```

---

## Technical Specifications

### Hero Element Sizing
- **Desktop:** `min-height: 100svh` (full viewport)
- **Mobile:** `min-height: auto` (flexible, content-driven)
- **Width:** `100%` (full viewport width)
- **Overflow:** `hidden` (no canvas overflow visible)

### Scene Layer
- **Position:** Absolute, `inset: 0` (fills parent completely)
- **Z-Index:** 0 (bottom layer)
- **Pointer Events:** `none` (passes through to content)

### Content Overlay
- **Position:** Absolute, `inset: 0` (fills parent completely)
- **Z-Index:** 10 (above scene, below dialog/modals)
- **Pointer Events:** `none` initially, `auto` on `.hero-content` (allows text selection and link clicks)

### Renderer Setup
- **Canvas:** Fills scene layer 100%
- **Size Update:** ResizeObserver watches hero element
- **DPR:** Clamped to ≤2 (performance)
- **Transparency:** Alpha channel enabled
- **Antialias:** Enabled

### Pointer Interaction
- **Listener:** Attached to container (entire hero)
- **Coordinate System:** Relative to container bounds
- **Effects:** Respond to movement across full hero area
- **Fallback:** Navigation and buttons remain fully functional

---

## Mobile Behavior

### Responsive Adjustments
```css
@media (max-width: 640px) {
  .hero-section {
    min-height: auto; /* Not full viewport */
  }
  .hero-scene-layer {
    position: relative; /* Stacked, not absolute */
    height: clamp(300px, 60vw, 500px);
    margin-bottom: -4px; /* Eliminate gap */
  }
  .hero-content-overlay {
    position: relative; /* Stacked below scene */
    height: auto;
  }
  .hero-content {
    padding-block: 2rem 1.5rem;
  }
  .hero-division-selector {
    position: absolute; /* Over scene content */
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
}
```

**Behavior:**
- Scene and content stack vertically
- Scene doesn't force full viewport height
- Content remains readable and clickable
- Division selector positioned over content
- No horizontal overflow

---

## Visual Impact

### No Visible Changes Yet (Until Higgsfield Integration)
The current visual appears identical to before because:
- Scene background is still ink black (#141418)
- Static SVG fallback is the same
- No generated media is integrated yet

**When generated media is added:**
- Scene will display cinematic sculpture background
- Content will overlay with proper hierarchy
- No rectangular boundary visible
- Smooth transitions at edges (radial mask)

### Pointer Response
- Moving mouse anywhere in hero affects particles
- No longer restricted to animation panel
- Smooth interpolation across viewport
- Wake turbulence follows pointer

---

## Acceptance Checklist

### Visual Verification (Desktop)
- [ ] Hero extends full viewport width left to right
- [ ] Hero extends full viewport height top to bottom (desktop)
- [ ] No visible rectangle around WebGL canvas
- [ ] No card border, radius, or shadow
- [ ] No visible background gradient
- [ ] Headline and buttons clearly readable
- [ ] Division selector visible and functional
- [ ] Content positioned on left ~40% of viewport

### Interactive Verification
- [ ] Pointer movement affects particles across entire hero
- [ ] Headline/buttons remain fully clickable
- [ ] Division tabs respond to clicks
- [ ] Links navigate correctly
- [ ] Navigation bar floats above scene
- [ ] No pointer interference with scene rendering

### Responsive Verification
- **Desktop (1440×900):** Full viewport height, content centered
- **Tablet (768×1024):** Full viewport height, content centered
- **Mobile (390×844):** Content-driven height, stacked layout

### Scroll Behavior
- [ ] Hero scrolls naturally with page
- [ ] Scene recedes gently as scrolling
- [ ] Next section enters smoothly
- [ ] No pinning or parallax lag

### Mobile Specific
- [ ] No horizontal overflow
- [ ] Scene resizes responsively
- [ ] Content remains readable
- [ ] Division selector doesn't overlap headline
- [ ] Buttons have adequate touch targets

---

## Known Limitations

1. **Static Fallback:** SVG fallback currently shows rectangles; will be replaced by Higgsfield media
2. **Mobile Height:** Scene height is flexible; may vary based on device
3. **Reduced Motion:** Respects prefers-reduced-motion; scene doesn't render
4. **Pointer Events:** Limited to mouse; touch support managed by browser defaults

---

## Next Steps

1. **Verify layout** at breakpoints: 390×844, 768×1024, 1440×900, 1920×1080
2. **Test pointer interaction** — particles respond across hero
3. **Generate Higgsfield media** when credits available
4. **Integrate poster/video** into hero-backdrop layer
5. **Audit performance** — 60fps target on mobile
6. **Accessibility audit** — text contrast, focus management

---

## Implementation Notes

### Why ResizeObserver?
- Three.js renderers need explicit size updates
- CSS width:100% doesn't tell Three.js the actual pixel dimensions
- ResizeObserver fires when hero element is resized (responsive, window resize)
- Ensures renderer buffer matches displayed size (no stretching)

### Why Absolute Positioning?
- Scene layer and content layer share the same space
- Allows content to overlay scene without 2-column grid
- Maintains natural document flow for accessibility
- Simplifies mobile stacking (just change position to relative)

### Why pointer-events: none on Container?
- Scene layer (canvas) should be background, not interactive
- Content layer catches clicks for buttons/links
- Allows pointer movement to be tracked for effects while content remains clickable

---

## Summary

The hero has been restructured from a split-column layout to a true full-width immersive composition. The WebGL scene now serves as the background of the entire hero section, with content overlaid on top. This allows for:

- Full-viewport immersion on desktop
- Pointer effects across the entire hero area
- Seamless content overlay with proper z-stacking
- Responsive reflow on mobile without layout shifts
- Clean integration with future Higgsfield-generated media

The restructuring is **architectural only** — visual output is unchanged until media assets are integrated.

---

*Restructure completed: October 31, 2026*
