import type { ServiceDetailContent } from './types';

export const digitalServicesDetails: Record<string, ServiceDetailContent> = {
  'website-design': {
    isCoreDivisionService: true,
    headline: 'Business websites architected for commercial authority in Dubai.',
    description:
      'Custom business website design combining editorial typography, clear service architecture, and responsive conversion journeys.',
    introduction: [
      'A business website in Dubai must establish trust within seconds across an international audience of executives, procurement teams, and private clients. Generic templates and cluttered layouts obscure what makes an organization credible.',
      'We design bespoke business websites from the ground up—structuring your positioning, service hierarchy, typography, and inquiry paths so visitors immediately understand what you offer and how to engage your team.',
    ],
    whoItIsFor: [
      'Established UAE companies whose current website no longer reflects the scale or caliber of their operations',
      'New ventures and regional headquarters launching in Dubai that require immediate commercial credibility',
      'B2B and high-consideration service firms needing structured service pages rather than a single brochure page',
    ],
    problemsAddressed: [
      'Visitors leaving within seconds because the headline and layout fail to explain what the business actually does',
      'Inconsistent visual hierarchy where oversized headings and repetitive cards hide critical buying information',
      'Poor mobile usability for executives and clients browsing on phones via WhatsApp or LinkedIn links',
      'Weak inquiry capture that forces prospects into generic contact forms without context',
    ],
    deliverables: [
      {
        title: 'Information Architecture & Sitemap',
        detail: 'Complete page hierarchy, navigation model, and buyer journey flow mapped to your commercial priorities.',
      },
      {
        title: 'Editorial Direction & Wireframes',
        detail: 'Section-by-section narrative pacing, headline structure, and conversion placement before visual styling begins.',
      },
      {
        title: 'Responsive Visual Design System',
        detail: 'Desktop, tablet, and mobile layouts in Figma with typography scales, color tokens, and accessible contrast.',
      },
      {
        title: 'Interactive Prototype & Design Review',
        detail: 'Clickable flows demonstrating navigation, hover states, and mobile drawer behavior prior to build.',
      },
      {
        title: 'Production Frontend & SEO Handover',
        detail: 'Clean, fast Astro or Next.js implementation with metadata, canonical URLs, and OpenGraph tags.',
      },
    ],
    processSteps: [
      {
        title: 'Commercial & Audience Discovery',
        detail: 'We review your service model, buyer questions, and competitive landscape to define a clear sitemap.',
      },
      {
        title: 'Structural Wireframing & Copy Alignment',
        detail: 'We lay out every core template with real headlines and content blocks to eliminate empty placeholders.',
      },
      {
        title: 'Visual Direction & UI Crafting',
        detail: 'We apply refined typography, restrained color tokens, and bespoke capability illustrations.',
      },
      {
        title: 'Responsive Build & Launch Verification',
        detail: 'We code, test across viewports, verify accessibility, and deploy to your production domain.',
      },
    ],
    scopeConsiderations: [
      'Page count, custom interactive visuals, and copywriting support are scoped upfront before design begins.',
      'Multilingual layouts (such as English and Arabic RTL) can be architected into the design system when required.',
      'External CRM or booking integrations are evaluated and scoped based on your existing software stack.',
    ],
    faqs: [
      {
        q: 'Do you write the website copy or work with our internal team?',
        a: 'We can do either. Most engagements include structural copy editing and headline architecture so the design and message work together rather than forcing text into pre-made boxes.',
      },
      {
        q: 'Will the website work properly on mobile phones and tablets?',
        a: 'Yes. Every layout is designed and inspected at mobile (390px), tablet (768px), and desktop (1440px+) viewports before launch.',
      },
      {
        q: 'Can we start with design only and have our internal developers build it?',
        a: 'Yes. We offer both end-to-end design-and-build packages and standalone Figma design systems with developer handoff specs.',
      },
      {
        q: 'How long does a typical business website project take?',
        a: 'A focused business website typically takes 4 to 8 weeks depending on the number of unique service routes, content readiness, and stakeholder review cycles.',
      },
    ],
    visualNodes: ['Sitemap & Narrative', 'Typography & Tokens', 'Responsive Layouts', 'Conversion Handoff'],
    relatedSlugs: ['website-development', 'landing-pages', 'ui-ux-design'],
  },

  'website-development': {
    isCoreDivisionService: true,
    headline: 'Website redesigns and complete technical rebuilds without losing search equity.',
    description:
      'Modernize legacy websites with clean frontend engineering, structured URL redirects, and resilient performance.',
    introduction: [
      'Outgrowing an existing website often leaves businesses stuck with slow page loads, fragile plugins, broken mobile layouts, and pages that are difficult for internal teams to update.',
      'We execute structured website redesigns and complete technical rebuilds—migrating your content to modern architectures like Astro or Next.js while preserving existing search rankings through meticulous URL mapping and redirects.',
    ],
    whoItIsFor: [
      'Companies running slow, plugin-heavy legacy websites that fail Core Web Vitals or break during updates',
      'Organizations undergoing a brand repositioning or expanding into new service divisions',
      'Marketing teams that need a clean, maintainable codebase where direct navigation and refreshes never fail',
    ],
    problemsAddressed: [
      'Slow initial load times and render-blocking scripts that cause high bounce rates on mobile networks',
      'Loss of organic search traffic during poorly planned redesigns that break existing URLs',
      'Fragile templates where adding a new service or article requires developer intervention',
      'Accessibility and contrast issues across light and dark page sections',
    ],
    deliverables: [
      {
        title: 'Technical & URL Inventory Audit',
        detail: 'Complete crawl of existing routes, metadata, and inbound links to ensure zero unmapped URLs.',
      },
      {
        title: 'Modern Frontend Architecture',
        detail: 'Static or hybrid server-rendered codebase engineered in Astro, React, and TypeScript.',
      },
      {
        title: '301 Redirect & Canonical Mapping',
        detail: 'Preservation of legacy URLs when consolidating duplicate pages or restructuring navigation.',
      },
      {
        title: 'Content Collection & Schema Setup',
        detail: 'Type-safe content schemas for services, articles, and case studies using Zod validation.',
      },
      {
        title: 'Staging QA & Production Cutover Plan',
        detail: 'Cross-browser verification, build validation scripts, and zero-downtime DNS deployment.',
      },
    ],
    processSteps: [
      {
        title: 'Legacy Audit & Route Mapping',
        detail: 'We catalog every live URL, asset, and integration dependency on your current site.',
      },
      {
        title: 'Architecture & Component Engineering',
        detail: 'We build modular layouts, navigation systems, and typed content collections.',
      },
      {
        title: 'Content Migration & Redirect Verification',
        detail: 'We populate approved copy, configure redirects, and test direct URL access on every route.',
      },
      {
        title: 'Performance Check & Go-Live',
        detail: 'We verify Core Web Vitals, sitemap generation, and launch cleanly on your production host.',
      },
    ],
    scopeConsiderations: [
      'Volume of legacy pages or blog posts to migrate is audited first to establish an accurate timeline.',
      'Third-party scripts, analytics tags, and form endpoints are reviewed to prevent performance regressions.',
      'Hosting environment (Vercel, Cloudflare, AWS, or private infrastructure) is confirmed during discovery.',
    ],
    faqs: [
      {
        q: 'How do you decide between a visual refresh and a complete rebuild?',
        a: 'If your underlying CMS and code are fast and stable, a visual redesign may suffice. If the codebase is slow, insecure, or blocks structural improvements, a clean rebuild is more cost-effective.',
      },
      {
        q: 'Will a rebuild hurt our current Google rankings?',
        a: 'When properly managed with 1-to-1 301 redirects, preserved canonical tags, and faster page speed, a rebuild protects existing equity while improving technical crawlability.',
      },
      {
        q: 'Do you rely on heavy animations that hide text if JavaScript fails?',
        a: 'No. We build semantic HTML first so all headings, copy, and navigation remain readable even if WebGL or motion scripts are disabled.',
      },
      {
        q: 'Can you keep our existing domain and email setup untouched?',
        a: 'Yes. We coordinate DNS web records carefully so MX and email authentication records remain completely unaffected.',
      },
    ],
    visualNodes: ['Legacy Route Audit', 'Astro / React Rebuild', '301 Redirect Map', 'Verified Deployment'],
    relatedSlugs: ['website-design', 'web-performance', 'cms-platforms'],
  },

  'web-applications': {
    headline: 'Custom web applications engineered for operational clarity and scale.',
    description:
      'Bespoke browser-based applications, internal tools, and interactive customer platforms built with React and TypeScript.',
    introduction: [
      'Off-the-shelf software frequently forces businesses to bend their operations around rigid workflows, per-seat licensing tiers, and disconnected spreadsheets.',
      'We architect and build custom web applications tailored to your exact business logic—from interactive calculators and booking engines to multi-role operational dashboards.',
    ],
    whoItIsFor: [
      'Service and operations teams managing complex multi-step workflows across disconnected spreadsheets',
      'Businesses launching proprietary digital tools, configurators, or client-facing web platforms',
      'Enterprises needing a dedicated frontend layer over internal APIs and databases',
    ],
    problemsAddressed: [
      'Manual data re-entry across multiple SaaS tools that introduces operational errors',
      'Slow, clunky interfaces that frustrate staff and external customers',
      'Lack of role-based views tailored to different team responsibilities',
      'Inability to customize customer-facing workflows in standard off-the-shelf software',
    ],
    deliverables: [
      {
        title: 'Application Architecture Specification',
        detail: 'Data models, state management flows, role permissions, and API contract definitions.',
      },
      {
        title: 'Component-Driven Frontend Build',
        detail: 'Accessible, responsive React and TypeScript interface engineered with modular UI components.',
      },
      {
        title: 'API & Backend Integration Layer',
        detail: 'Secure integration with your chosen database, authentication provider, or internal REST/GraphQL endpoints.',
      },
      {
        title: 'Automated Validation & Error Handling',
        detail: 'Schema validation, graceful offline/error states, and audit logging.',
      },
      {
        title: 'Deployment Pipeline & Technical Documentation',
        detail: 'CI/CD configuration, environment setup guides, and handover documentation for your engineering team.',
      },
    ],
    processSteps: [
      {
        title: 'Workflow & Data Modeling',
        detail: 'We map user roles, permissions, data entities, and state transitions.',
      },
      {
        title: 'Interactive Screen Prototyping',
        detail: 'We validate every form, table, and action state before writing backend logic.',
      },
      {
        title: 'Iterative Engineering Sprints',
        detail: 'We build and demonstrate working application increments in a staging environment.',
      },
      {
        title: 'Security Review, Testing & Handover',
        detail: 'We verify input sanitization, access controls, and deploy to production.',
      },
    ],
    scopeConsiderations: [
      'Authentication, database hosting, and third-party API integrations are scoped based on security and compliance needs.',
      'Complex real-time features or third-party ERP connectors are evaluated during a technical discovery phase.',
      'Ongoing SLA support and feature iteration can be structured post-launch.',
    ],
    faqs: [
      {
        q: 'Can you integrate with our existing backend or ERP?',
        a: 'Yes, provided your system exposes documented REST, GraphQL, or webhook interfaces. We scope integration complexity during discovery.',
      },
      {
        q: 'Who owns the source code once the application is delivered?',
        a: 'Upon final payment, your organization receives full repository access and ownership of the custom application code.',
      },
      {
        q: 'Do you build a prototype before full development?',
        a: 'Always. Validating workflows in an interactive prototype prevents expensive engineering rework later.',
      },
      {
        q: 'How do you handle mobile users on web applications?',
        a: 'We design responsive layouts so dashboards, approvals, and forms remain usable on smartphones and tablets.',
      },
    ],
    visualNodes: ['Role & State Model', 'React UI Layer', 'Scoped API Layer', 'Audit & QA Suite'],
    relatedSlugs: ['ui-ux-design', 'client-portals', 'api-integrations'],
  },

  'mobile-apps': {
    headline: 'Cross-platform mobile application design and development.',
    description:
      'iOS and Android mobile experiences designed for intuitive touch interaction, fast performance, and clean backend synchronization.',
    introduction: [
      'Mobile users in the UAE expect immediate responsiveness, biometric convenience, and interfaces that feel natural under one-handed touch navigation.',
      'We design and develop cross-platform mobile applications—prioritizing crisp onboarding, reliable offline/online state handling, and cohesive visual alignment with your web ecosystem.',
    ],
    whoItIsFor: [
      'Hospitality, wellness, retail, and service brands building repeat customer engagement on iOS and Android',
      'Field operations and logistics teams needing mobile task management and status reporting on the go',
      'Startups validating and launching an MVP mobile product with a single maintainable codebase',
    ],
    problemsAddressed: [
      'Maintaining two separate native codebases that double engineering cost and slow down feature releases',
      'Cluttered mobile screens that try to cram desktop tables onto a 390px viewport',
      'High user drop-off during multi-step registration or booking flows',
      'App store rejection caused by poor navigation standards or missing privacy disclosures',
    ],
    deliverables: [
      {
        title: 'Mobile UX Flows & Touch Prototype',
        detail: 'End-to-end screen maps, gesture specifications, and interactive mobile prototypes.',
      },
      {
        title: 'Cross-Platform Application Codebase',
        detail: 'Unified iOS and Android implementation using modern cross-platform architecture.',
      },
      {
        title: 'API Synchronization & Push Notification Setup',
        detail: 'Scoped integration for user sessions, transactional updates, and push alerts.',
      },
      {
        title: 'Device Matrix & Performance Testing',
        detail: 'Verification across multiple screen ratios, OS versions, and network conditions.',
      },
      {
        title: 'App Store & Google Play Submission Kit',
        detail: 'Store listing graphics, privacy metadata documentation, and release build preparation.',
      },
    ],
    processSteps: [
      {
        title: 'Mobile Use-Case & MVP Scoping',
        detail: 'We define the essential mobile features that deliver immediate user value.',
      },
      {
        title: 'Touch-First UI/UX & Prototyping',
        detail: 'We craft thumb-friendly navigation and test interactive prototypes on physical devices.',
      },
      {
        title: 'Application Engineering & API Wiring',
        detail: 'We build the app screens, state management, and backend data connectors.',
      },
      {
        title: 'Store Review Preparation & Launch',
        detail: 'We assist with TestFlight/beta testing and App Store / Google Play submission.',
      },
    ],
    scopeConsiderations: [
      'Hardware-specific features (Bluetooth, NFC, background geolocation, or camera processing) require dedicated technical scoping.',
      'Apple Developer and Google Play Console accounts must be registered under your legal entity for store publication.',
      'Payment processing rules differ between physical services and digital goods under App Store guidelines.',
    ],
    faqs: [
      {
        q: 'Should we build a native mobile app or a Progressive Web App (PWA) first?',
        a: 'If you need App Store presence and native push notifications, a mobile app is appropriate. If instant browser access without store downloads is the priority, a responsive web app or PWA is often faster to launch.',
      },
      {
        q: 'Do you build for both iPhone and Android?',
        a: 'Yes. We architect cross-platform builds so iOS and Android share business logic while respecting platform UI conventions.',
      },
      {
        q: 'Can the mobile app share data with our website?',
        a: 'Yes, when connected to a shared backend API, user accounts and bookings stay synchronized across web and mobile.',
      },
      {
        q: 'Do you provide ongoing maintenance for OS updates?',
        a: 'Yes. Mobile operating systems update annually, and we offer structured maintenance plans to keep dependencies current.',
      },
    ],
    visualNodes: ['Touch UX Prototype', 'iOS & Android Core', 'API Sync Layer', 'Store Release Kit'],
    relatedSlugs: ['ui-ux-design', 'progressive-web-apps', 'product-design'],
  },

  'ui-ux-design': {
    isCoreDivisionService: true,
    headline: 'Application UI/UX design that turns complex workflows into effortless interfaces.',
    description:
      'User research, interaction architecture, clickable Figma prototypes, and tokenized UI systems for web and mobile products.',
    introduction: [
      'Even the most capable software fails if users get lost in confusing menus, ambiguous form validation, or inconsistent visual hierarchies.',
      'Our Application UI/UX practice bridges product strategy and frontend engineering—mapping every user journey, edge case, and component state before your development team writes production code.',
    ],
    whoItIsFor: [
      'Product and engineering teams preparing to build a new SaaS platform, portal, or internal application',
      'Companies whose existing software suffers from high support tickets or user onboarding drop-off',
      'Founders needing an investor-ready, high-fidelity clickable prototype to validate product direction',
    ],
    problemsAddressed: [
      'Developers losing weeks guessing how screens should behave on empty, loading, or error states',
      'Visual inconsistency caused by multiple designers or engineers adding ad-hoc components over time',
      'Complex multi-step forms that overwhelm users and cause high abandonment',
      'Poor accessibility contrast and keyboard navigation across data-dense screens',
    ],
    deliverables: [
      {
        title: 'User Journey & Task Flow Maps',
        detail: 'Diagrams of every user persona path, decision node, and state transition.',
      },
      {
        title: 'Low-to-High Fidelity Wireframes',
        detail: 'Structural screen blueprints validating layout density and information hierarchy.',
      },
      {
        title: 'High-Fidelity UI Screen Library',
        detail: 'Polished desktop and mobile views covering default, empty, loading, and error states.',
      },
      {
        title: 'Interactive Clickable Figma Prototype',
        detail: 'Linked end-to-end user flows ready for stakeholder sign-off and usability testing.',
      },
      {
        title: 'Tokenized Component & Handoff Guide',
        detail: 'Typography scales, spacing tokens, contrast-checked color variables, and developer annotations.',
      },
    ],
    processSteps: [
      {
        title: 'Workflow & Friction Audit',
        detail: 'We interview stakeholders and map the exact tasks users need to complete.',
      },
      {
        title: 'Information Architecture & Wireframing',
        detail: 'We organize screen layouts and navigation hierarchies without visual distraction.',
      },
      {
        title: 'Visual UI & Component Systematization',
        detail: 'We craft reusable components, states, and responsive breakpoints in Figma.',
      },
      {
        title: 'Prototype Testing & Engineering Handoff',
        detail: 'We walk your developers through every interaction spec and design token.',
      },
    ],
    scopeConsiderations: [
      'Scoped by the number of distinct user roles, core workflows, and unique screen templates.',
      'Can be commissioned as a standalone UI/UX package or paired directly with Moguls Digital frontend development.',
      'Bilingual LTR/RTL interface mirroring can be built into the component library when required.',
    ],
    faqs: [
      {
        q: 'What tools do you use for UI/UX deliverables?',
        a: 'All interface systems, component libraries, and clickable prototypes are delivered in Figma with organized variables and auto-layout.',
      },
      {
        q: 'Do you design empty states and error messages too?',
        a: 'Yes. Real-world software lives in edge cases—we explicitly design loading skeletons, empty states, validation errors, and confirmation modals.',
      },
      {
        q: 'Can you work directly with our in-house backend engineers?',
        a: 'Absolutely. We align our UI components with your API payloads and participate in engineering handoff reviews.',
      },
      {
        q: 'How do you ensure accessibility in application interfaces?',
        a: 'We enforce WCAG AA contrast ratios, clear focus states, minimum 44px touch targets, and non-color-only status indicators.',
      },
    ],
    visualNodes: ['User Flow Mapping', 'Wireframe Blueprint', 'Tokenized UI Kit', 'Clickable Prototype'],
    relatedSlugs: ['product-design', 'web-applications', 'client-portals'],
  },

  ecommerce: {
    isCoreDivisionService: true,
    headline: 'E-commerce storefronts engineered for brand presentation and checkout conversion.',
    description:
      'Custom e-commerce design and development with structured catalog discovery, fast product pages, and regional checkout readiness.',
    introduction: [
      'Selling online in the GCC requires more than a default store theme. Customers expect fast mobile browsing, clear product specifications, transparent delivery terms, and frictionless checkout.',
      'We architect e-commerce storefronts that pair editorial brand storytelling with disciplined merchandising, filterable catalog taxonomy, and conversion-focused cart and checkout flows.',
    ],
    whoItIsFor: [
      'Retail, luxury, beauty, and D2C brands in Dubai launching or upgrading their flagship online store',
      'Merchants experiencing high mobile cart abandonment due to slow page loads or confusing checkout steps',
      'B2B and wholesale distributors needing structured product catalogs with inquiry or ordering workflows',
    ],
    problemsAddressed: [
      'Slow product detail pages overloaded with unoptimized scripts and third-party tracking bloat',
      'Confusing collection filters that make it hard for shoppers to find the right size, variant, or specification',
      'Generic storefront templates that dilute brand equity for premium products',
      'Disconnected inventory or order notifications that create manual fulfillment bottlenecks',
    ],
    deliverables: [
      {
        title: 'Catalog Taxonomy & Merchandising Architecture',
        detail: 'Structured collections, variant attributes, search filters, and cross-sell logic.',
      },
      {
        title: 'Bespoke Storefront UI/UX Design',
        detail: 'Editorial homepage, collection grids, high-converting Product Detail Pages (PDP), and slide-out cart.',
      },
      {
        title: 'Storefront Engineering & Platform Setup',
        detail: 'Custom theme or headless storefront implementation configured for fast mobile performance.',
      },
      {
        title: 'Payment & Fulfillment Integration Scoping',
        detail: 'Configuration of regional payment gateways, shipping zones, and transactional email templates.',
      },
      {
        title: 'Product Schema & Conversion Tracking',
        detail: 'Structured JSON-LD product markup and clean analytics event architecture.',
      },
    ],
    processSteps: [
      {
        title: 'Catalog, Payment & Fulfillment Scoping',
        detail: 'We map your SKU structure, variant complexity, payment gateways, and shipping rules.',
      },
      {
        title: 'Merchandising UX & PDP Design',
        detail: 'We design collection browsing, product storytelling, and mobile-first cart flows.',
      },
      {
        title: 'Storefront Build & Gateway Configuration',
        detail: 'We implement the storefront, import initial product structures, and wire checkout.',
      },
      {
        title: 'End-to-End Order QA & Launch',
        detail: 'We test live transactions, refunds, tax calculations, and mobile responsiveness.',
      },
    ],
    scopeConsiderations: [
      'Choice of commerce platform (Shopify, WooCommerce, or custom headless commerce) is recommended based on SKU count and operational needs.',
      'ERP, warehouse management, or POS integrations are scoped separately based on API availability.',
      'Merchant payment gateway approval remains subject to your company licensing and payment provider underwriting.',
    ],
    faqs: [
      {
        q: 'Which e-commerce platform do you recommend?',
        a: 'We evaluate your catalog size, team workflow, and regional payment requirements before recommending Shopify, a headless storefront, or a custom commerce build.',
      },
      {
        q: 'Can you migrate products from our current store?',
        a: 'Yes. We can scope structured CSV/API catalog migration for products, collections, and URL redirects.',
      },
      {
        q: 'How do you improve mobile checkout conversion?',
        a: 'By keeping product pages fast, surfacing delivery and return policies clearly above the fold, and minimizing form fields prior to payment.',
      },
      {
        q: 'Can our internal team update products and promotions easily?',
        a: 'Yes. We configure clean admin collections and provide training so your merchandising team can manage products independently.',
      },
    ],
    visualNodes: ['Catalog Taxonomy', 'Editorial PDP UX', 'Slide-Out Cart Flow', 'Checkout & Schema'],
    relatedSlugs: ['website-design', 'conversion-optimization', 'landing-pages'],
  },

  'landing-pages': {
    isCoreDivisionService: true,
    headline: 'High-converting campaign and launch landing pages built for speed.',
    description:
      'Focused landing page architecture, persuasive copy structure, and fast-loading builds aligned to paid search, social campaigns, and product launches.',
    introduction: [
      'Sending paid Google or Meta ad traffic to a general homepage forces prospects to hunt for what was promised in the ad. Dedicated landing pages bridge message match and action.',
      'We design and build fast, distraction-free landing pages engineered around a single commercial objective—whether capturing qualified project briefs, booking consultations, or launching a new offering in Dubai.',
    ],
    whoItIsFor: [
      'Growth and marketing teams running Google Ads, Meta Ads, or LinkedIn campaigns that need higher conversion rates',
      'Real estate, hospitality, and professional service firms launching a specific development, event, or service package',
      'Startups validating market demand for a new offering before building a multi-page website',
    ],
    problemsAddressed: [
      'Ad spend wasted on slow pages that take more than 3 seconds to become interactive on mobile',
      'Weak message match between campaign creative and the landing page headline',
      'Overcomplicated forms that ask too many questions upfront or fail to hand off cleanly to WhatsApp/email',
      'Lack of modular sections to test different value propositions and FAQs',
    ],
    deliverables: [
      {
        title: 'Message-Match & Narrative Blueprint',
        detail: 'Headline hierarchy, objection-handling sequence, deliverable breakdown, and CTA architecture.',
      },
      {
        title: 'Responsive Landing Page Design',
        detail: 'Bespoke visual layout with custom capability illustrations and mobile-first thumb reachability.',
      },
      {
        title: 'Fast Production Implementation',
        detail: 'Lightweight, sub-second loading build free of bloated page-builder scripts.',
      },
      {
        title: 'Structured Inquiry & Brief Handoff',
        detail: 'Lead form, interactive qualifier, or pre-encoded WhatsApp/email brief handoff.',
      },
      {
        title: 'Analytics & Conversion Event Wiring',
        detail: 'Clean event triggers for CTA clicks, form completions, and scroll engagement.',
      },
    ],
    processSteps: [
      {
        title: 'Offer & Traffic Source Alignment',
        detail: 'We review the exact ad copy, search keywords, or audience segment driving traffic.',
      },
      {
        title: 'Copy Structure & Wireframe Flow',
        detail: 'We sequence the hero, problem framing, scope proof, FAQs, and primary call to action.',
      },
      {
        title: 'Visual Design & Fast Frontend Build',
        detail: 'We craft the visual composition and build a lightweight, responsive page.',
      },
      {
        title: 'Tracking Verification & Launch',
        detail: 'We verify mobile layout, conversion events, and hand off for campaign activation.',
      },
    ],
    scopeConsiderations: [
      'Can be built as a standalone route inside your existing website or on a dedicated campaign subdomain.',
      'A/B variant creation and ongoing paid media management can be paired via Moguls Growth.',
      'Custom interactive calculators or multi-step qualifiers can be embedded when scoped.',
    ],
    faqs: [
      {
        q: 'Why not use a drag-and-drop page builder for landing pages?',
        a: 'Many visual page builders output heavy JavaScript that slows mobile load times on cellular connections. Custom-coded Astro/React templates load significantly faster and maintain full brand consistency.',
      },
      {
        q: 'Can you create multiple variants for different ad groups?',
        a: 'Yes. We build modular landing page templates so headlines, industry examples, and CTAs can be tailored per audience segment.',
      },
      {
        q: 'Do you include WhatsApp handoff on landing pages?',
        a: 'Yes. In the UAE market, combining a structured brief form with an instant WhatsApp continuation option significantly improves response velocity.',
      },
      {
        q: 'How fast can a campaign landing page be delivered?',
        a: 'A single focused landing page can typically be designed, built, and verified within 7 to 14 business days.',
      },
    ],
    visualNodes: ['Ad Message Match', 'Editorial Narrative', 'Sub-Second Mobile Load', 'Brief & WhatsApp CTA'],
    relatedSlugs: ['conversion-optimization', 'google-ads', 'website-design'],
  },

  'cms-platforms': {
    headline: 'Structured CMS and editorial platforms your team can publish with confidence.',
    description:
      'Type-safe content management architectures, headless CMS setups, and structured publishing workflows that protect design integrity.',
    introduction: [
      'Many content management systems give editors either too little flexibility—requiring a developer for every text change—or unconstrained visual builders that quickly break page layouts and brand consistency.',
      'We architect structured CMS platforms and content collections where editors manage services, articles, case studies, and landing pages through clean, validated fields while the frontend automatically preserves typography and layout standards.',
    ],
    whoItIsFor: [
      'Marketing and editorial teams publishing regular insights, sector pages, and service updates',
      'Multi-division organizations needing structured governance over who can edit and publish content',
      'Businesses migrating away from brittle legacy CMS installs toward modern headless or Git-backed workflows',
    ],
    problemsAddressed: [
      'Editors accidentally breaking spacing, fonts, or mobile layouts when adding new pages',
      'Missing SEO metadata, broken internal links, or unvalidated schema fields on newly published posts',
      'Security vulnerabilities and plugin conflicts from outdated monolithic CMS installations',
      'Difficulty managing multi-locale or multi-division content structures cleanly',
    ],
    deliverables: [
      {
        title: 'Content Model & Schema Architecture',
        detail: 'Structured field definitions, validation rules, and relationship mappings for every content type.',
      },
      {
        title: 'CMS Configuration or Content Collection Setup',
        detail: 'Implementation of your chosen headless CMS or Astro MDX content collections with draft/publish gates.',
      },
      {
        title: 'Reusable Editorial Component Library',
        detail: 'Callout blocks, comparison tables, FAQ accordions, and CTA modules that render consistently.',
      },
      {
        title: 'Automated Build & SEO Validation Checks',
        detail: 'Pre-publish validation ensuring required descriptions, dates, and canonical paths are always present.',
      },
      {
        title: 'Editor Playbook & Training Session',
        detail: 'Step-by-step documentation showing your team how to draft, preview, and publish content safely.',
      },
    ],
    processSteps: [
      {
        title: 'Content Audit & Modeling',
        detail: 'We analyze all content types—services, articles, industries, and case studies—and define their fields.',
      },
      {
        title: 'Schema & Editorial Workflow Setup',
        detail: 'We configure draft vs. published states, validation rules, and preview routes.',
      },
      {
        title: 'Frontend Template Integration',
        detail: 'We connect the content models to responsive, accessible Astro page templates.',
      },
      {
        title: 'Content Population & Editor Handover',
        detail: 'We migrate initial records and train your team on the publishing workflow.',
      },
    ],
    scopeConsiderations: [
      'Choice between Git-based MDX collections and cloud headless CMS platforms (Sanity, Strapi, Contentful, or Directus) is scoped to your team size.',
      'Custom editorial approval workflows and role permissions depend on the selected CMS tier.',
      'Legacy content migration volume is scoped based on the cleanliness of existing exports.',
    ],
    faqs: [
      {
        q: 'How do you prevent draft articles from appearing on the live website?',
        a: 'We enforce strict `published: true` schema filters during route generation so draft entries remain completely unexposed in production.',
      },
      {
        q: 'Can non-technical marketers use a headless CMS?',
        a: 'Yes. Headless CMS dashboards provide clean form fields and live previews without exposing code, while keeping the public site fast and secure.',
      },
      {
        q: 'What happens if someone forgets to add an SEO description?',
        a: 'Our Zod schema validation flags missing required fields immediately during preview or build so incomplete pages never go live.',
      },
      {
        q: 'Can we add new case studies later without redesigning the page?',
        a: 'Yes. Adding a new approved record to the collection automatically generates a formatted card and detail route using the established layout.',
      },
    ],
    visualNodes: ['Zod Content Schema', 'Draft / Publish Gate', 'Editorial MDX Blocks', 'Static Edge Delivery'],
    relatedSlugs: ['website-development', 'content-seo', 'technical-seo'],
  },

  'web-performance': {
    headline: 'Web performance engineering and Core Web Vitals optimization.',
    description:
      'Eliminate render-blocking bloat, optimize WebGL and media delivery, and engineer sub-second page responsiveness across devices.',
    introduction: [
      'A visually ambitious website fails commercially if it stutters on mobile devices, drains battery life, or takes seconds to display readable text. High performance and rich design are not mutually exclusive when engineered properly.',
      'We audit and optimize frontend architecture, asset pipelines, JavaScript hydration boundaries, and GPU rendering loops so your website delivers both visual distinction and fast Core Web Vitals.',
    ],
    whoItIsFor: [
      'Businesses losing organic search visibility or paid ad conversions due to failing Core Web Vitals (LCP, INP, CLS)',
      'Brands with media-heavy or 3D/WebGL websites that lag on mobile phones and mid-tier laptops',
      'Engineering teams needing a structured performance audit and hands-on refactoring sprint',
    ],
    problemsAddressed: [
      'Large Contentful Paint (LCP) delays caused by unoptimized hero assets or client-side rendering gates',
      'High Interaction to Next Paint (INP) latency from excessive main-thread JavaScript hydration',
      'Cumulative Layout Shift (CLS) from unsized media, late-loading fonts, or dynamic banners',
      'Unbounded WebGL canvases running at 3x device pixel ratio and rendering even when scrolled offscreen',
    ],
    deliverables: [
      {
        title: 'Forensic Performance & Bundle Audit',
        detail: 'Waterfall analysis of network payloads, JavaScript bundles, third-party tags, and GPU frame times.',
      },
      {
        title: 'Hydration & Code-Splitting Refactor',
        detail: 'Selective Astro island hydration (`client:visible` / `client:idle`) so static HTML renders immediately.',
      },
      {
        title: 'Media, Font & Shader Optimization',
        detail: 'Modern image compression, font subsetting, DPR capping, and offscreen canvas pausing.',
      },
      {
        title: 'Layout Stability (CLS) Remediation',
        detail: 'Explicit aspect-ratio reservations, fallback font metric matching, and stable skeleton states.',
      },
      {
        title: 'Before/After Verification Report',
        detail: 'Measured Lighthouse and field metric comparison across mobile and desktop profiles.',
      },
    ],
    processSteps: [
      {
        title: 'Baseline Profiling & Bottleneck Trace',
        detail: 'We profile network waterfalls, CPU main-thread blocking, and GPU memory usage.',
      },
      {
        title: 'Critical Rendering Path Optimization',
        detail: 'We ensure semantic HTML and styles render immediately without waiting for JS bundles.',
      },
      {
        title: 'Asset & Runtime Tuning',
        detail: 'We optimize images, defer non-essential scripts, and add IntersectionObserver pause logic.',
      },
      {
        title: 'Multi-Device Regression Testing',
        detail: 'We verify smooth scrolling, fast interaction, and reduced-motion compliance.',
      },
    ],
    scopeConsiderations: [
      'Third-party marketing pixels and chat widgets injected via Tag Manager must be reviewed, as external scripts often dominate main-thread blocking.',
      'Server response time (TTFB) improvements may require CDN or hosting configuration access.',
      'Can be delivered as a focused optimization sprint or integrated into a full rebuild.',
    ],
    faqs: [
      {
        q: 'Can a website have interactive 3D WebGL and still be fast?',
        a: 'Yes—by rendering semantic HTML outside the canvas first, capping device pixel ratio, pausing rendering when offscreen, and disposing GPU buffers cleanly.',
      },
      {
        q: 'Why does Google care about Core Web Vitals?',
        a: 'Google uses LCP, INP, and CLS as page experience signals, and faster pages directly reduce visitor bounce rates on paid and organic traffic.',
      },
      {
        q: 'Do you remove our analytics tags to make the site faster?',
        a: 'No. Instead of deleting needed analytics, we consolidate redundant tags and defer non-critical scripts so they do not block initial rendering.',
      },
      {
        q: 'What happens if a visitor has Reduced Motion enabled?',
        a: 'We respect `prefers-reduced-motion: reduce` by disabling continuous animations and presenting a crisp static visual fallback.',
      },
    ],
    visualNodes: ['Critical HTML First', 'Selective Hydration', 'WebGL DPR & Pause', 'Core Web Vitals QA'],
    relatedSlugs: ['website-development', 'technical-seo', 'progressive-web-apps'],
  },

  'website-maintenance': {
    isCoreDivisionService: true,
    headline: 'Proactive website maintenance, content updates, and technical stewardship.',
    description:
      'Scheduled dependency updates, uptime and link monitoring, content additions, and responsive QA to keep your website reliable year-round.',
    introduction: [
      'A website is an active commercial asset, not a one-time file export. Over time, browser standards evolve, dependencies require security patches, new services launch, and team members need timely content updates.',
      'Our Website Maintenance programs provide structured technical stewardship—handling security updates, broken link checks, new landing page sections, and performance monitoring on a predictable monthly cadence.',
    ],
    whoItIsFor: [
      'Businesses without a dedicated in-house frontend engineer to manage website updates and security patches',
      'Marketing teams that need reliable turnaround on new service pages, campaign sections, and article publishing',
      'Organizations requiring documented uptime verification, backup hygiene, and SSL/domain monitoring',
    ],
    problemsAddressed: [
      'Security vulnerabilities and build failures caused by neglected npm or CMS dependencies',
      'Outdated service offerings, broken links, or expired certificates noticed by clients before your team sees them',
      'Slow turnaround when marketing needs a new section or landing page launched for an upcoming initiative',
      'Gradual performance degradation as unoptimized images and scripts accumulate over time',
    ],
    deliverables: [
      {
        title: 'Monthly Dependency & Security Patching',
        detail: 'Controlled testing and updating of framework packages in staging before production deployment.',
      },
      {
        title: 'Scheduled Content & Page Updates',
        detail: 'Allocated monthly hours for adding new services, case studies, insights, or promotional sections.',
      },
      {
        title: 'Automated Route, Link & SSL Audits',
        detail: 'Regular verification that all public routes, forms, and certificates resolve without errors.',
      },
      {
        title: 'Performance & Accessibility Health Check',
        detail: 'Ongoing review of mobile responsiveness, contrast, and Core Web Vitals after every content update.',
      },
      {
        title: 'Monthly Stewardship Summary',
        detail: 'Clear log of completed updates, build status, and recommended improvements.',
      },
    ],
    processSteps: [
      {
        title: 'Repository & Infrastructure Onboarding',
        detail: 'We audit your codebase, hosting pipeline, domain records, and staging workflow.',
      },
      {
        title: 'Baseline Stabilization',
        detail: 'We resolve any immediate build warnings, broken links, or layout regressions.',
      },
      {
        title: 'Recurring Monthly Maintenance Cycle',
        detail: 'We apply updates, fulfill content requests, and run automated route checks.',
      },
      {
        title: 'Quarterly Architecture Review',
        detail: 'We review site performance and recommend structural enhancements aligned with your growth.',
      },
    ],
    scopeConsiderations: [
      'Monthly retainers are tiered by the volume of content updates and feature enhancements required.',
      'Sites built by third parties undergo an initial codebase health audit before onboarding into maintenance.',
      'Major new application features or complete redesigns are scoped separately from routine maintenance hours.',
    ],
    faqs: [
      {
        q: 'Can you maintain a website that Mansas Moguls did not originally build?',
        a: 'Yes, after a brief initial code audit to ensure the repository, build pipeline, and hosting access are in a maintainable state.',
      },
      {
        q: 'How quickly are content update requests handled?',
        a: 'Standard text, image, and page updates are typically staged and published within 1 to 2 business days.',
      },
      {
        q: 'Do you test updates before pushing them to our live domain?',
        a: 'Always. Every update is built and verified in a staging preview before deploying to production.',
      },
      {
        q: 'What if we don’t use all our content update hours in a given month?',
        a: 'Unused hours in a cycle are applied toward proactive technical SEO, performance tuning, or UI polish.',
      },
    ],
    visualNodes: ['Staging Build Check', 'Security & Patching', 'Content Publishing', 'Route & Uptime QA'],
    relatedSlugs: ['website-development', 'web-performance', 'cms-platforms'],
  },

  'product-design': {
    isCoreDivisionService: true,
    headline: 'Clickable prototypes, design systems, and digital product architecture.',
    description:
      'End-to-end digital product design from concept validation and clickable prototypes to scalable multi-brand design systems.',
    introduction: [
      'Building software without a unified product design system leads to fragmented user experiences and slow engineering velocity. Every new feature becomes a one-off design debate.',
      'We partner with founders and product leaders to turn product concepts into validated clickable prototypes and governed design systems—complete with reusable tokens, component documentation, and responsive specifications.',
    ],
    whoItIsFor: [
      'Ventures and corporate innovation teams validating a new digital product before full-scale engineering',
      'Growing product teams that need a single source-of-truth design system across web and mobile apps',
      'Organizations preparing for investor demonstrations, stakeholder buy-in, or pilot customer testing',
    ],
    problemsAddressed: [
      'High engineering waste from building features before testing whether users understand the workflow',
      'Design drift across different product modules, divisions, or platforms',
      'Lack of documented design tokens (color, typography, spacing) linking Figma and CSS/React code',
      'Slow onboarding of new designers and frontend developers',
    ],
    deliverables: [
      {
        title: 'Product Concept & Feature Architecture',
        detail: 'Prioritized MVP scope matrix, user stories, and core workflow blueprints.',
      },
      {
        title: 'Interactive Clickable Prototype',
        detail: 'High-fidelity Figma prototype simulating real user navigation, modals, and data flows.',
      },
      {
        title: 'Design System Foundations & Tokens',
        detail: 'Semantic color palettes (dark/light), typography scales, spacing grids, and elevation tokens.',
      },
      {
        title: 'Documented Component Library',
        detail: 'Buttons, inputs, tables, navigation patterns, and cards with usage rules and accessibility specs.',
      },
      {
        title: 'Engineering Alignment Package',
        detail: 'CSS custom property exports and component contract documentation for React/Astro teams.',
      },
    ],
    processSteps: [
      {
        title: 'Product Framing & Scope Definition',
        detail: 'We align on target users, core value proposition, and essential workflows.',
      },
      {
        title: 'Rapid Wireframing & Interactive Flow',
        detail: 'We build testable screen flows to validate sequence and usability early.',
      },
      {
        title: 'Token & Component Systematization',
        detail: 'We establish the visual language and assemble a modular Figma component library.',
      },
      {
        title: 'Prototype Polish & Developer Handoff',
        detail: 'We finalize the interactive prototype and export design tokens for production.',
      },
    ],
    scopeConsiderations: [
      'Can focus purely on a rapid clickable prototype for validation or expand into a full multi-platform design system.',
      'Code-level Storybook or React component library implementation can be included when scoped.',
      'User testing sessions can be facilitated with your target customer group during the prototype stage.',
    ],
    faqs: [
      {
        q: 'What is the difference between UI/UX Design and Digital Product Design & Design Systems?',
        a: 'UI/UX focuses on the flows and screens of a specific application, while Product Design & Design Systems also establishes the underlying token architecture, governance rules, and multi-product component library.',
      },
      {
        q: 'Can we use the clickable prototype for investor or client presentations?',
        a: 'Yes. Our clickable prototypes are designed to look and behave like a finished product during live walkthroughs.',
      },
      {
        q: 'How do design tokens connect to code?',
        a: 'We name color, spacing, and typography variables identically in Figma and CSS (`--color-ink`, `--color-violet`, etc.) so updates stay synchronized.',
      },
      {
        q: 'Do you support both dark and light mode design systems?',
        a: 'Yes. We design semantic surface and text tokens with verified contrast ratios for both dark and warm-light contexts.',
      },
    ],
    visualNodes: ['Product Blueprint', 'Clickable Prototype', 'Design Tokens', 'Component Library'],
    relatedSlugs: ['ui-ux-design', 'web-applications', 'brand-guidelines'],
  },

  'api-integrations': {
    headline: 'API and business systems integrations scoped for reliability.',
    description:
      'Connect websites, portals, and internal workflows with CRM platforms, payment gateways, booking systems, and data services.',
    introduction: [
      'Modern digital experiences rarely operate in isolation. When your website, customer portal, CRM, and notification tools do not communicate cleanly, staff end up copying data manually between tabs.',
      'We scope, architect, and implement clean API integrations—connecting your frontend touchpoints with external services using validated schemas, retry handling, and clear security boundaries.',
    ],
    whoItIsFor: [
      'Businesses needing structured lead, booking, or order synchronization between their website and internal systems',
      'Operations teams looking to eliminate manual copy-pasting between forms, spreadsheets, and CRM pipelines',
      'Companies building custom dashboards or portals that aggregate data from multiple REST or GraphQL APIs',
    ],
    problemsAddressed: [
      'Lost inquiries or duplicate records caused by brittle webhook scripts without idempotency or error logging',
      'Exposing sensitive API keys or credentials in client-side browser code',
      'Slow page loads caused by synchronous third-party API calls blocking the frontend',
      'Unclear data mapping when form fields change or external APIs update versions',
    ],
    deliverables: [
      {
        title: 'Integration Architecture & Data Flow Map',
        detail: 'Documentation of endpoints, authentication methods, payload schemas, and failure fallbacks.',
      },
      {
        title: 'Type-Safe Server / Edge Connector Layer',
        detail: 'Secure middleware handling authentication, rate limits, and Zod payload validation.',
      },
      {
        title: 'Field Mapping & Transformation Logic',
        detail: 'Clean normalization of incoming and outgoing records with idempotency keys.',
      },
      {
        title: 'Error Handling & Fallback Workflows',
        detail: 'Graceful degradation so user journeys never break if an external vendor API is temporarily unreachable.',
      },
      {
        title: 'Integration Test Suite & Runbook',
        detail: 'Verification scripts and operational documentation for your technical team.',
      },
    ],
    processSteps: [
      {
        title: 'API Documentation & Credential Audit',
        detail: 'We inspect vendor API capabilities, rate limits, and security requirements.',
      },
      {
        title: 'Schema & Mapping Specification',
        detail: 'We define exact field transformations, validation rules, and error states.',
      },
      {
        title: 'Middleware Implementation & Sandbox Testing',
        detail: 'We build and test the integration against sandbox endpoints with mock failure scenarios.',
      },
      {
        title: 'Production Cutover & Monitoring',
        detail: 'We deploy with environment secret management and verify live payload delivery.',
      },
    ],
    scopeConsiderations: [
      'All integrations are subject to technical scoping to confirm the target third-party system provides documented API access.',
      'Third-party software subscription costs and API usage tiers remain managed directly by your organization.',
      'Where external APIs are unavailable or unnecessary, we also design clean client-side handoffs (such as encoded WhatsApp or email briefs).',
    ],
    faqs: [
      {
        q: 'Can you integrate with any CRM or booking platform?',
        a: 'We can integrate with any platform that offers a documented REST, GraphQL, or webhook API (such as HubSpot, Salesforce, HighLevel, Stripe, or custom backends), subject to scoping.',
      },
      {
        q: 'How do you keep API credentials secure?',
        a: 'API secrets are stored strictly in server-side environment variables and are never exposed in public client bundles.',
      },
      {
        q: 'What happens if a third-party API goes down?',
        a: 'We design fallback paths and clear user notifications so visitors can still complete their action or contact your team directly.',
      },
      {
        q: 'Do we need a complex CRM integration just to launch our website?',
        a: 'Not necessarily. Many businesses start with structured brief generation and direct WhatsApp/email handoff, adding API integrations once volume justifies it.',
      },
    ],
    visualNodes: ['Endpoint & Auth Audit', 'Zod Payload Schema', 'Secure Middleware', 'Fallback Resilience'],
    relatedSlugs: ['web-applications', 'workflow-automation', 'crm-funnels'],
  },

  'client-portals': {
    headline: 'Secure client and partner portals for high-touch service businesses.',
    description:
      'Dedicated web portals for client onboarding, project status tracking, document sharing, and structured approvals.',
    introduction: [
      'High-value B2B, real estate, advisory, and creative engagements often get bogged down in scattered email threads, lost attachments, and unclear milestone sign-offs.',
      'We design and build branded client and partner portals that give your customers a single, organized destination to complete onboarding, review deliverables, approve milestones, and access documentation.',
    ],
    whoItIsFor: [
      'Professional services, consultancies, and agencies managing multi-stage client engagements',
      'Real estate developers, wealth advisors, and corporate service providers handling structured client documentation',
      'B2B organizations needing a partner or distributor portal for asset downloads and status tracking',
    ],
    problemsAddressed: [
      'Clients repeatedly asking for project status updates or resending documents lost in email chains',
      'Delayed milestone approvals because stakeholders lack a clear, centralized review interface',
      'Generic file-sharing links that feel disconnected from your premium brand positioning',
      'Manual onboarding intake that delays project kickoff',
    ],
    deliverables: [
      {
        title: 'Portal Journey & Permission Blueprint',
        detail: 'Role definitions for clients, account managers, and administrators across every engagement stage.',
      },
      {
        title: 'Branded Portal UI/UX Design',
        detail: 'Clean dashboard views for milestones, document vaults, action items, and communication logs.',
      },
      {
        title: 'Onboarding & Intake Workflow Forms',
        detail: 'Multi-step validated intake forms with progress indicators and structured submission.',
      },
      {
        title: 'Portal Frontend & Backend Wiring',
        detail: 'Production web application integrated with your chosen authentication and storage backend.',
      },
      {
        title: 'Admin Management & Handover Guide',
        detail: 'Internal controls and documentation for provisioning new client workspaces.',
      },
    ],
    processSteps: [
      {
        title: 'Client Lifecycle Mapping',
        detail: 'We map every interaction from initial contract sign-off to final project delivery.',
      },
      {
        title: 'Portal Interface & Prototype Design',
        detail: 'We design a calm, executive-friendly interface and test it via clickable prototype.',
      },
      {
        title: 'Application Build & Access Control',
        detail: 'We implement the portal views, role permissions, and backend data connectors.',
      },
      {
        title: 'Pilot Client Rollout & Training',
        detail: 'We launch with an initial cohort of clients and train your account managers.',
      },
    ],
    scopeConsiderations: [
      'Authentication, document storage security, and regulatory compliance requirements are scoped upfront.',
      'Can be built as a custom web application or configured atop your existing backend infrastructure.',
      'Electronic signature or payment links can be embedded via scoped third-party providers.',
    ],
    faqs: [
      {
        q: 'Can the portal match our exact brand identity?',
        a: 'Yes. Unlike rigid third-party portal tools, a custom-designed portal uses your exact typography, domain, and brand tokens.',
      },
      {
        q: 'Is the portal usable on mobile phones?',
        a: 'Yes. Busy executives frequently review status updates and approve milestones from their phones, so mobile usability is prioritized.',
      },
      {
        q: 'Can each client see only their own project data?',
        a: 'Yes. When connected to an authenticated backend, strict tenant and role-based access rules isolate each client workspace.',
      },
      {
        q: 'Can we start with an interactive prototype before full backend development?',
        a: 'Yes. Many teams commission the clickable portal prototype first to validate the experience with key clients.',
      },
    ],
    visualNodes: ['Role & Tenant Model', 'Onboarding Intake', 'Milestone Dashboard', 'Approval & Vault'],
    relatedSlugs: ['web-applications', 'ui-ux-design', 'automated-client-onboarding' as any].map(s => s === 'automated-client-onboarding' ? 'api-integrations' : s) as [string, string, string],
  },

  'progressive-web-apps': {
    headline: 'Progressive Web Apps (PWAs) for instant, installable browser experiences.',
    description:
      'Deliver app-like speed, home-screen installation, and resilient caching through the browser without app store friction.',
    introduction: [
      'Asking customers to visit an app store, download a 100MB binary, and wait for installation creates massive drop-off—especially for hospitality guests, event attendees, or B2B buyers who need immediate access.',
      'We engineer Progressive Web Apps (PWAs) that launch instantly from a URL or QR code, install directly to the phone home screen, and maintain smooth navigation even on variable mobile connections.',
    ],
    whoItIsFor: [
      'Hospitality venues, events, and concierge services where guests scan a QR code or link for immediate interaction',
      'Field teams and B2B portals needing fast mobile home-screen access without enterprise app store distribution headaches',
      'Brands looking to deliver an app-caliber mobile experience from a single web codebase',
    ],
    problemsAddressed: [
      '80%+ user drop-off when asking casual or first-time visitors to download a native app from the store',
      'Slow reloads when navigating between pages on spotty cellular or venue Wi-Fi connections',
      'High cost of maintaining separate web, iOS, and Android repositories for content-driven tools',
      'Delays waiting for App Store review approval every time you update an offer or workflow',
    ],
    deliverables: [
      {
        title: 'PWA Architecture & Caching Strategy',
        detail: 'Service worker specification, asset pre-caching rules, and offline fallback behavior.',
      },
      {
        title: 'App-Shell Mobile UI Design',
        detail: 'Touch-optimized navigation bars, smooth view transitions, and install prompt UX.',
      },
      {
        title: 'Web App Manifest & Icon Suite',
        detail: 'Complete `manifest.webmanifest`, splash screen configuration, and home-screen icons.',
      },
      {
        title: 'Performance-Tuned Frontend Build',
        detail: 'Lightweight bundle architecture scoring high on mobile Lighthouse performance.',
      },
      {
        title: 'Cross-Platform Installation QA',
        detail: 'Verification on iOS Safari, Android Chrome, and desktop browsers.',
      },
    ],
    processSteps: [
      {
        title: 'Use-Case & Network Constraint Discovery',
        detail: 'We identify which screens and assets must load instantly or remain available offline.',
      },
      {
        title: 'Mobile-First App-Shell Design',
        detail: 'We craft persistent bottom/top navigation and touch gestures that feel native.',
      },
      {
        title: 'Service Worker & Manifest Engineering',
        detail: 'We implement caching strategies, manifest metadata, and update notifications.',
      },
      {
        title: 'Device Testing & Instant Deployment',
        detail: 'We test home-screen installation and deploy directly to your web domain.',
      },
    ],
    scopeConsiderations: [
      'iOS Safari and Android Chrome have different capabilities regarding web push notifications and background sync, which we clarify upfront.',
      'Offline data mutation requires explicit conflict-resolution scoping if multiple users edit shared records.',
      'Can be layered onto a new business website or built as a dedicated standalone application.',
    ],
    faqs: [
      {
        q: 'How do users install a Progressive Web App?',
        a: 'Visitors simply open your URL in their mobile browser and tap "Add to Home Screen" (or accept the in-app install banner on Android/desktop).',
      },
      {
        q: 'Do updates require users to re-download the app?',
        a: 'No. When we deploy an update to your web server, the service worker refreshes assets automatically on the user’s next visit.',
      },
      {
        q: 'Is a PWA indexed by Google Search?',
        a: 'Yes! Because a PWA lives on standard web URLs, every public page can be indexed by search engines—unlike closed native apps.',
      },
      {
        q: 'When would a native app still be needed over a PWA?',
        a: 'If your product relies heavily on low-level phone hardware (like advanced Bluetooth mesh or background sensors), a native build is better suited.',
      },
    ],
    visualNodes: ['Instant URL / QR Entry', 'App-Shell Touch UI', 'Service Worker Cache', 'Home Screen Install'],
    relatedSlugs: ['mobile-apps', 'web-applications', 'web-performance'],
  },
};

