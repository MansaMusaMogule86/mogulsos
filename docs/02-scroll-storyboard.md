# Homepage Scroll Storyboard

| Chapter | User experience | Suggested technique | Fallback |
| --- | --- | --- | --- |
| Portal | Existing logo and 3D emblem reveal | R3F hero scene, GSAP intro | Poster and static headline |
| Universe | Camera pulls out, five worlds appear | Single Canvas camera rail | Accessible division links |
| Digital | Cyan structural grid, interfaces align | Shader and mesh transitions | Editorial layout |
| AI | Violet intelligence core and nodes | Particle field and camera move | Optimized illustration |
| Growth | Orange flows and signals converge | Instanced objects | Static chart/illustration |
| Creative | Magenta liquid gallery and media | Gallery layers, shader | Standard image gallery |
| Strategy | Teal orbital map and systems | Controlled orbit scene | Diagram SVG |
| Proof | Approved portfolio surfaces | Scroll-linked work cards | Clickable case study list |
| Final CTA | Return to gold, reveal lead form | Camera pullback, fade to DOM | Standard contact module |

Do not use scroll hijacking. Use native scroll, progressive enhancements,
GSAP ScrollTrigger for scrub/pin, and cleanup on route unmount.
Motion must remain optional under `prefers-reduced-motion`.
Scenes and accessible text must remain independently usable.
No mandatory sound or autoplay audio.
