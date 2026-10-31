# Performance, Accessibility and QA Gates

1. WebGL feature detect and device capability detection with static alternative.
2. Reduce draw calls; compress meshes with Draco/Meshopt as appropriate.
3. Optimize textures using KTX2; lazy-load non-hero divisions.
4. Unmount scenes and kill GSAP timelines/ScrollTriggers on navigation.
5. Prevent blank content if JS or GPU fails.
6. Test Lighthouse and real-user LCP, CLS, INP, memory and frame pacing.
7. Verify keyboard and screen-reader service navigation independent of Canvas.
8. Test RTL Arabic layout after translation, contrast and mobile touch targets.
9. Validate content, legal pages, analytics consent, forms and error handling.
10. Test Safari iOS, Android Chrome, Brave, Firefox and desktop GPU fallback.
