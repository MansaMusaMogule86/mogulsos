# Asset Inventory and Naming Convention

Every asset has an ID, intended route, source/license, desktop/mobile versions,
visual role, alt text, target budget and approval status.

- `public/brand/logos/official/`: approved brand logo files only.
- `public/brand/logos/divisions/`: approved division marks, never invented.
- `public/3d/models/hero/`: approved master emblem `.glb` model.
- `public/3d/models/divisions/`: one optimized `.glb` per world.
- `public/3d/textures/`: licensed KTX2 or compressed textures.
- `public/3d/environments/`: compressed HDR environment maps.
- `public/videos/hero/`: AV1/WebM/MP4 only where needed; compressed.
- `public/posters/`: still fallbacks for mobile, reduced-motion and weak devices.
- `public/case-studies/`: only approved client screenshots and artwork.
- `src/assets/`: small importable images Astro can optimize at build time.

Proposed basenames (NOT actual created media):
`mm-hero-emblem-v01.glb`, `mm-hero-poster-desktop-v01.webp`,
`mm-hero-poster-mobile-v01.webp`, `mm-digital-world-v01.glb`,
`mm-ai-world-v01.glb`, `mm-growth-world-v01.glb`,
`mm-creative-world-v01.glb`, `mm-strategy-world-v01.glb`.

Do not use a single full-frame video as a fake interactive 3D world if depth/interaction is required.
