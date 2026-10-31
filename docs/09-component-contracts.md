# Component ownership guidelines

Each `.astro` component owns semantic static markup and SEO content.
React/TSX components own interactive state and 3D rendering only.
World scenes take `progress`, `theme`, `qualityTier` and `reducedMotion` inputs.
Shared `WorldCanvas` mounts once for the cinematic landing sequence; avoid multiple
uncontrolled canvases fighting over browser GPU memory.
Animation timelines are scoped to a scene and disposed on teardown.
Keep navigation and conversion forms in HTML, never baked into textures.
Data arrays drive 5 divisions and 70 service pages; no duplicate hand-made page files.
