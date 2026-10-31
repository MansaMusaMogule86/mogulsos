import type { ServiceDetailContent } from './types';

export const creativeServicesDetails: Record<string, ServiceDetailContent> = {
  'brand-identity': {
    isCoreDivisionService: true,
    headline: 'Brand identity systems architected for distinction and longevity.',
    description:
      'Complete visual identity creation including brand marks, typography pairing, color tokens, and layout systems for ambitious businesses.',
    introduction: [
      'In Dubai’s fast-moving commercial landscape, a logo alone is not a brand identity. True brand recognition comes from a cohesive visual system—how typography, color contrast, spacing, and imagery behave together across your website, proposals, and physical touchpoints.',
      'We craft enduring brand identity systems—combining distinctive wordmarks and symbols with disciplined typographic hierarchies, accessible dark and light color tokens, and practical application templates.',
    ],
    whoItIsFor: [
      'New ventures, family offices, real estate developments, and hospitality concepts launching in Dubai',
      'Established organizations whose visual identity looks fragmented across different divisions or digital channels',
      'Companies repositioning into higher-value enterprise or luxury market segments',
    ],
    problemsAddressed: [
      'Generic logos that fail to scale down cleanly on mobile headers, favicons, or social avatars',
      'Clashing colors and random font choices across presentations, social media, and web pages',
      'Lack of a structured dark-and-light surface palette that passes accessibility contrast standards',
      'Visual identities designed purely for print that break down in digital product interfaces',
    ],
    deliverables: [
      {
        title: 'Visual Direction & Positioning Territories',
        detail: 'Curated art direction boards exploring typographic character, materiality, and tonal contrast.',
      },
      {
        title: 'Primary Wordmark, Emblem & Lockup Suite',
        detail: 'Master vector marks in horizontal, stacked, and monochrome variants for dark and light surfaces.',
      },
      {
        title: 'Typography & Color Token Architecture',
        detail: 'Display and body font pairing (maximum two families) plus hex, RGB, and CSS variable color systems.',
      },
      {
        title: 'Key Touchpoint Applications',
        detail: 'Designed templates for digital headers, business stationery, presentation covers, and social profiles.',
      },
      {
        title: 'Brand Identity Specification Book',
        detail: 'Comprehensive reference guide with clear rules for proportion, clear space, and visual rhythm.',
      },
    ],
    processSteps: [
      {
        title: 'Positioning & Aesthetic Discovery',
        detail: 'We examine your market category, audience expectations, and long-term commercial vision.',
      },
      {
        title: 'Concept Architecture & Mark Crafting',
        detail: 'We develop distinct identity routes grounded in geometry, legibility, and balance.',
      },
      {
        title: 'System Expansion & Stress-Testing',
        detail: 'We test the identity across real web headers, mobile screens, pitch decks, and dark/light backgrounds.',
      },
      {
        title: 'Production Asset Export & Guidelines',
        detail: 'We package vector SVG/EPS/PDF master files and deliver the brand specification book.',
      },
    ],
    scopeConsiderations: [
      'Can include bilingual Arabic and Latin typographic pairing when required for UAE entities.',
      'Font licensing uses either open-source families or transparently scoped commercial font licenses owned by your company.',
      'Connects seamlessly into Moguls Digital website builds and Presentation Design.',
    ],
    faqs: [
      {
        q: 'Why do you test brand identities on digital interfaces before finalizing?',
        a: 'Many traditional logos look fine on a poster but become illegible at 28 pixels tall in a sticky mobile navigation bar. We stress-test every mark in real UI contexts first.',
      },
      {
        q: 'How many font families should a modern brand identity use?',
        a: 'At most two—a characterful display face paired with a highly legible body font. Using more than two families creates visual noise and slows down web page loading.',
      },
      {
        q: 'What file formats do we receive at handover?',
        a: 'You receive a complete organized production folder containing SVG, PDF, EPS, and high-resolution PNG assets across dark, light, and monochrome variants.',
      },
      {
        q: 'Can you evolve our existing brand without throwing away our heritage?',
        a: 'Yes. Many of our engagements are thoughtful brand evolutions—refining proportions, typography, and digital color tokens while preserving recognizable brand equity.',
      },
    ],
    visualNodes: ['Wordmark & Emblem', '2-Font Typographic Scale', 'Dark & Light Tokens', 'Touchpoint System'],
    relatedSlugs: ['brand-guidelines', 'creative-direction', 'website-design'],
  },

  'logo-design': {
    headline: 'Precision wordmarks, monograms, and architectural brand emblems.',
    description:
      'Distilled symbol and wordmark design crafted for instant recognition from mobile favicons to building signage.',
    introduction: [
      'A great mark is deceptively simple. It must hold its weight as a 16-pixel browser favicon, sit with poise in a sticky website header, and command authority on an executive proposal or architectural facade.',
      'We design custom wordmarks, monograms, and geometric emblems built on rigorous optical grids—avoiding trendy gradients or fragile hairline strokes that disappear at small scales.',
    ],
    whoItIsFor: [
      'Startups and new ventures needing a crisp, authoritative wordmark and emblem before launching their website',
      'Multi-division holding groups needing a unified master mark and harmonized division lockups',
      'Brands whose current logo suffers from dated effects, poor kerning, or low-resolution source files',
    ],
    problemsAddressed: [
      'Overcomplicated illustrations that turn into an unrecognizable smudge on mobile screens and social avatars',
      'Poor letter-spacing and optical imbalance in default typed wordmarks',
      'Missing vector master files or lack of clean monochrome/inverse versions',
      'Division or product sub-brands that look like completely unrelated companies',
    ],
    deliverables: [
      {
        title: 'Custom Wordmark & Optical Kerning',
        detail: 'Bespoke or customized letterforms balanced for poise and legibility.',
      },
      {
        title: 'Geometric Emblem / Monogram Mark',
        detail: 'Standalone symbol engineered for avatars, favicons, app icons, and watermarks.',
      },
      {
        title: 'Responsive Lockup Matrix',
        detail: 'Horizontal, stacked, and compact badge variations for diverse layout aspect ratios.',
      },
      {
        title: 'Surface & Contrast Variants',
        detail: 'Full-color, ink-on-ivory, ivory-on-ink, and single-color embossing/stamping versions.',
      },
      {
        title: 'Vector Master Package & Clear-Space Spec',
        detail: 'Clean SVG, EPS, PDF, and PNG exports with minimum size and safe-zone rules.',
      },
    ],
    processSteps: [
      {
        title: 'Briefing & Competitive Visual Audit',
        detail: 'We review category conventions in your sector to ensure your mark stands apart.',
      },
      {
        title: 'Geometric Exploration & Sketching',
        detail: 'We construct candidate marks in pure black-and-white first to test structural form.',
      },
      {
        title: 'Optical Refinement & Scale Testing',
        detail: 'We refine curves, stroke weights, and spacing from 16px up to billboard scale.',
      },
      {
        title: 'Master Vector Packaging',
        detail: 'We export production-ready files for web, print, and social profiles.',
      },
    ],
    scopeConsiderations: [
      'Includes two to three distinct conceptual routes and structured refinement rounds.',
      'Can be expanded into a full Brand Identity system if typography, color palettes, and templates are also needed.',
      'Trademark registration searches and legal filing remain handled by your intellectual property counsel.',
    ],
    faqs: [
      {
        q: 'Why do you present initial logo concepts in black and white first?',
        a: 'If a mark relies on a color gradient to work, it will fail in monochrome contexts, stamps, or dark/light UI switches. Form must work in pure black and white first.',
      },
      {
        q: 'Can you design a bilingual Arabic and English logo lockup?',
        a: 'Yes. We harmonize stroke weights, baseline alignment, and optical proportions between Arabic calligraphy/type and Latin letterforms.',
      },
      {
        q: 'What if we only have a low-res PNG of our existing logo?',
        a: 'We can redraw and optically refine your existing mark into clean, mathematically precise SVG and EPS vector masters.',
      },
      {
        q: 'Do we get full commercial rights to the final chosen mark?',
        a: 'Yes. Upon project completion, full copyright and master vector files of the approved mark transfer to your business.',
      },
    ],
    visualNodes: ['Optical Grid Construction', 'Wordmark + Monogram', '16px to Signage Scale', 'SVG & Vector Masters'],
    relatedSlugs: ['brand-identity', 'brand-guidelines', 'graphic-design'],
  },

  'creative-direction': {
    isCoreDivisionService: true,
    headline: 'Art direction and creative leadership across digital, motion, and campaigns.',
    description:
      'Establish a cohesive aesthetic vision, visual language, and quality bar across website launches, campaigns, and visual production.',
    introduction: [
      'When a company hires separate freelancers for web design, photography, 3D visuals, and social media without unified art direction, the result feels disjointed. Each channel tells a different story.',
      'Our Art & Creative Direction practice acts as the aesthetic guardian for your brand—defining the visual tone, lighting mood, composition rules, and editorial rhythm across every digital surface and campaign.',
    ],
    whoItIsFor: [
      'Growing brands in Dubai preparing a major flagship website launch, rebrand, or market entry campaign',
      'Marketing teams coordinating multiple production vendors (photographers, videographers, UI designers) that need a single creative vision',
      'Executive teams wanting luxury editorial restraint rather than noisy, generic commercial templates',
    ],
    problemsAddressed: [
      'Visual fragmentation between your website, pitch decks, and social media channels',
      'Overuse of cliché stock photography or chaotic rainbow gradients that cheapen brand perception',
      'Production shoots or 3D renders delivered without considering where headlines and UI buttons will sit',
      'Lack of senior creative critique during design and engineering sprints',
    ],
    deliverables: [
      {
        title: 'Creative Vision & Art Direction Book',
        detail: 'Definitive guide covering lighting, color temperature, composition asymmetry, and editorial pacing.',
      },
      {
        title: 'Campaign & Launch Concept Architecture',
        detail: 'Central visual metaphor, headline tone, and multi-channel rollout blueprint.',
      },
      {
        title: 'Shoot, 3D & Illustration Production Briefs',
        detail: 'Frame-by-frame shot lists, crop ratios (16:9, 4:5, 9:16), and negative-space rules for text overlays.',
      },
      {
        title: 'Cross-Division Design Critique & QA',
        detail: 'Hands-on review of web layouts, motion easing, and campaign assets before publication.',
      },
      {
        title: 'Visual Asset Library Curation',
        detail: 'Approved hero compositions, textures, and capability illustrations ready for deployment.',
      },
    ],
    processSteps: [
      {
        title: 'Brand Immersion & Aesthetic Audit',
        detail: 'We review every current visual touchpoint and identify where authority is being lost.',
      },
      {
        title: 'Visual Language & Mood Definition',
        detail: 'We establish the contrast rhythm (e.g., cinematic dark stages balanced with warm ivory editorial spreads).',
      },
      {
        title: 'Production Briefing & Direction',
        detail: 'We direct designers, 3D artists, or photographers against exact layout specifications.',
      },
      {
        title: 'Final Polish & Launch Sign-Off',
        detail: 'We inspect typography, spacing, and motion timing on live screens before go-live.',
      },
    ],
    scopeConsiderations: [
      'Can be engaged as a focused launch-direction package or an ongoing monthly creative director retainer.',
      'On-location physical photo/video crew expenses in Dubai are scoped transparently when live shoots are commissioned.',
      'Integrates directly with Moguls Digital and Moguls Growth.',
    ],
    faqs: [
      {
        q: 'Why does art direction need to happen before photo shoots or 3D production?',
        a: 'If visuals are produced without knowing the website grid, subjects often end up right behind the headline text. Directing compositions around the actual UI layout ensures seamless harmony.',
      },
      {
        q: 'How do you balance dark immersive aesthetics with readability?',
        a: 'By alternating cinematic dark hero/interactive moments with warm ivory editorial sections where long-form service copy, processes, and articles can be read comfortably.',
      },
      {
        q: 'Can you direct our existing in-house designers?',
        a: 'Yes. We frequently provide senior art direction, layout systems, and weekly design reviews to elevate internal marketing teams.',
      },
      {
        q: 'What if we don’t have real project photography yet?',
        a: 'Instead of resorting to generic stock photos of handshakes, we design bespoke architectural capability illustrations and interface diagrams.',
      },
    ],
    visualNodes: ['Aesthetic Territory', 'Dark / Ivory Rhythm', 'Production Shot Specs', 'Multi-Channel QA'],
    relatedSlugs: ['brand-identity', 'photography', '3d-visuals'],
  },

  'social-media-management': {
    isCoreDivisionService: true,
    headline: 'Editorial social media management for authoritative presence.',
    description:
      'Consistent, design-led LinkedIn and Instagram stewardship combining strategic content calendars, carousel design, and community coordination.',
    introduction: [
      'When prospective clients, partners, or candidates in Dubai look up your company on LinkedIn or Instagram, an inactive feed or a grid of mismatched Canva templates immediately undermines your credibility.',
      'We manage your brand’s social presence with editorial discipline—planning monthly themes, writing substantive captions, designing cohesive feed carousels and reels, and maintaining a consistent publishing cadence.',
    ],
    whoItIsFor: [
      'B2B companies, executive teams, real estate groups, hospitality venues, and clinics in the UAE',
      'Founders and leadership teams who want an active, polished LinkedIn and Instagram presence without managing daily production',
      'Brands launching new divisions or services that need structured multi-week social storytelling',
    ],
    problemsAddressed: [
      'Erratic posting schedules where weeks of silence are followed by a hasty promotional graphic',
      'Visual grids where every post uses a different font, color accent, and layout style',
      'Superficial captions that fail to explain your expertise or invite meaningful inquiries',
      'Internal marketing coordinators overwhelmed by having to write, design, and schedule across platforms',
    ],
    deliverables: [
      {
        title: 'Monthly Editorial Calendar & Pillar Plan',
        detail: 'Balanced mix of capability breakdowns, industry insights, process spotlights, and company milestones.',
      },
      {
        title: 'Bespoke Visual & Carousel Production',
        detail: 'Designed multi-slide educational carousels, static frames, and short-form motion graphics.',
      },
      {
        title: 'Platform-Tailored Copywriting',
        detail: 'Executive, insight-led copy for LinkedIn paired with visual, concise storytelling for Instagram.',
      },
      {
        title: 'Approval Workflow & Scheduled Publishing',
        detail: 'Clean monthly batch previews so your team approves everything ahead of time without last-minute rush.',
      },
      {
        title: 'Profile Optimization & Monthly Review',
        detail: 'Bio architecture, highlight covers, link-in-bio routing to your website, and engagement reporting.',
      },
    ],
    processSteps: [
      {
        title: 'Profile Audit & Content Pillar Setup',
        detail: 'We align your social bios, banners, and 4 core content pillars with your website positioning.',
      },
      {
        title: 'Monthly Planning & Topic Briefing',
        detail: 'We map the upcoming month’s posts around your commercial priorities and seasonal milestones.',
      },
      {
        title: 'Copywriting & Visual Batch Production',
        detail: 'We write and design the full batch of carousels, graphics, and motion clips for your review.',
      },
      {
        title: 'Scheduled Publishing & Performance Recap',
        detail: 'We publish on schedule and review which topics drove profile visits and website clicks.',
      },
    ],
    scopeConsiderations: [
      'Delivered on a structured monthly retainer defined by platform count (e.g., LinkedIn + Instagram) and weekly post frequency.',
      'Sensitive customer service complaints or direct sales DMs are escalated immediately to your designated internal contact.',
      'Pairs naturally with Paid Social (`Moguls Growth`) to amplify top-performing organic carousels.',
    ],
    faqs: [
      {
        q: 'Do we get to approve all posts before they go live?',
        a: 'Always. Nothing is ever published to your company channels without your explicit review and sign-off on the monthly content board.',
      },
      {
        q: 'Which social platforms do you focus on?',
        a: 'For most Dubai businesses, LinkedIn (for B2B authority and corporate trust) and Instagram (for visual brand discovery) deliver the highest commercial return. We also support X, YouTube Shorts, and TikTok when scoped.',
      },
      {
        q: 'Can you ghostwrite LinkedIn posts for our founder or executives?',
        a: 'Yes. Pairing company page management with 1-to-2 weekly executive thought-leadership posts on a founder’s personal LinkedIn profile is highly effective.',
      },
      {
        q: 'How do you connect social media to actual business inquiries?',
        a: 'Every content pillar links back to specific service guides, interactive questionnaires, or project brief paths on your website.',
      },
    ],
    visualNodes: ['4 Content Pillars', 'Carousel & Motion Batch', 'Client Approval Gate', 'Scheduled Publishing'],
    relatedSlugs: ['social-content', 'campaign-creative', 'content-seo'],
  },

  'social-content': {
    isCoreDivisionService: true,
    headline: 'Social creative production and modular template systems.',
    description:
      'High-craft educational carousels, motion reels, and editable Figma/Canva template toolkits built on your brand guidelines.',
    introduction: [
      'Social feeds reward clarity and visual rhythm. Multi-slide carousels that break down a complex framework, illustrate a capability, or walk through a before-and-after transformation earn saves and shares from serious buyers.',
      'We produce high-craft social creative assets and modular template systems—giving your brand either fully produced monthly asset packs or a locked-in design toolkit your internal team can populate effortlessly.',
    ],
    whoItIsFor: [
      'In-house marketing teams that need a bespoke, foolproof set of Figma or Canva templates to keep daily posts on-brand',
      'Businesses launching a new product, event, or campaign that need a cohesive 20–30 asset creative pack',
      'Executives and subject-matter experts wanting architectural diagrams and carousel visuals for their insights',
    ],
    problemsAddressed: [
      'Generic, recognizable template-library graphics that look identical to dozens of other businesses',
      'Text-heavy slides with poor line breaks, low contrast, and cramped margins',
      'Inconsistent aspect ratios getting cropped awkwardly across Instagram 4:5 grids, 9:16 stories, and LinkedIn PDF carousels',
      'Slow design turnaround for recurring weekly content formats',
    ],
    deliverables: [
      {
        title: 'Multi-Format Social Design System',
        detail: 'Grid-aligned layouts for 4:5 portrait posts, 9:16 vertical stories/reels, and multi-page LinkedIn document carousels.',
      },
      {
        title: 'Educational Carousel & Diagram Series',
        detail: 'Custom-illustrated swipeable breakdowns of your services, processes, and sector insights.',
      },
      {
        title: 'Short-Form Motion & Reel Graphics',
        detail: 'Animated typography, UI walkthrough clips, and branded intro/outro bumpers.',
      },
      {
        title: 'Editable Team Template Library',
        detail: 'Organized Figma or enterprise Canva master files with locked typography and color tokens.',
      },
      {
        title: 'Export & Safe-Zone Guide',
        detail: 'Clear specifications preventing platform UI overlays from covering captions or logos.',
      },
    ],
    processSteps: [
      {
        title: 'Format & Pillar Architecture',
        detail: 'We define the 5–6 recurring post archetypes your brand needs most.',
      },
      {
        title: 'Grid, Typography & Safe-Zone Design',
        detail: 'We craft the visual layouts using your brand’s exact ink, ivory, violet, and gold tokens.',
      },
      {
        title: 'Asset Production & Motion Polish',
        detail: 'We produce the full asset batch and editable master templates.',
      },
      {
        title: 'Toolkit Handover & Team Walkthrough',
        detail: 'We deliver the production files and show your team how to export crisp assets.',
      },
    ],
    scopeConsiderations: [
      'Can be commissioned as a one-time template toolkit build or ongoing monthly asset production.',
      'AI-assisted visual backgrounds or textures are always art-directed, composited, and typography-set by human designers.',
      'Pairs directly with Social Media Management or Meta/LinkedIn Paid Ads.',
    ],
    faqs: [
      {
        q: 'Why do LinkedIn PDF carousels perform so well for B2B?',
        a: 'Swipeable 5-to-8 slide PDF documents allow you to teach a complete, practical framework in-feed, establishing immediate expertise before the reader even visits your site.',
      },
      {
        q: 'Can you deliver templates our team can edit themselves?',
        a: 'Yes. We build structured Figma and Canva template systems with pre-set text styles and safe zones so your team can update copy without breaking the layout.',
      },
      {
        q: 'What aspect ratios do you design for?',
        a: 'We prioritize 4:5 vertical (1080×1350) for feed maximum screen real estate, 9:16 (1080×1920) for stories/reels, and 16:9 / 4:5 for LinkedIn.',
      },
      {
        q: 'Do you write the slide copy for carousels?',
        a: 'Yes. Distilling a complex topic into 6 punchy, readable slides is part of our editorial and visual production process.',
      },
    ],
    visualNodes: ['4:5 & 9:16 Safe Grids', 'LinkedIn PDF Carousels', 'Motion Bumpers', 'Editable Template Kit'],
    relatedSlugs: ['social-media-management', 'motion-design', 'campaign-creative'],
  },

  'video-production': {
    headline: 'Commercial video direction, editing, and product explainers.',
    description:
      'Scripted brand films, product walkthroughs, executive interviews, and social video edits crafted for digital channels.',
    introduction: [
      'Video is often the fastest way to explain a complex service, showcase a physical space in Dubai, or introduce leadership. Yet unscripted shoots and rambling 5-minute edits lose viewers within the first ten seconds.',
      'We direct, script, and edit tight, purposeful commercial videos—ranging from 60-second product and architecture explainers to executive interview series and multi-format campaign cuts.',
    ],
    whoItIsFor: [
      'Businesses launching a flagship product, software platform, real estate project, or hospitality venue',
      'B2B and advisory firms wanting crisp, well-lit executive thought-leadership videos',
      'Marketing teams needing existing raw footage transformed into structured, high-retention edits',
    ],
    problemsAddressed: [
      'Videos that spend the first 15 seconds on a slow logo intro before stating anything relevant to the viewer',
      'Poor audio clarity, inconsistent color grading, or unreadable subtitles on mobile feeds',
      'Single 16:9 horizontal exports that look tiny when posted on vertical mobile channels',
      'Lack of clear script structure linking the video hook to a concrete call to action',
    ],
    deliverables: [
      {
        title: 'Script, Hook & Storyboard Blueprint',
        detail: 'Time-coded script, visual cue sheet, and opening 3-second hook variants.',
      },
      {
        title: 'Production Direction or Screen/Motion Capture',
        detail: 'Art direction for live-action Dubai shoots or high-resolution UI/3D screen choreography.',
      },
      {
        title: 'Editorial Cut, Color Grade & Sound Design',
        detail: 'Paced editing, brand-aligned color grading, voiceover/audio mastering, and licensed music.',
      },
      {
        title: 'Branded Motion Subtitles & Lower Thirds',
        detail: 'Custom typographic captions and graphics engineered for silent mobile viewing.',
      },
      {
        title: 'Multi-Ratio Delivery Package',
        detail: 'Master exports in 16:9 (web/YouTube), 4:5 (feed), and 9:16 (Reels/Shorts) with optimized bitrates.',
      },
    ],
    processSteps: [
      {
        title: 'Concept, Scripting & Storyboarding',
        detail: 'We lock in the narrative arc, spoken script, and visual frames before production begins.',
      },
      {
        title: 'Capture / Asset Assembly',
        detail: 'We coordinate live filming in the UAE or capture high-res UI and motion sequences.',
      },
      {
        title: 'Offline & Online Editing + Motion',
        detail: 'We assemble the pacing, layer motion graphics, grade color, and mix audio.',
      },
      {
        title: 'Multi-Format Mastering & Delivery',
        detail: 'We export web-optimized MP4/WebM files and poster frames.',
      },
    ],
    scopeConsiderations: [
      'Never configured as annoying autoplay-with-audio on websites; web video is always user-initiated or muted ambient loop with reduced-motion fallback.',
      'Physical studio rental, crew, and location permits in Dubai are scoped transparently based on shoot requirements.',
      'Music and footage licensing is documented for commercial web and paid media usage.',
    ],
    faqs: [
      {
        q: 'Should we put an autoplay video with sound on our website hero?',
        a: 'Never. Unsolicited autoplay audio frustrates visitors and is blocked by modern browsers. Hero visuals should be silent interactive WebGL or clean motion loops, with sound reserved for user-clicked explainers.',
      },
      {
        q: 'Why are burned-in or styled subtitles so important?',
        a: 'Over 75% of mobile social and web viewers watch video with their phone sound muted. Clear, branded typographic captions ensure your message lands silently.',
      },
      {
        q: 'Can you create a product explainer video without filming live actors?',
        a: 'Yes! By combining choreographed UI screen builds, 3D motion graphics, typography, and professional voiceover, we produce sharp software and service explainers entirely in-studio.',
      },
      {
        q: 'Do you deliver vertical and square versions as well as widescreen?',
        a: 'Yes. We reframe compositions properly for 16:9, 4:5, and 9:16 rather than just cropping the sides off.',
      },
    ],
    visualNodes: ['Script & Storyboard', 'Capture & UI Choreography', 'Grade, Sound & Captions', '16:9 / 4:5 / 9:16 Masters'],
    relatedSlugs: ['motion-design', '3d-visuals', 'campaign-creative'],
  },

  'motion-design': {
    isCoreDivisionService: true,
    headline: 'Motion graphics, animated interfaces, and kinetic brand systems.',
    description:
      'Purposeful 2D/3D motion design for product explainers, interactive web moments, logo reveals, and campaign assets.',
    introduction: [
      'Motion should explain, guide attention, and convey craft—never distract or block the user from reading. When choreography is deliberate, a 10-second animated diagram can clarify an architecture that would take three paragraphs to describe.',
      'We design and produce purposeful motion graphics—from kinetic typography and UI workflow walkthroughs to interactive WebGL transitions and looping brand elements.',
    ],
    whoItIsFor: [
      'Technology, AI, financial, and B2B companies needing to visualize invisible software or operational workflows',
      'Brands wanting cohesive motion guidelines (easing curves, transitions, title cards) across video and web',
      'Marketing teams commissioning high-impact animated launch reels and presentation sequences',
    ],
    problemsAddressed: [
      'Static diagrams that fail to show how data, requests, or processes flow over time',
      'Jarring, linear animations that feel robotic or cause motion sickness',
      'Heavy video files embedded on websites where a lightweight SVG, Lottie, or shader animation would load 10× faster',
      'Lack of reduced-motion fallbacks for accessibility',
    ],
    deliverables: [
      {
        title: 'Motion Storyboard & Styleframes',
        detail: 'Keyframes illustrating composition, color contrast, and transition states prior to animation.',
      },
      {
        title: 'Animated Product & Architecture Explainers',
        detail: 'Smooth choreography demonstrating how your platform, service, or workflow operates.',
      },
      {
        title: 'Web-Ready Interactive & Looping Assets',
        detail: 'Optimized SVG, CSS/GSAP sequences, or compressed WebM/MP4 loops with static poster fallbacks.',
      },
      {
        title: 'Brand Motion Toolkit (Intro / Outro / Lower Thirds)',
        detail: 'Reusable animated title cards, transitions, and emblem reveals for your video content.',
      },
      {
        title: 'Motion Timing & Easing Specification',
        detail: 'Documentation of cubic-bezier curves, durations, and `prefers-reduced-motion` rules.',
      },
    ],
    processSteps: [
      {
        title: 'Narrative & Keyframe Design',
        detail: 'We design static styleframes first so visual hierarchy and brand tokens are approved early.',
      },
      {
        title: 'Choreography & Easing Refinement',
        detail: 'We animate with expressive exponential easing curves so movement feels natural and precise.',
      },
      {
        title: 'Format Optimization & Fallback Pairing',
        detail: 'We export for the target medium (web code, Lottie, or high-res video) alongside static fallbacks.',
      },
      {
        title: 'Cross-Device Playback QA',
        detail: 'We verify smooth framerate and reduced-motion behavior.',
      },
    ],
    scopeConsiderations: [
      'All web-embedded motion is engineered with a designed static fallback for visitors with `prefers-reduced-motion: reduce`.',
      'Delivery format (video render vs. interactive code/SVG) is selected based on where the asset will live.',
      'Collaborates closely with Moguls Digital for scroll and interactive web motion.',
    ],
    faqs: [
      {
        q: 'How do you keep motion graphics from slowing down our website?',
        a: 'For web interfaces, we use hardware-accelerated CSS transforms, lightweight SVG/canvas shaders, and IntersectionObserver pausing instead of multi-megabyte GIFs or uncompressed videos.',
      },
      {
        q: 'What are styleframes and why do we approve them first?',
        a: 'Styleframes are the exact visual scenes of your animation presented as still artwork. Approving styleframes before animating saves time and ensures the final piece matches your expectations.',
      },
      {
        q: 'Can motion graphics be embedded into our sales presentations?',
        a: 'Yes. Subtle looping diagrams inside keynote or pitch presentations are a powerful way to illustrate system architecture.',
      },
      {
        q: 'How do you handle accessibility for users sensitive to motion?',
        a: 'Every web motion component checks the operating system’s `prefers-reduced-motion` setting and automatically displays a clean static composition when requested.',
      },
    ],
    visualNodes: ['Approved Styleframes', 'Exponential Easing', 'Web / Video Export', 'Reduced-Motion Fallback'],
    relatedSlugs: ['3d-visuals', 'video-production', 'presentation-design'],
  },

  '3d-visuals': {
    isCoreDivisionService: true,
    headline: '3D visual production, procedural WebGL sculptures, and AI-assisted visual craft.',
    description:
      'Bespoke 3D hero sculptures, architectural product renders, and art-directed AI-assisted visual compositions.',
    introduction: [
      'When you want a flagship visual centerpiece—whether an interactive 3D WebGL sculpture on your homepage or bespoke product and architectural renders—generic stock 3D models immediately give themselves away.',
      'We create original 3D visual assets, procedural shader sculptures, and carefully art-directed AI-assisted visual compositions—combining lighting depth, brand color harmony, and strict performance budgets.',
    ],
    whoItIsFor: [
      'Technology, luxury, real estate, and design-forward brands wanting a memorable visual centerpiece',
      'Product companies needing pristine 3D visualizations before physical manufacturing or photography is complete',
      'Marketing teams looking for cohesive, art-directed visual worlds across web and campaign launches',
    ],
    problemsAddressed: [
      'Cliché spinning wireframe globes or chaotic particle backgrounds that add visual clutter without meaning',
      'Massive 50MB 3D model downloads that freeze mobile browsers or require annoying "Click to Enter" loading bars',
      'Raw, unedited AI images with distorted details, random colors, and zero connection to your brand palette',
      'Lack of a designed 2D poster fallback when WebGL is unavailable on older devices',
    ],
    deliverables: [
      {
        title: 'Procedural WebGL / Three.js Interactive Sculptures',
        detail: 'Zero-download procedural geometry and custom GLSL shaders that respond smoothly to pointer and division selection.',
      },
      {
        title: 'High-Resolution 3D Stills & Turntable Loops',
        detail: 'Studio-lit 3D renders for hero banners, service headers, and presentation covers.',
      },
      {
        title: 'Art-Directed AI-Assisted Visual Production',
        detail: 'Curated, human-composited, color-graded visual concepts retouched to meet editorial quality standards.',
      },
      {
        title: 'Designed Static SVG / Poster Fallbacks',
        detail: 'Matching 2D architectural illustrations ensuring the page looks complete even without WebGL.',
      },
      {
        title: 'GPU Performance & Disposal Integration',
        detail: 'DPR capping, offscreen pause logic, and memory cleanup for web-embedded 3D.',
      },
    ],
    processSteps: [
      {
        title: 'Visual Metaphor & Lighting Study',
        detail: 'We define the sculptural form (ribbons, strands, architectural lattices) and lighting palette.',
      },
      {
        title: 'Shader / 3D Scene Prototyping',
        detail: 'We build the geometry, materials, and interactive state transitions.',
      },
      {
        title: 'Compositing, Retouching & Fallback Art',
        detail: 'We grade colors to match your brand tokens and craft the static fallback composition.',
      },
      {
        title: 'Performance Profiling & Integration',
        detail: 'We test across mobile and desktop GPUs to ensure smooth 60fps rendering without blocking HTML.',
      },
    ],
    scopeConsiderations: [
      'Procedural shader sculptures require zero external GLB downloads, eliminating loading gates and keeping initial page loads instant.',
      'Where AI-assisted generation is used for moodboards or texture plates, human designers handle all layout, typography, retouching, and quality control.',
      'All semantic HTML text remains outside the 3D canvas for full accessibility and SEO.',
    ],
    faqs: [
      {
        q: 'Why use procedural WebGL geometry instead of downloading huge 3D files?',
        a: 'Procedural Three.js geometry and GLSL shaders generate mathematical ribbons and illuminated strands directly on the GPU in kilobytes—meaning instant load times and no "Loading 0%..." gate.',
      },
      {
        q: 'How do you use AI in visual production responsibly?',
        a: 'We never publish raw, unedited AI outputs. We use AI-assisted workflows strictly for controlled texture generation, lighting exploration, and background plates, which are then composited, color-graded, and typeset by senior designers.',
      },
      {
        q: 'What happens if a user’s browser has WebGL disabled?',
        a: 'Every 3D stage has a designed static SVG/poster layer underneath so the layout remains balanced and complete.',
      },
      {
        q: 'Does 3D WebGL drain mobile phone batteries?',
        a: 'We cap device pixel ratio at 2, reduce particle/segment counts on mobile viewports, and automatically pause the render loop whenever the section scrolls out of view or the browser tab is hidden.',
      },
    ],
    visualNodes: ['Sculptural Concept', 'GLSL Shader / 3D Build', 'Art-Directed Retouch', 'Static SVG Fallback'],
    relatedSlugs: ['creative-direction', 'motion-design', 'website-design'],
  },

  photography: {
    headline: 'Commercial photography direction, visual curation, and image treatment.',
    description:
      'Art direction for architectural, team, and product photography in Dubai, plus cohesive color treatment for existing image libraries.',
    introduction: [
      'Nothing signals authenticity faster than original photography of your spaces, people, and craft—and nothing undermines a luxury layout faster than mismatched lighting or generic corporate stock photos.',
      'We direct commercial photography shoots in Dubai and curate/treat existing visual libraries—establishing consistent color grading, cropping ratios, and tonal harmony across your digital presence.',
    ],
    whoItIsFor: [
      'Hospitality venues, real estate developers, clinics, and corporate offices in Dubai needing original visual assets',
      'Leadership teams wanting dignified, editorial executive portraits rather than stiff passport-style headshots',
      'Brands with existing photo archives from different shoots that need unified color grading and web cropping',
    ],
    problemsAddressed: [
      'Overused stock photos that appear on dozens of competitor websites',
      'Photos shot with harsh fluorescent lighting or clashing color casts that fight your website palette',
      'Images cropped without breathing room for UI cards or responsive aspect-ratio changes',
      'Unoptimized 15MB raw image uploads slowing down page loads',
    ],
    deliverables: [
      {
        title: 'Photography Art Direction & Shot List',
        detail: 'Detailed pre-production brief covering angles, lighting mood, wardrobe/styling notes, and required aspect ratios.',
      },
      {
        title: 'On-Set / Remote Creative Supervision',
        detail: 'Directing composition and negative space so every frame fits its intended website or campaign placement.',
      },
      {
        title: 'Editorial Retouching & Color Grading LUT',
        detail: 'Consistent tonal treatment harmonizing skin tones, architectural shadows, and brand warmth.',
      },
      {
        title: 'Responsive Web & Social Crop Matrix',
        detail: 'Exported WebP/AVIF and high-res masters in 16:9, 4:3, 1:1, and 4:5 ratios.',
      },
      {
        title: 'Image Usage & Alt-Text Catalog',
        detail: 'Organized asset folder with descriptive accessibility `alt` attributes ready for CMS upload.',
      },
    ],
    processSteps: [
      {
        title: 'Visual Audit & Shot Planning',
        detail: 'We map the exact pages and sections where photography is needed and build a shot list.',
      },
      {
        title: 'Pre-Production & Lighting Direction',
        detail: 'We align on locations, lighting setup, and framing rules.',
      },
      {
        title: 'Shoot Direction or Archive Curation',
        detail: 'We supervise capture or select the strongest frames from your existing archive.',
      },
      {
        title: 'Color Grading, Retouching & Web Compression',
        detail: 'We grade, retouch, and compress images into modern next-gen web formats.',
      },
    ],
    scopeConsiderations: [
      'Studio rental, specialist equipment, and location permits in the UAE are scoped transparently per shoot day.',
      'We never invent team members or use deceptive stock portraits to represent company personnel.',
      'Where client photography is not yet available, we design honest architectural capability illustrations instead.',
    ],
    faqs: [
      {
        q: 'What if we are not ready for a custom photo shoot before launching our website?',
        a: 'No problem. Rather than filling your site with generic stock photos, we design editorial typography layouts and custom architectural capability illustrations first, and slot in original photography later.',
      },
      {
        q: 'Can you make photos from three different past shoots look cohesive?',
        a: 'Yes. Through consistent color grading, shadow contrast curves, and standardized cropping ratios, we can unify disparate photo archives.',
      },
      {
        q: 'How do you prepare images so they don’t slow down our website?',
        a: 'We export responsive dimensions in modern WebP/AVIF formats with explicit width/height attributes to prevent layout shift.',
      },
      {
        q: 'Do you coordinate shoots in Dubai?',
        a: 'Yes, we provide art direction and coordinate production partners across Dubai and the UAE.',
      },
    ],
    visualNodes: ['Shot List & Framing', 'Lighting Supervision', 'Editorial Color Grade', 'WebP / Responsive Crops'],
    relatedSlugs: ['creative-direction', 'brand-identity', 'brand-guidelines'],
  },

  'graphic-design': {
    isCoreDivisionService: true,
    headline: 'Visual systems, capability illustrations, and corporate collateral.',
    description:
      'Bespoke SVG diagrams, service brochures, company profiles, and structured visual systems across digital and print.',
    introduction: [
      'Complex B2B, technology, and advisory services are difficult to grasp through walls of text alone. Clear architectural diagrams, capability illustrations, and well-typeset company profiles turn abstract services into tangible systems.',
      'We design custom visual systems—ranging from the bespoke SVG interface and workflow diagrams embedded across your website to executive company profiles, service one-pagers, and event collateral.',
    ],
    whoItIsFor: [
      'B2B, technology, real estate, and consulting firms needing clear visual diagrams to explain their services',
      'Sales teams requiring a refined, printable and digital PDF Company Profile for UAE procurement and enterprise tenders',
      'Organizations needing cohesive iconography, infographic modules, and visual templates',
    ],
    problemsAddressed: [
      'Walls of text on service pages without a visual anchor to explain how the system works',
      'Mismatched icon packs downloaded from different free libraries with varying stroke weights',
      'Dated PDF company profiles that look nothing like the modernized website',
      'Cluttered infographics with unreadable tiny labels',
    ],
    deliverables: [
      {
        title: 'Custom Capability & Architecture Illustrations',
        detail: 'Crisp vector/SVG diagrams illustrating workflows, interfaces, and system layers.',
      },
      {
        title: 'Bespoke Iconography & Badge System',
        detail: 'Unified stroke-weight vector icons for divisions, deliverables, and industry sectors.',
      },
      {
        title: 'Executive Company Profile & Service Sheets',
        detail: 'Editorial PDF company profile and 1-page service summaries formatted for screen reading and print.',
      },
      {
        title: 'Exhibition, Event & Environmental Graphics',
        detail: 'Large-format typographic backdrops, signage, and booth visuals for Dubai conferences.',
      },
      {
        title: 'Source Vector & Print-Ready Package',
        detail: 'Organized SVG, Figma, and CMYK/RGB PDF production files.',
      },
    ],
    processSteps: [
      {
        title: 'Information & Concept Distillation',
        detail: 'We turn complex technical paragraphs into clear 3-to-4 step visual models.',
      },
      {
        title: 'Grid, Stroke & Token Alignment',
        detail: 'We construct every diagram and layout using your exact brand color and typography tokens.',
      },
      {
        title: 'Layout & Vector Craft',
        detail: 'We produce responsive SVG diagrams for web and high-res layouts for documents.',
      },
      {
        title: 'Quality Check & Multi-Medium Export',
        detail: 'We verify legibility at both mobile screen widths and full-page document sizes.',
      },
    ],
    scopeConsiderations: [
      'All capability illustrations on public pages are clearly labeled as illustrative blueprints rather than unverified client projects.',
      'Commercial print production vendor fees in Dubai are quoted separately if physical printing is requested.',
      'Integrates directly with Website Design, Presentation Design, and Brand Identity.',
    ],
    faqs: [
      {
        q: 'Why use SVG diagrams on service pages instead of flat PNG screenshots?',
        a: 'Inline SVG diagrams stay razor-sharp at any zoom level or Retina display, load in a fraction of a kilobyte, and use your exact CSS design tokens.',
      },
      {
        q: 'Can you design our official PDF Company Profile for Dubai tenders?',
        a: 'Yes. In the UAE market, procurement teams and partners frequently request a downloadable PDF Company Profile alongside your website; we design both as one unified system.',
      },
      {
        q: 'Do you avoid random rainbow colors across different diagrams?',
        a: 'Yes. We restrict every diagram to your core brand palette (such as ink black, warm ivory, electric violet, soft lavender, and restrained gold detail) so the entire website feels intentional.',
      },
      {
        q: 'Are the source files editable by our team later?',
        a: 'Yes. We deliver clean, layered Figma and SVG master files.',
      },
    ],
    visualNodes: ['Concept Distillation', 'SVG System Diagrams', 'PDF Company Profile', 'Unified Iconography'],
    relatedSlugs: ['presentation-design', 'brand-guidelines', 'website-design'],
  },

  'campaign-creative': {
    isCoreDivisionService: true,
    headline: 'Integrated campaign creative built to capture attention and convert.',
    description:
      'Cohesive visual and copy concepts across paid social ads, display banners, launch landing pages, and out-of-home formats.',
    introduction: [
      'A campaign is more than a media budget—it is a central creative idea executed consistently across every placement a buyer encounters. When your LinkedIn ad, Instagram reel, and landing page hero share one unmistakable visual and verbal hook, recall and conversion compound.',
      'We develop and produce complete campaign creative toolkits—pairing bold editorial headlines with disciplined art direction across static, carousel, motion, and landing page formats.',
    ],
    whoItIsFor: [
      'Brands launching a new service division, seasonal offer, property release, or flagship event in Dubai',
      'Growth teams needing fresh, high-craft creative variations to overcome ad fatigue on Meta, LinkedIn, and Google',
      'Companies wanting agency-caliber campaign concepts without hiring a bloated traditional ad network',
    ],
    problemsAddressed: [
      'Disconnected ad visuals that look like an afterthought compared to the core brand',
      'Single-asset campaigns that fail to test multiple value-proposition hooks (speed vs. authority vs. ROI)',
      'Cluttered banner layouts where 5 competing badges obscure the primary message',
      'Mismatch between the ad creative promise and the landing page hero',
    ],
    deliverables: [
      {
        title: 'Campaign Creative Concept & Hook Matrix',
        detail: '2–3 distinct messaging and visual angles targeting specific buyer pain points.',
      },
      {
        title: 'Multi-Placement Ad Suite (Static & Carousel)',
        detail: 'Production assets sized for 1:1, 4:5, 9:16, and 1.91:1 across Meta, LinkedIn, and display networks.',
      },
      {
        title: 'Short-Form Motion Ad Variations',
        detail: '6-to-15 second animated hooks designed for high thumb-stop ratios.',
      },
      {
        title: 'Matching Landing Page Hero Visuals',
        detail: 'Coordinated header compositions ensuring instant visual continuity after the click.',
      },
      {
        title: 'Organized Campaign Asset Library',
        detail: 'Named, compressed, and categorized files ready for immediate media buyer upload.',
      },
    ],
    processSteps: [
      {
        title: 'Offer, Audience & Hook Strategy',
        detail: 'We collaborate with Moguls Growth to define the commercial offer and target segments.',
      },
      {
        title: 'Key Visual & Headline Concepting',
        detail: 'We design master campaign frames and headline pairings for stakeholder review.',
      },
      {
        title: 'Multi-Ratio Production & Motion',
        detail: 'We adapt approved concepts across every required static, carousel, and motion ratio.',
      },
      {
        title: 'Media Handoff & Iteration Support',
        detail: 'We package assets cleanly and produce rapid variations of top-performing hooks.',
      },
    ],
    scopeConsiderations: [
      'Scoped by the number of core creative concepts and total aspect-ratio deliverables per campaign flight.',
      'Works seamlessly alongside Moguls Growth Paid Media Management and Moguls Digital Landing Pages.',
      'All claims and visual illustrations are kept honest and accurate to your actual offering.',
    ],
    faqs: [
      {
        q: 'How many creative variations should we launch in a paid campaign?',
        a: 'We typically recommend testing 3 distinct conceptual angles (e.g., an editorial authority angle, a problem/solution diagram angle, and a direct deliverable breakdown) across static and motion formats.',
      },
      {
        q: 'Why does visual continuity between the ad and landing page matter?',
        a: 'When a user clicks an ad with a specific headline and color mood and lands on a page with the exact same visual language, cognitive trust is instant and bounce rates drop.',
      },
      {
        q: 'Can you produce bilingual Arabic and English campaign assets?',
        a: 'Yes. We adapt layout direction (RTL/LTR) and typography properly for both Arabic and English placements.',
      },
      {
        q: 'Can we commission campaign creative even if our team runs the ad buying in-house?',
        a: 'Absolutely. We deliver a cleanly organized folder of ad-ready exports and copy sheets for your internal media buyer.',
      },
    ],
    visualNodes: ['3 Hook Angles', '4:5 / 9:16 / 16:9 Suite', 'Motion Ad Variants', 'Matched Landing Hero'],
    relatedSlugs: ['meta-ads', 'paid-media', 'social-content'],
  },

  'presentation-design': {
    isCoreDivisionService: true,
    headline: 'Executive presentation, pitch deck, and proposal design.',
    description:
      'Transform complex commercial narratives into clear, persuasive investor decks, sales proposals, and board presentations.',
    introduction: [
      'High-stakes commercial deals, partnerships, and investment rounds in Dubai are frequently decided over a presentation deck. Even a brilliant strategy loses momentum if presented on overcrowded slides with 8-point bullet lists and inconsistent charts.',
      'We structure and design executive presentations—refining your narrative pacing, distilling one clear takeaway per slide, and crafting custom architectural diagrams and editable master templates.',
    ],
    whoItIsFor: [
      'Founders and executives preparing investor pitch decks, board briefings, or strategic partnership proposals',
      'B2B sales and consulting teams needing a modular, high-converting credentials and proposal deck',
      'Conference keynote speakers and leadership teams presenting at major Dubai industry events',
    ],
    problemsAddressed: [
      'Overloaded slides that try to act as both a spoken backdrop and a dense 10-page word document',
      'Sales reps assembling Frankenstein decks by copying mismatched slides from five old proposals',
      'Complex financial, technical, or operational models presented as illegible spreadsheet screenshots',
      'Fonts and layouts breaking when shared across Windows, Mac, or PDF viewers',
    ],
    deliverables: [
      {
        title: 'Narrative Arc & Slide-by-Slide Storyboard',
        detail: 'Restructuring your deck flow (Context → Problem → Architecture → Scope/Model → Next Steps) with sharp action titles.',
      },
      {
        title: 'Bespoke Slide Master & Grid System',
        detail: '16:9 widescreen layouts in dark and warm-ivory themes with locked typography and margins.',
      },
      {
        title: 'Custom Diagrams, Tables & Data Visuals',
        detail: 'Clean, branded architectural charts, process timelines, and comparison matrices.',
      },
      {
        title: 'Editable Source Deck (Figma / PowerPoint / Keynote / Google Slides)',
        detail: 'Fully editable master file using safe or embedded fonts so your team can customize proposals anytime.',
      },
      {
        title: 'Optimized Interactive PDF Export',
        detail: 'Crisp, lightweight PDF version with clickable table of contents and inquiry links.',
      },
    ],
    processSteps: [
      {
        title: 'Narrative Audit & Slide Pruning',
        detail: 'We review your draft notes or existing deck and sharpen the headline story across every slide.',
      },
      {
        title: 'Master Theme & Key Slide Design',
        detail: 'We design 4–5 anchor slides first to lock in visual tone and data styling.',
      },
      {
        title: 'Full Deck Production & Diagramming',
        detail: 'We lay out every slide, redraw charts, and refine typographic spacing.',
      },
      {
        title: 'Editable Template & PDF Handover',
        detail: 'We test cross-platform font rendering and hand over both editable and PDF masters.',
      },
    ],
    scopeConsiderations: [
      'Delivery software (PowerPoint, Google Slides, Keynote, or Figma Slides) is selected upfront to match your team’s daily workflow.',
      'We can design both live spoken decks (visual, concise) and standalone "leave-behind" reading decks (structured with fuller context).',
      'Confidential financial or strategic figures are handled with strict discretion.',
    ],
    faqs: [
      {
        q: 'What is the secret to a persuasive executive slide?',
        a: 'Every slide should have an "action title" that states the conclusion (e.g., "Phased rollout reduces integration risk by separating discovery from build") rather than a generic label like "Slide 4: Process."',
      },
      {
        q: 'Will our sales team be able to edit text and numbers themselves?',
        a: 'Yes. Every chart, table, and text box is built natively inside your chosen presentation tool using master slide layouts.',
      },
      {
        q: 'Should our deck be dark mode or light mode?',
        a: 'We often design a hybrid rhythm—using dark ink slides for section dividers and hero statements, and warm ivory slides for detailed scope tables and readable breakdowns.',
      },
      {
        q: 'How fast can you turn around a priority pitch or proposal deck?',
        a: 'A 15-to-25 slide executive deck typically takes 5 to 10 business days, with expedited sprints available for urgent deadlines.',
      },
    ],
    visualNodes: ['Narrative Storyboard', 'Action-Title Hierarchy', 'Custom System Charts', 'Editable Master Deck'],
    relatedSlugs: ['graphic-design', 'copywriting', 'brand-positioning'],
  },

  copywriting: {
    headline: 'Commercial copywriting, verbal identity, and service architecture.',
    description:
      'Clear, authoritative website copy, service specifications, executive articles, and verbal tone guidelines free of empty jargon.',
    introduction: [
      'Beautiful design cannot rescue vague copywriting. When a website relies on hollow buzzwords, repetitive filler paragraphs, or unedited placeholder text, discerning buyers lose confidence immediately.',
      'We write precise, substantive commercial copy—structuring headlines, service deliverables, industry pages, FAQs, and long-form articles that explain what you do with unmistakable clarity.',
    ],
    whoItIsFor: [
      'Businesses launching a new website or redesign whose internal team doesn’t have time to write 20+ unique pages',
      'Technical, AI, engineering, and advisory firms that struggle to explain complex capabilities simply to commercial buyers',
      'Brands needing a consistent verbal tone across web pages, pitch decks, and email communications',
    ],
    problemsAddressed: [
      'Every service page repeating the exact same generic paragraph with only the service name swapped',
      'Vague corporate slogans that fail to state who the service is for, what problems it solves, or what is delivered',
      'Jargon-heavy technical explanations that alienate C-suite and commercial decision-makers',
      'Scaffold or "coming soon" placeholder text left visible on public routes',
    ],
    deliverables: [
      {
        title: 'Verbal Identity & Messaging Framework',
        detail: 'Taglines, elevator positioning, tone-of-voice principles, and vocabulary guidelines.',
      },
      {
        title: 'Website & Landing Page Copy Deck',
        detail: 'Complete, section-by-section copy written to match exact wireframe and typography character counts.',
      },
      {
        title: 'Differentiated Service & Industry Specifications',
        detail: 'Unique headlines, introductions, audiences, deliverables, and FAQs for every published route.',
      },
      {
        title: 'Long-Form Editorial Articles & Guides',
        detail: 'Substantive 800–1,200 word original articles addressing high-value buyer questions.',
      },
      {
        title: 'Microcopy & Interactive Flow Scripting',
        detail: 'Clear labels for navigation, buttons, form helpers, questionnaires, and guided assistants.',
      },
    ],
    processSteps: [
      {
        title: 'Subject-Matter Interview & Audit',
        detail: 'We interview your leads and audit existing sales materials to capture accurate domain facts.',
      },
      {
        title: 'Messaging Hierarchy & Page Outlines',
        detail: 'We define the headline hook and argument structure for each route before full drafting.',
      },
      {
        title: 'Drafting & Design Integration',
        detail: 'We write copy directly alongside visual layouts so line breaks and rhythm feel natural.',
      },
      {
        title: 'Editorial Proofing & Fact Verification',
        detail: 'We verify that zero invented claims, fake stats, or scaffold phrases exist anywhere in the text.',
      },
    ],
    scopeConsiderations: [
      'Writing persuasive descriptions of your proposed services never requires inventing fake client names, metrics, or testimonials.',
      'Technical and industry-specific terminology is reviewed with your subject-matter experts before publication.',
      'Bilingual English and Arabic copywriting/transcreation can be scoped for UAE audiences.',
    ],
    faqs: [
      {
        q: 'How do you write compelling service pages if we cannot publish client names yet?',
        a: 'Buyers care most about whether you understand their problem and have a disciplined process to solve it. Detailing concrete deliverables, scope considerations, and specific FAQs proves expertise without needing to invent client stories.',
      },
      {
        q: 'Why should copywriting and web design happen together?',
        a: 'When copy is written in isolation in a Word document, headlines often end up too long or too short for the visual layout. Designing and writing in tandem ensures deliberate line breaks and balanced compositions.',
      },
      {
        q: 'Do you avoid generic AI filler copy?',
        a: 'Yes. Every page is structured and edited with specific commercial scenarios, concrete deliverables, and plain-spoken clarity.',
      },
      {
        q: 'Can you audit and rewrite our existing website copy?',
        a: 'Yes. We frequently audit existing sites to replace repetitive boilerplate and vague headlines with structured, high-converting copy.',
      },
    ],
    visualNodes: ['Messaging Architecture', 'Page-by-Page Copy Deck', 'Deliverables & FAQs', 'Microcopy & UX Scripts'],
    relatedSlugs: ['website-design', 'brand-positioning', 'content-seo'],
  },

  'brand-guidelines': {
    isCoreDivisionService: true,
    headline: 'Digital brand guidelines and design governance documentation.',
    description:
      'Equip your internal teams and external partners with a clear, living reference for logos, color tokens, typography, and layout rules.',
    introduction: [
      'Even the strongest brand identity degrades within six months if employees, developers, and external agencies do not have a clear, accessible handbook showing how to use it—and what to avoid.',
      'We author comprehensive Digital Brand Guidelines—documenting exact hex/CSS color tokens, contrast rules for dark and light sections, typographic scales, logo clear space, and real layout examples.',
    ],
    whoItIsFor: [
      'Growing organizations onboarding new marketers, designers, or software developers',
      'Multi-division companies needing one unified design system across all business units',
      'Brands transitioning from a newly completed rebrand into daily multi-channel execution',
    ],
    problemsAddressed: [
      'Vendors stretching logos, recoloring the official mark with random neon hues, or using unapproved fonts',
      'Low-contrast text combinations that fail accessibility standards on light or dark backgrounds',
      'Developers guessing spacing values, border radii, or button hover states',
      'Static PDF brand books buried on a hard drive where nobody can find the actual SVG logo files',
    ],
    deliverables: [
      {
        title: 'Logo Usage, Proportion & Do/Don’t Rules',
        detail: 'Clear specifications for minimum sizes, safe zones, background contrast, and prohibited alterations.',
      },
      {
        title: 'Color Palette & Contrast Matrix',
        detail: 'Exact hex, RGB, and CSS token definitions (`#141418`, `#F7F5F0`, `#7456F2`, `#EAE4FF`, `#666671`, `#B99A62`) with approved text/surface pairings.',
      },
      {
        title: 'Typography Scale & Line-Break Rules',
        detail: 'Font families, weights, fluid `clamp()` sizing, line-height standards, and tracking limits.',
      },
      {
        title: 'Layout Rhythm & Component Patterns',
        detail: 'Guidelines for container widths (1280–1440px), dark-to-ivory section pacing, cards, and buttons.',
      },
      {
        title: 'Centralized Asset & Token Repository',
        detail: 'Organized download package of logos, fonts, templates, and CSS/Figma variables.',
      },
    ],
    processSteps: [
      {
        title: 'Brand Asset & Token Inventory',
        detail: 'We audit all existing marks, colors, fonts, and UI components across your touchpoints.',
      },
      {
        title: 'Rule Codification & Contrast Testing',
        detail: 'We verify WCAG contrast ratios for every approved background and text combination.',
      },
      {
        title: 'Visual Examples & Do/Don’t Illustration',
        detail: 'We build clear side-by-side examples of proper vs. improper brand execution.',
      },
      {
        title: 'Handbook Publication & Team Walkthrough',
        detail: 'We deliver the digital guidelines and brief your design, marketing, and engineering teams.',
      },
    ],
    scopeConsiderations: [
      'Can be delivered as an interactive web-based brand portal, a structured Figma documentation file, and a shareable PDF handbook.',
      'Includes practical developer tokens so brand guidelines translate directly into `tokens.css`.',
      'Pairs with Brand Identity and Digital Product Design.',
    ],
    faqs: [
      {
        q: 'Why do brand guidelines need to include CSS and UI rules?',
        a: 'Today, 90% of brand interactions happen on screens. Documenting container widths, button states, and dark/light contrast tokens is essential for digital consistency.',
      },
      {
        q: 'Why do you discourage giving every card or division a random rainbow accent?',
        a: 'Covering a website in five or six competing neon colors destroys visual cohesion and makes a B2B brand look like a gaming template. Using one primary interaction color (like electric violet) with restrained gold details keeps the system unified.',
      },
      {
        q: 'How do you prevent excessive negative letter-spacing in headlines?',
        a: 'We specify exact tracking limits (e.g., `-0.02em` to `-0.025em`) and comfortable line heights (`1.06` to `1.15`) so letters never collide.',
      },
      {
        q: 'Can external partners use this guide when producing event or campaign materials?',
        a: 'Yes. The handbook is designed specifically so you can hand it to any printer, event producer, or developer with zero ambiguity.',
      },
    ],
    visualNodes: ['Logo & Clear-Space Rules', 'Hex & CSS Color Tokens', 'Typographic Hierarchy', 'Dark / Ivory UI Patterns'],
    relatedSlugs: ['brand-identity', 'product-design', 'logo-design'],
  },
};

