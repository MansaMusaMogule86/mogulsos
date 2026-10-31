import type { ServiceDetailContent } from './types';

export const growthServicesDetails: Record<string, ServiceDetailContent> = {
  seo: {
    isCoreDivisionService: true,
    headline: 'Search Engine Optimization built on technical integrity and commercial intent.',
    description:
      'Comprehensive SEO programs combining site architecture, commercial keyword mapping, and editorial authority for Dubai and international markets.',
    introduction: [
      'Ranking for vanity keywords that never convert is a common waste of marketing budget. Effective Search Engine Optimization connects how buyers actually search in Dubai and globally with dedicated, authoritative service and industry pages.',
      'We execute structured SEO programs—aligning clean technical crawlability, commercial search intent mapping, internal linking hierarchies, and high-substance editorial articles.',
    ],
    whoItIsFor: [
      'Businesses in competitive UAE sectors (real estate, hospitality, clinics, B2B services) wanting sustainable organic inquiry flow',
      'Companies launching a new website or rebuild that want search architecture baked in from day one',
      'Organizations whose organic traffic has plateaued due to thin service pages or poor site structure',
    ],
    problemsAddressed: [
      'Single generic "Services" pages trying to rank for 20 distinct buyer queries at once',
      'High-intent prospects finding competitors first when searching for specific capabilities in Dubai',
      'Over-reliance on paid ads where lead volume stops the moment ad spend pauses',
      'Low-quality, repetitive SEO blog spam that hurts brand credibility with executive buyers',
    ],
    deliverables: [
      {
        title: 'Commercial Search Intent & Keyword Map',
        detail: 'Mapping of high-intent service, sector, and comparison queries to dedicated URLs.',
      },
      {
        title: 'On-Page Architecture & Internal Linking Plan',
        detail: 'Optimization of title tags, headings, semantic copy structure, and cross-division link paths.',
      },
      {
        title: 'Structured Data & Schema Implementation',
        detail: 'JSON-LD schema for Organization, LocalBusiness, Service, FAQPage, and Article routes.',
      },
      {
        title: 'Editorial Content Briefs & Optimization',
        detail: 'Research-backed briefs and page enhancements addressing real buyer questions.',
      },
      {
        title: 'Search Console & Organic Pipeline Reporting',
        detail: 'Transparent tracking of impressions, rankings, click-through rates, and organic inquiry paths.',
      },
    ],
    processSteps: [
      {
        title: 'Technical & Search Landscape Audit',
        detail: 'We inspect indexation health, competitor page structures, and high-intent search demand.',
      },
      {
        title: 'URL & On-Page Architecture Alignment',
        detail: 'We structure dedicated service and industry routes with unique, substantive copy.',
      },
      {
        title: 'Schema, Internal Links & Editorial Publishing',
        detail: 'We deploy structured markup and publish authoritative guides that earn organic trust.',
      },
      {
        title: 'Measurement & Iterative Refinement',
        detail: 'We monitor Search Console queries and expand high-performing topic clusters.',
      },
    ],
    scopeConsiderations: [
      'Organic search is a compounding medium; initial indexing and ranking movement typically build over 60 to 120 days.',
      'We never use black-hat link schemes, automated PBNs, or spun content that risks search engine penalties.',
      'Technical code changes can be implemented directly by Moguls Digital or handed off to your dev team.',
    ],
    faqs: [
      {
        q: 'Do you guarantee a #1 ranking on Google in 30 days?',
        a: 'No ethical agency can guarantee specific Google rankings, as search algorithms are controlled by Google. We guarantee rigorous technical execution, unique service architecture, and transparent Search Console reporting.',
      },
      {
        q: 'Why do we need separate pages for each service and industry?',
        a: 'Search engines match specific user queries to specific URLs. Having dedicated, genuinely unique pages for each service allows you to rank for exact commercial searches.',
      },
      {
        q: 'How does SEO work alongside Google Ads?',
        a: 'Improving landing page quality and site speed lowers paid ad cost-per-click while building organic rankings that reduce your long-term dependency on paid clicks.',
      },
      {
        q: 'Do you optimize for Dubai and UAE regional searches?',
        a: 'Yes. We align regional terminology, local schema markup, and geographic intent signals for UAE decision-makers.',
      },
    ],
    visualNodes: ['Search Intent Mapping', 'Dedicated Service URLs', 'JSON-LD Schema', 'Compounding Visibility'],
    relatedSlugs: ['technical-seo', 'local-seo', 'content-seo'],
  },

  'technical-seo': {
    headline: 'Technical SEO audits, crawl architecture, and indexation engineering.',
    description:
      'Resolve crawl bottlenecks, canonical conflicts, JavaScript rendering blocks, and Core Web Vitals issues at the code level.',
    introduction: [
      'Even the best editorial content cannot rank if search engine crawlers are trapped in redirect chains, blocked by client-side JavaScript gates, or confused by duplicate canonical tags.',
      'Because our growth and frontend engineering teams work together, our Technical SEO practice goes beyond automated PDF audit dumps—we trace the exact layout, routing, and rendering causes in your codebase and fix them.',
    ],
    whoItIsFor: [
      'Websites experiencing sudden drops in indexed pages or organic impressions after a migration or redesign',
      'JavaScript-heavy (React/SPA) or multi-locale websites with crawlability and hreflang complexities',
      'Large service or e-commerce sites suffering from duplicate content, orphan pages, or slow mobile performance',
    ],
    problemsAddressed: [
      'Blank entry gates or client-only rendering that prevent crawlers from seeing page content',
      'Broken internal links, 404 routes, or redirect chains diluting site authority',
      'Missing or conflicting canonical URLs, `robots.txt` directives, and XML sitemaps',
      'Duplicate or near-empty scaffold pages causing "Crawled - currently not indexed" errors in Search Console',
    ],
    deliverables: [
      {
        title: 'Full Crawl & Indexation Diagnostic',
        detail: 'Deep audit of status codes, canonicals, sitemaps, robots directives, and render-blocking scripts.',
      },
      {
        title: 'SSR / Static Rendering Verification',
        detail: 'Ensuring all headings, body copy, and internal links exist in initial server-rendered HTML.',
      },
      {
        title: 'Canonical, Redirect & Hreflang Architecture',
        detail: 'Clean URL normalization (trailing slashes, locale prefixes, and 301 redirect rules).',
      },
      {
        title: 'Structured Data (JSON-LD) Validation',
        detail: 'Error-free schema markup verified against rich result standards.',
      },
      {
        title: 'Code-Level Remediation & Verification',
        detail: 'Direct pull requests or engineering specs verifying every technical fix in staging.',
      },
    ],
    processSteps: [
      {
        title: 'Crawler & Search Console Forensics',
        detail: 'We inspect how Googlebot fetches and renders your raw HTML vs. hydrated DOM.',
      },
      {
        title: 'URL Structure & Redirect Cleanup',
        detail: 'We eliminate orphan pages, fix broken links, and consolidate thin routes.',
      },
      {
        title: 'Rendering, Speed & Schema Engineering',
        detail: 'We optimize server/static output, Core Web Vitals, and structured metadata.',
      },
      {
        title: 'Post-Deployment Crawl Validation',
        detail: 'We re-crawl the live build to confirm 100% clean status codes and indexability.',
      },
    ],
    scopeConsiderations: [
      'Direct repository or CMS access speeds up implementation, or we can deliver prioritized tickets for your internal developers.',
      'Multi-language (`hreflang`) tags are only exposed for locales with complete, human-reviewed content to prevent thin-page penalties.',
      'Pairs naturally with Website Redesigns & Rebuilds to safeguard search traffic during launch.',
    ],
    faqs: [
      {
        q: 'Why is client-side JavaScript rendering a risk for SEO?',
        a: 'If your website shows an empty container until JavaScript or WebGL initializes, search crawlers and AI answer engines may index a blank page. Static/SSR HTML ensures content is always readable immediately.',
      },
      {
        q: 'Should we expose empty `/fr/` or `/ar/` routes before translations are ready?',
        a: 'Never. Publishing empty or placeholder locale routes creates thin duplicate pages that harm overall domain quality. Only complete locales should be generated.',
      },
      {
        q: 'Do you just send an audit spreadsheet, or do you actually fix the code?',
        a: 'Unlike traditional marketing agencies, we have in-house Astro, React, and TypeScript engineers who can implement the fixes directly.',
      },
      {
        q: 'How often should a technical SEO audit be performed?',
        a: 'Before and immediately after any major site launch, and quarterly for actively growing websites.',
      },
    ],
    visualNodes: ['Raw HTML Crawl Check', 'Canonical & 301 Map', 'Schema & Sitemap', 'Core Web Vitals Fix'],
    relatedSlugs: ['seo', 'web-performance', 'website-development'],
  },

  'local-seo': {
    isCoreDivisionService: true,
    headline: 'Local search support and regional visibility across Dubai and the UAE.',
    description:
      'Capture high-intent geographic searches in Dubai with structured local landing pages, map profile optimization, and regional entity signals.',
    introduction: [
      'When decision-makers or consumers in Dubai search for a clinic, real estate advisor, hospitality venue, or technology partner, geographic proximity and local authority heavily influence which businesses appear in map packs and localized results.',
      'We implement structured Local Search Support—aligning your website’s location signals, Google Business Profile architecture, local schema markup, and district/sector landing pages.',
    ],
    whoItIsFor: [
      'Dubai-based clinics, hospitality groups, salons, retail showrooms, and professional service firms',
      'Multi-branch UAE businesses needing consistent location pages for DIFC, Downtown, Business Bay, Dubai Marina, or JLT',
      'B2B agencies and consultancies wanting stronger visibility for "[Service] in Dubai / UAE" commercial searches',
    ],
    problemsAddressed: [
      'Inconsistent business names, addresses, phone numbers, or categories across web and map directories',
      'Website lacking clear Dubai / UAE geographic context and `LocalBusiness` structured data',
      'Multi-location businesses funneling all branches into a single generic contact page',
      'Competitors dominating Google Maps results for high-intent local service queries',
    ],
    deliverables: [
      {
        title: 'Google Business Profile Architecture & Optimization',
        detail: 'Primary/secondary category alignment, service catalogs, attributes, and UTM-tracked website links.',
      },
      {
        title: 'Localized Website Pages & Entity Signals',
        detail: 'Well-written regional context and location-specific landing pages free of spammy keyword stuffing.',
      },
      {
        title: 'LocalBusiness & Geo-Coordinate Schema',
        detail: 'Structured JSON-LD markup declaring your legal entity, Dubai address, phone, and service areas.',
      },
      {
        title: 'NAP (Name, Address, Phone) Consistency Audit',
        detail: 'Standardization of verified contact details across your site footer, contact routes, and directory profiles.',
      },
      {
        title: 'Review Workflow & Local Visibility Reporting',
        detail: 'Ethical customer review request playbooks and tracking of map vs. organic discovery actions.',
      },
    ],
    processSteps: [
      {
        title: 'Local Entity & Profile Audit',
        detail: 'We inspect your current map profiles, citations, and on-site Dubai location signals.',
      },
      {
        title: 'On-Site Local Architecture & Schema',
        detail: 'We embed verified contact configuration, local schema, and regional service context.',
      },
      {
        title: 'Profile Optimization & Service Cataloging',
        detail: 'We structure your business profile services, imagery, and Q&A sections.',
      },
      {
        title: 'Ongoing Local Authority Stewardship',
        detail: 'We monitor map pack queries, click-to-call actions, and direction requests.',
      },
    ],
    scopeConsiderations: [
      'Google Business Profile verification requires your official UAE trade license / utility documentation and owner access.',
      'We never purchase fake reviews or create virtual office spam listings that violate Google guidelines.',
      'Works seamlessly alongside core SEO and Google Ads local extensions.',
    ],
    faqs: [
      {
        q: 'Does local SEO matter for B2B companies in Dubai, or only retail shops?',
        a: 'It matters significantly for B2B as well. Corporate buyers in the UAE strongly prefer partners with a verified local presence in Dubai who can meet and operate in the same time zone.',
      },
      {
        q: 'Should we create 50 nearly identical pages for every neighborhood in Dubai?',
        a: 'No. Doorway pages with swapped neighborhood names are penalized by search engines. Instead, create genuine pages only for real physical branches or distinct regional service offerings.',
      },
      {
        q: 'Can you connect WhatsApp and call tracking to our local profile?',
        a: 'Yes. We configure UTM parameters and verified phone/WhatsApp contact paths so you can see inquiries originating from local search.',
      },
      {
        q: 'What if our business operates from a free zone in Dubai without walk-in retail?',
        a: 'We configure service-area and corporate office signals appropriately while emphasizing regional authority on your core service pages.',
      },
    ],
    visualNodes: ['Verified UAE Entity', 'LocalBusiness Schema', 'Map Profile Catalog', 'Dubai Intent Pages'],
    relatedSlugs: ['seo', 'google-ads', 'content-seo'],
  },

  'generative-engine-optimization': {
    headline: 'AI search visibility and Generative Engine Optimization (GEO).',
    description:
      'Structure your brand, services, and authoritative answers so AI search engines and answer platforms cite your business accurately.',
    introduction: [
      'Decision-makers increasingly research vendors using AI-powered answer engines alongside traditional search. When an executive asks an AI search tool "What should a business website in Dubai include?" or "Which agencies in Dubai build custom web apps and AI workflows?", the model synthesizes answers from clear, well-structured, factual web pages.',
      'We optimize your site’s entity clarity, semantic HTML structure, FAQ directness, and factual depth so both traditional search crawlers and generative answer engines can parse and cite your capabilities accurately.',
    ],
    whoItIsFor: [
      'B2B firms, professional services, and technology companies whose buyers use AI research tools during vendor shortlisting',
      'Brands wanting to ensure AI engines describe their division names, location, and services accurately rather than hallucinating',
      'Editorial teams publishing in-depth guides designed to be cited as primary reference sources',
    ],
    problemsAddressed: [
      'Vague, poetic marketing copy that leaves AI crawlers unable to tell what services your company actually provides, where you are located, or who you serve',
      'Important capability details trapped inside images, canvases, or client-only JavaScript that text parsers cannot read',
      'Lack of structured question-and-answer blocks matching how buyers phrase conversational prompts',
      'Inconsistent brand and division naming across different pages',
    ],
    deliverables: [
      {
        title: 'Entity & Brand Clarity Audit',
        detail: 'Review of how search and answer engines currently interpret your company name, location, and core services.',
      },
      {
        title: 'Conversational Query & Answer Structuring',
        detail: 'Clear, direct answer paragraphs and structured FAQs on every service and industry page.',
      },
      {
        title: 'Machine-Readable Semantic HTML & Schema',
        detail: 'Clean heading hierarchies (`h1`–`h3`), definition lists, tables, and comprehensive JSON-LD entity links.',
      },
      {
        title: 'Citation-Worthy Editorial Pillar Articles',
        detail: 'Long-form, practical guides (800–1200+ words) answering specific commercial decision questions.',
      },
      {
        title: 'Crawler Access & `robots.txt` Configuration',
        detail: 'Intentional configuration of search and answer crawler permissions.',
      },
    ],
    processSteps: [
      {
        title: 'Entity & Prompt Discovery',
        detail: 'We map the exact conversational questions buyers ask when researching your category in the UAE.',
      },
      {
        title: 'Semantic Copy & FAQ Restructuring',
        detail: 'We replace vague slogans on service pages with explicit "Who it is for," "Deliverables," and "FAQs."',
      },
      {
        title: 'Schema & HTML Accessibility Alignment',
        detail: 'We ensure all text is present in static HTML outside any WebGL or animation layer.',
      },
      {
        title: 'Editorial Authority Expansion',
        detail: 'We publish substantive, well-structured articles that answer complex buyer comparisons.',
      },
    ],
    scopeConsiderations: [
      'GEO is not a trick or "prompt hack"—it relies on genuine editorial clarity, consistent entity naming, and accessible semantic HTML.',
      'We never hide invisible text or manipulate crawlers; every improvement also makes your pages clearer for human readers.',
      'Integrated directly with our Technical SEO and Content Strategy practices.',
    ],
    faqs: [
      {
        q: 'How is GEO different from traditional SEO?',
        a: 'Traditional SEO often focuses on short keyword phrases, whereas GEO emphasizes unambiguous entity definitions (who you are, where you operate, what you deliver) and direct, well-structured answers to multi-part questions.',
      },
      {
        q: 'Why does keeping text outside the WebGL canvas help AI visibility?',
        a: 'AI search crawlers parse HTML text, not pixels inside a `<canvas>`. Keeping all headlines, service descriptions, and FAQs in semantic HTML ensures 100% readability.',
      },
      {
        q: 'Does consistent naming of our company and divisions matter?',
        a: 'Yes. Consistently pairing your legal entity, public brand, Dubai location, and exact division names builds a clear entity graph across your domain.',
      },
      {
        q: 'Can you guarantee what an external AI model will say?',
        a: 'No one controls third-party LLMs, but providing authoritative, unambiguous, machine-readable facts on your own domain is the primary way to anchor how those systems describe your business.',
      },
    ],
    visualNodes: ['Entity & Brand Graph', 'Semantic HTML First', 'Direct FAQ Answers', 'Editorial Authority'],
    relatedSlugs: ['seo', 'technical-seo', 'content-seo'],
  },

  'google-ads': {
    isCoreDivisionService: true,
    headline: 'Google Ads management focused on high-intent commercial search.',
    description:
      'Capture active demand in Dubai and target markets with tightly structured search campaigns, negative keyword hygiene, and dedicated landing pages.',
    introduction: [
      'Google Search Ads allow you to appear at the exact moment a decision-maker searches for your service. Yet poorly structured accounts burn budget on broad, irrelevant clicks, competitor job seekers, and sending paid traffic to slow homepages.',
      'We architect and manage disciplined Google Ads programs—focusing on high-intent commercial search terms, rigorous negative keyword lists, exact message-matched landing pages, and verified conversion tracking.',
    ],
    whoItIsFor: [
      'B2B service firms, clinics, real estate advisors, and e-commerce brands wanting immediate, measurable search demand capture',
      'Businesses currently running Google Ads that see clicks and spend but too few qualified inquiries',
      'Companies launching a new service or entering the Dubai market that need immediate visibility while organic SEO builds',
    ],
    problemsAddressed: [
      'Broad-match bloat spending budget on informational searches, student research, or unrelated industries',
      'Sending all ad groups to a generic homepage instead of a specific service or campaign landing page',
      'Broken or inflated conversion tracking counting page views as "leads"',
      'Set-and-forget campaign management without weekly search-term pruning',
    ],
    deliverables: [
      {
        title: 'Account & Campaign Structure Blueprint',
        detail: 'Segmentation of campaigns by service line, intent tier, geographic target, and budget allocation.',
      },
      {
        title: 'Keyword Architecture & Negative Lists',
        detail: 'Exact and phrase-match commercial keywords paired with comprehensive negative keyword exclusions.',
      },
      {
        title: 'Responsive Search Ad Copy & Extensions',
        detail: 'Compelling headlines, sitelinks, callouts, structured snippets, and verified location/call assets.',
      },
      {
        title: 'Conversion Tracking & Attribution Setup',
        detail: 'Accurate tracking of real commercial actions (brief submissions, qualified calls, WhatsApp handoffs).',
      },
      {
        title: 'Ongoing Search-Term Pruning & Reporting',
        detail: 'Regular bid adjustments, negative keyword additions, and transparent spend-to-inquiry reporting.',
      },
    ],
    processSteps: [
      {
        title: 'Demand & Unit Economics Audit',
        detail: 'We review search volume, competitor ad density, and target cost-per-inquiry in your sector.',
      },
      {
        title: 'Campaign Build & Landing Page Pairing',
        detail: 'We map every ad group to a fast, message-matched service or landing page.',
      },
      {
        title: 'Tracking Verification & Controlled Launch',
        detail: 'We verify conversion events in staging before activating media spend.',
      },
      {
        title: 'Weekly Search-Term Optimization',
        detail: 'We inspect actual user search queries weekly to cut wasted spend and scale converting themes.',
      },
    ],
    scopeConsiderations: [
      'Media ad spend is billed directly by Google to your organization’s ad account; you retain full ownership of your Google Ads account at all times.',
      'Works best when paired with dedicated Landing Pages (`Moguls Digital`) so click traffic converts efficiently.',
      'Lead quality feedback from your sales team is integrated into ongoing keyword refinement.',
    ],
    faqs: [
      {
        q: 'Who owns the Google Ads account?',
        a: 'Your company always owns the Google Ads account and pays Google directly for media spend. We operate with transparent manager access.',
      },
      {
        q: 'Why do our current Google Ads get clicks from irrelevant searches?',
        a: 'Usually because default broad-match settings and automated recommendations were turned on without a curated negative keyword list. We enforce strict search-term hygiene.',
      },
      {
        q: 'Do we need a dedicated landing page before launching Google Ads?',
        a: 'Sending ad traffic to a specific, fast-loading service or landing page improves both your Google Quality Score (lowering click costs) and your inquiry conversion rate.',
      },
      {
        q: 'What budget do we need to start?',
        a: 'Media budgets depend on your sector’s cost-per-click in the UAE; during discovery, we estimate realistic click volumes so you can set a comfortable test budget.',
      },
    ],
    visualNodes: ['High-Intent Keywords', 'Negative Keyword Filter', 'Matched Landing Page', 'Verified Lead Tracking'],
    relatedSlugs: ['paid-media', 'landing-pages', 'conversion-optimization'],
  },

  'meta-ads': {
    headline: 'Meta Ads (Instagram & Facebook) creative strategy and campaign management.',
    description:
      'Reach targeted audiences across the UAE with editorial ad creative, structured audience testing, and conversion-focused landing flows.',
    introduction: [
      'On Instagram and Facebook, creative is the primary targeting mechanism. Generic stock-photo banners are scrolled past immediately by discerning audiences in Dubai.',
      'We pair Moguls Creative visual production with Moguls Growth campaign management—designing thumb-stopping static, carousel, and motion ad creative backed by disciplined audience segmentation, retargeting sequences, and conversion tracking.',
    ],
    whoItIsFor: [
      'Hospitality, real estate, beauty/wellness, retail, and B2B brands building awareness and lead flow in the UAE',
      'Companies with strong visual offerings that need structured creative testing rather than random boosted posts',
      'Businesses wanting to retarget website visitors with relevant case proof and service offers',
    ],
    problemsAddressed: [
      'Boosting organic posts without proper conversion objectives, landing pages, or audience exclusions',
      'Creative fatigue where ad performance drops because the same single graphic runs for months',
      'Low-intent Instant Form leads from people who do not remember filling out a form',
      'Disconnected branding where paid ads look nothing like the website they click through to',
    ],
    deliverables: [
      {
        title: 'Campaign & Funnel Architecture',
        detail: 'Prospecting, middle-of-funnel education, and high-intent website retargeting campaigns.',
      },
      {
        title: 'Ad Creative & Copy Matrix',
        detail: 'Multiple visual angles (editorial statics, carousels, and short-form motion graphics) with tailored hooks.',
      },
      {
        title: 'Pixel / Conversions API & Event Setup',
        detail: 'Clean event configuration aligned with visitor privacy and consent standards.',
      },
      {
        title: 'Landing Page or High-Intent Lead Flow',
        detail: 'Qualification questions or dedicated landing pages that filter out accidental clicks.',
      },
      {
        title: 'Creative Testing & Performance Cadence',
        detail: 'Regular rotation of winning creative angles and transparent reporting on qualified inquiries.',
      },
    ],
    processSteps: [
      {
        title: 'Audience, Offer & Creative Discovery',
        detail: 'We define the exact offer, target segments in the UAE, and 3–4 distinct creative angles.',
      },
      {
        title: 'Asset Production & Landing Alignment',
        detail: 'We design 1:1, 4:5, and 9:16 ad placements matched to your landing page visual system.',
      },
      {
        title: 'Campaign Structuring & Launch',
        detail: 'We configure exclusions (such as existing clients) and launch structured creative tests.',
      },
      {
        title: 'Iterative Creative Refresh & Scaling',
        detail: 'We pause underperforming hooks and iterate on the visual formats driving real inquiries.',
      },
    ],
    scopeConsiderations: [
      'Ad spend is paid directly to Meta through your Business Manager account.',
      'For high-consideration B2B or luxury services, we add qualifying friction (such as a multi-step landing page brief) rather than 1-click auto-filled forms.',
      'Can be bundled with Social Content Production and Landing Pages.',
    ],
    faqs: [
      {
        q: 'Why did we get poor-quality leads from Facebook/Instagram Lead Forms in the past?',
        a: 'Default one-click Instant Forms auto-fill contact info so easily that users submit without reading. Adding 2–3 qualifying questions or routing to a fast landing page dramatically improves lead intent.',
      },
      {
        q: 'Do you design the ad graphics and videos as well?',
        a: 'Yes. Because Moguls Growth and Moguls Creative operate together, we design and produce the campaign creative in-house.',
      },
      {
        q: 'How do you prevent our ads from showing to existing customers?',
        a: 'We configure audience exclusion lists and stage-based retargeting so budget focuses on net-new prospects.',
      },
      {
        q: 'Is Meta Ads useful for B2B companies in Dubai?',
        a: 'Yes, particularly for retargeting website visitors and decision-makers with clear educational carousels and service breakdowns.',
      },
    ],
    visualNodes: ['Creative Angle Matrix', 'UAE Audience Segments', 'Qualifying Landing Flow', 'Creative Refresh Loop'],
    relatedSlugs: ['campaign-creative', 'paid-media', 'social-content'],
  },

  'paid-media': {
    isCoreDivisionService: true,
    headline: 'Cross-channel paid media strategy and campaign management.',
    description:
      'Unified media planning, budget allocation, and campaign execution across Google Search, Meta, LinkedIn, and regional digital channels.',
    introduction: [
      'Running isolated ad campaigns across different platforms without a unified strategy leads to overlapping audiences, inconsistent messaging, and unclear attribution.',
      'We architect cross-channel paid media strategies—allocating budgets deliberately between high-intent search capture (Google) and demand generation/retargeting (Meta, LinkedIn), backed by cohesive campaign creative and conversion landing pages.',
    ],
    whoItIsFor: [
      'Growth-stage companies and established UAE brands investing across multiple paid acquisition channels',
      'Leadership teams wanting a single accountable partner to plan, execute, and report on paid media performance',
      'Businesses launching a major new product, property development, or market expansion in Dubai',
    ],
    problemsAddressed: [
      'Channel silos where search and social agencies compete for attribution credit instead of collaborating',
      'Misallocated budgets spending heavily on top-of-funnel awareness before bottom-of-funnel search intent is captured',
      'Lack of unified UTM conventions and clean conversion definitions across platforms',
      'Ad creative and landing pages lagging behind media buying schedules',
    ],
    deliverables: [
      {
        title: 'Omnichannel Media Plan & Budget Allocation',
        detail: 'Channel selection, funnel stage weighting, and pacing schedule aligned to your commercial goals.',
      },
      {
        title: 'Cross-Channel Campaign Architecture',
        detail: 'Coordinated setup across Google Ads, Meta Ads, LinkedIn Ads, or relevant programmatic placements.',
      },
      {
        title: 'Unified UTM & Attribution Taxonomy',
        detail: 'Standardized tracking parameters so every inquiry carries clear source, medium, and campaign context.',
      },
      {
        title: 'Coordinated Ad Creative & Landing Page Sync',
        detail: 'Message alignment from initial impression through retargeting and inquiry submission.',
      },
      {
        title: 'Executive Commercial Reporting',
        detail: 'Consolidated performance reviews focusing on qualified pipeline and cost per acquisition.',
      },
    ],
    processSteps: [
      {
        title: 'Commercial Goal & Channel Diagnostic',
        detail: 'We evaluate where your buyers research and compare options before making a decision.',
      },
      {
        title: 'Media Architecture & Creative Briefing',
        detail: 'We structure the campaign hierarchy, UTM taxonomy, and landing page requirements.',
      },
      {
        title: 'Multi-Channel Launch & Pacing',
        detail: 'We activate campaigns in sequence, starting with high-intent capture and retargeting.',
      },
      {
        title: 'Cross-Channel Budget Rebalancing',
        detail: 'We shift spend dynamically toward the channels and creative angles producing qualified inquiries.',
      },
    ],
    scopeConsiderations: [
      'All ad accounts remain owned by your organization with direct billing to the media platforms.',
      'We recommend launching high-intent search and retargeting foundations before scaling cold awareness budgets.',
      'Integrates directly with Moguls Creative for ad production and Moguls Digital for landing page engineering.',
    ],
    faqs: [
      {
        q: 'Which paid channel should our business start with first?',
        a: 'If people are already actively searching for your service in Dubai, start with Google Search Ads + Meta/LinkedIn retargeting. If you are introducing a brand-new category or visual lifestyle offer, pair paid social with search capture.',
      },
      {
        q: 'Do you charge a percentage of ad spend or a structured management fee?',
        a: 'We scope transparent management retainers based on the number of active channels and creative test velocity so our incentives stay aligned with lead quality rather than inflating spend.',
      },
      {
        q: 'How do you track which campaign generated a WhatsApp or contact form inquiry?',
        a: 'We preserve UTM parameters through session navigation and include campaign context in structured project briefs.',
      },
      {
        q: 'Can you audit our existing ad accounts before we commit to ongoing management?',
        a: 'Yes. We can conduct a standalone paid media audit to identify wasted spend, tracking gaps, and structural opportunities.',
      },
    ],
    visualNodes: ['Search Demand Capture', 'Social & B2B Retargeting', 'Unified UTM Taxonomy', 'Budget Rebalancing'],
    relatedSlugs: ['google-ads', 'meta-ads', 'conversion-optimization'],
  },

  'lead-generation': {
    headline: 'B2B and high-consideration lead generation architectures.',
    description:
      'Build predictable commercial inquiry systems combining diagnostic lead magnets, targeted acquisition, and structured brief capture.',
    introduction: [
      'Buyers of high-value B2B, real estate, healthcare, and advisory services rarely convert from a cold "Buy Now" button. They engage when a business offers useful clarity, credible expertise, and a frictionless way to discuss their specific situation.',
      'We build end-to-end lead generation systems—combining targeted search and social acquisition, interactive diagnostic tools (like project scope planners), authoritative service pages, and structured inquiry handoffs.',
    ],
    whoItIsFor: [
      'B2B service firms, consultancies, clinics, and property specialists seeking higher-intent commercial inquiries',
      'Businesses tired of buying cold list scrapes or low-quality form fills that never answer the phone',
      'Commercial teams wanting prospects to arrive educated and pre-briefed for discovery calls',
    ],
    problemsAddressed: [
      'Feast-or-famine referral cycles without a repeatable digital inquiry channel',
      'Passive websites that present information but offer no interactive reason for mid-funnel buyers to engage',
      'Sales reps wasting time chasing unverified contact details with zero project context',
      'Disconnect between marketing traffic reports and actual sales conversations',
    ],
    deliverables: [
      {
        title: 'Offer & Value-Exchange Architecture',
        detail: 'Design of compelling entry points: interactive planning guides, diagnostic tools, or consultation scopes.',
      },
      {
        title: 'Dedicated Acquisition Landing Systems',
        detail: 'High-converting landing pages and interactive questionnaires tailored to specific buyer segments.',
      },
      {
        title: 'Targeted Traffic & Retargeting Engine',
        detail: 'Search and social campaigns driving qualified decision-makers to your conversion assets.',
      },
      {
        title: 'Structured Brief & Multi-Channel Handoff',
        detail: 'Seamless transfer of prospect answers into contact forms, WhatsApp briefs, or CRM pipelines.',
      },
      {
        title: 'Lead Quality & Funnel Velocity Review',
        detail: 'Regular optimization based on which campaigns and paths produce real sales opportunities.',
      },
    ],
    processSteps: [
      {
        title: 'Buyer Journey & Offer Design',
        detail: 'We identify the pressing question your prospects need answered before commissioning a project.',
      },
      {
        title: 'Conversion Asset & Qualifier Build',
        detail: 'We build the landing pages, interactive guides, and brief handoff flows.',
      },
      {
        title: 'Traffic Activation & Retargeting',
        detail: 'We launch targeted search and social campaigns to bring the right audience in.',
      },
      {
        title: 'Sales Feedback & Funnel Tuning',
        detail: 'We refine questions, copy, and targeting based on actual sales call outcomes.',
      },
    ],
    scopeConsiderations: [
      'We never sell scraped contact lists or send unsolicited cold spam; all lead generation is built on inbound buyer intent and opt-in engagement.',
      'CRM pipeline integration is scoped around your existing sales software.',
      'Combines Moguls Growth, Moguls Digital, and Moguls Creative capabilities.',
    ],
    faqs: [
      {
        q: 'Why do interactive questionnaires outperform static PDF downloads?',
        a: 'Nobody wants another generic PDF cluttering their inbox. An interactive 5-question planning guide gives the visitor immediate, tailored next steps while giving your sales team a structured brief.',
      },
      {
        q: 'Do you buy third-party lead lists?',
        a: 'Never. Purchased lists harm domain reputation and violate privacy standards. We build owned inbound acquisition funnels on your brand domain.',
      },
      {
        q: 'How do you improve lead quality if we are getting too many small inquiries?',
        a: 'We adjust ad copy, add transparent scope/budget selectors in the project brief form, and refine keyword targeting.',
      },
      {
        q: 'Can leads be routed directly to WhatsApp as well as email?',
        a: 'Yes. Providing both a structured email brief and a pre-filled WhatsApp handoff lets buyers choose their preferred communication channel.',
      },
    ],
    visualNodes: ['Targeted Acquisition', 'Interactive Lead Magnet', 'Structured Brief Capture', 'Sales Team Handoff'],
    relatedSlugs: ['conversion-optimization', 'paid-media', 'crm-funnels'],
  },

  'conversion-optimization': {
    isCoreDivisionService: true,
    headline: 'Conversion Rate Optimization (CRO) and inquiry journey refinement.',
    description:
      'Turn more of your existing website visitors into qualified inquiries by removing layout friction, clarifying copy, and streamlining forms.',
    introduction: [
      'Doubling your inquiry conversion rate has the same commercial impact as doubling your advertising budget—without paying an extra dirham for clicks. Most websites lose prospective buyers to subtle friction: vague headlines, buried CTAs, slow mobile drawers, or confusing contact forms.',
      'We conduct forensic conversion audits and implement structured improvements across your navigation, service pages, interactive qualifiers, and contact handoffs.',
    ],
    whoItIsFor: [
      'Businesses with steady organic or paid website traffic that are dissatisfied with their current inquiry volume',
      'E-commerce and booking platforms experiencing drop-off between product/service views and checkout/inquiry',
      'Marketing teams wanting to maximize landing page efficiency before scaling paid media spend',
    ],
    problemsAddressed: [
      'Visitors scrolling through pages without a clear, context-specific next step',
      'High mobile bounce rates caused by broken menus, horizontal overflow, or tiny tap targets',
      'Generic contact pages that ask for a message without helping the visitor articulate their project scope',
      'Lack of trust signals, deliverable clarity, or FAQ objection handling near primary CTAs',
    ],
    deliverables: [
      {
        title: 'Heuristic & Viewport Friction Audit',
        detail: 'Page-by-page inspection at mobile (390px), tablet (768px), and desktop (1440px) identifying conversion blockers.',
      },
      {
        title: 'Copy Hierarchy & Value Proposition Rewrite',
        detail: 'Sharpening headlines, deliverable lists, and CTA labels so commercial value is unmistakable.',
      },
      {
        title: 'Inquiry Form & Brief Handoff Redesign',
        detail: 'Streamlining fields, pre-selecting service context from referrer pages, and adding WhatsApp/email brief options.',
      },
      {
        title: 'UI/UX & Speed Implementation',
        detail: 'Deploying layout improvements, sticky navigation refinements, and mobile usability fixes.',
      },
      {
        title: 'Experimentation & Conversion Measurement Plan',
        detail: 'Tracking before-and-after inquiry completion rates and user flow progression.',
      },
    ],
    processSteps: [
      {
        title: 'Funnel & Device Walkthrough Audit',
        detail: 'We trace every click from entry landing page to final inquiry submission on mobile and desktop.',
      },
      {
        title: 'Hypothesis & Prioritization Matrix',
        detail: 'We rank structural, copy, and UX fixes by expected impact and implementation speed.',
      },
      {
        title: 'Design & Code Implementation',
        detail: 'We update page layouts, CTAs, FAQs, and form mechanics in staging.',
      },
      {
        title: 'Post-Release Conversion Review',
        detail: 'We measure completion rates and iterate on remaining drop-off points.',
      },
    ],
    scopeConsiderations: [
      'For websites with moderate B2B traffic, high-impact structural and clarity improvements deliver faster results than waiting months for micro-button-color A/B tests.',
      'Where traffic volume supports statistical split-testing, we design controlled A/B experiments.',
      'Implemented directly in your codebase by our frontend team or delivered as detailed specs.',
    ],
    faqs: [
      {
        q: 'Why does pre-selecting the service in the contact form improve conversion?',
        a: 'When a visitor clicks "Inquire about Website Design" on a service page and lands on a contact form where "Website Design" is already selected, it confirms continuity and saves cognitive effort.',
      },
      {
        q: 'Do we need tens of thousands of daily visitors to benefit from CRO?',
        a: 'No. While massive traffic is needed for tiny button-color split tests, any business benefits immediately from fixing mobile layout bugs, clarifying service deliverables, and improving form handoffs.',
      },
      {
        q: 'How does page speed affect conversion rates?',
        a: 'Every extra second of load delay on mobile increases bounce rate—especially for users clicking through from social or search ads.',
      },
      {
        q: 'Do you use dark patterns or fake urgency timers?',
        a: 'Never. Fake countdown timers destroy trust with discerning buyers. We improve conversion through clarity, speed, relevant proof of capability, and effortless inquiry options.',
      },
    ],
    visualNodes: ['Viewport Friction Audit', 'Headline & Deliverable Clarity', 'Pre-Selected Brief Form', 'Multi-Channel Handoff'],
    relatedSlugs: ['landing-pages', 'lead-generation', 'ui-ux-design'],
  },

  'marketing-automation': {
    headline: 'Marketing automation and lifecycle follow-up sequences.',
    description:
      'Ensure every inquiry receives immediate acknowledgment, relevant educational context, and structured sales follow-up reminders.',
    introduction: [
      'Generating an inquiry is only half the battle. When a prospect submits a brief or downloads a resource and hears nothing for 48 hours—or receives generic spam—commercial momentum evaporates.',
      'We design and configure respectful, high-relevance marketing automation sequences that acknowledge inquiries immediately, deliver tailored service guides, and prompt your sales team for timely human follow-up.',
    ],
    whoItIsFor: [
      'B2B, real estate, education, and clinic teams managing multi-week or multi-month buyer consideration cycles',
      'Sales and marketing teams needing automated reminders and status updates when new leads arrive',
      'Brands wanting consistent onboarding and post-inquiry education without manual email sending',
    ],
    problemsAddressed: [
      'Slow initial response times after a prospect submits an inquiry outside working hours',
      'Leads going cold during long consideration cycles because there is no structured educational follow-up',
      'Generic newsletter blasts sent to everyone regardless of which division or service they inquired about',
      'Lack of coordination between marketing emails and live 1-to-1 sales conversations',
    ],
    deliverables: [
      {
        title: 'Lifecycle & Trigger Map',
        detail: 'Visual flowchart of entry triggers, segmentation rules, wait intervals, and exit conditions.',
      },
      {
        title: 'Segmented Email & Message Copywriting',
        detail: 'Editorial, plain-spoken emails tailored by division or industry interest—free of aggressive hype.',
      },
      {
        title: 'Sales Alert & SLA Notification Rules',
        detail: 'Automated internal alerts when a prospect replies, books a call, or revisits high-intent pages.',
      },
      {
        title: 'Platform Configuration & Deliverability Setup',
        detail: 'SPF, DKIM, and DMARC authentication checks plus workflow setup in your chosen marketing platform.',
      },
      {
        title: 'Unsubscribe, Consent & Suppression Hygiene',
        detail: 'Strict opt-out handling and automatic suppression once a prospect enters active sales dialogue.',
      },
    ],
    processSteps: [
      {
        title: 'Customer Journey & Touchpoint Audit',
        detail: 'We map what currently happens in the first 14 days after a prospect contacts your business.',
      },
      {
        title: 'Segmentation & Sequence Copywriting',
        detail: 'We write helpful, division-specific follow-up messages and internal team alerts.',
      },
      {
        title: 'Platform & DNS Deliverability Setup',
        detail: 'We configure workflows, test rendering across email clients, and verify domain authentication.',
      },
      {
        title: 'Testing & Suppression QA',
        detail: 'We verify that sequences pause immediately when a human salesperson engages the lead.',
      },
    ],
    scopeConsiderations: [
      'Integration with your chosen email/CRM platform (HubSpot, ActiveCampaign, Klaviyo, HighLevel, or Customer.io) is subject to scoping.',
      'All automated sequences pause automatically when a human representative takes over the conversation.',
      'Respects explicit visitor consent and one-click unsubscribe standards.',
    ],
    faqs: [
      {
        q: 'How do you keep automated emails from feeling robotic?',
        a: 'By writing concise, helpful plain-text or clean editorial emails that reference the exact service category the visitor asked about, and stopping automation the moment they reply.',
      },
      {
        q: 'Will you check our email domain deliverability (SPF/DKIM/DMARC)?',
        a: 'Yes. Even the best sequence fails if it lands in spam, so we audit your DNS authentication records before launching.',
      },
      {
        q: 'Which marketing automation platform should we use?',
        a: 'We work with your existing platform or recommend a right-sized tool based on whether your model is B2B consultative sales or e-commerce.',
      },
      {
        q: 'Can this connect with our internal workflow automations?',
        a: 'Yes. Marketing sequences and internal operational notifications are designed together so sales and marketing stay synchronized.',
      },
    ],
    visualNodes: ['Inquiry / Opt-In Trigger', 'Division Segmentation', 'Helpful Nurture Sequence', 'Pause on Human Reply'],
    relatedSlugs: ['email-marketing', 'crm-funnels', 'workflow-automation'],
  },

  'email-marketing': {
    headline: 'Editorial email marketing, newsletters, and client retention campaigns.',
    description:
      'Design and write high-trust email communications, executive digests, and retention sequences that audiences actually want to open.',
    introduction: [
      'Email remains one of the few owned channels where no algorithm stands between your brand and your audience. Yet most corporate emails suffer from cluttered templates, broken dark-mode colors, and self-promotional filler.',
      'We design and produce editorial email programs—crafting responsive HTML templates, insightful executive newsletters, product launch announcements, and post-purchase retention campaigns.',
    ],
    whoItIsFor: [
      'Professional services, B2B firms, and consultancies publishing regular market insights to clients and prospects',
      'E-commerce, hospitality, and lifestyle brands in Dubai building repeat customer loyalty and seasonal launches',
      'Organizations needing a cohesive set of reusable, dark-mode-safe email templates',
    ],
    problemsAddressed: [
      'Broken email layouts in Outlook, Apple Mail, or Gmail dark mode',
      'Low open and click rates caused by vague subject lines and generic company announcements',
      'Unsegmented mailing lists where every subscriber receives irrelevant offers',
      'Inconsistent typography and visual styling between your website and email communications',
    ],
    deliverables: [
      {
        title: 'Editorial Email Calendar & Audience Strategy',
        detail: 'Cadence planning, subscriber segmentation, and topic pillars aligned with your business calendar.',
      },
      {
        title: 'Responsive & Dark-Mode Safe Email Templates',
        detail: 'Modular HTML/ESP templates tested across desktop, mobile, and dark-mode mail clients.',
      },
      {
        title: 'Campaign Copywriting & Visual Assets',
        detail: 'Subject line variants, concise body copy, custom header graphics, and clear calls to action.',
      },
      {
        title: 'List Hygiene & Deliverability Configuration',
        detail: 'Bounce handling, sunset policies for inactive contacts, and authentication verification.',
      },
      {
        title: 'Engagement & Conversion Analytics',
        detail: 'Tracking of click-to-site behavior, replies, and downstream project or store inquiries.',
      },
    ],
    processSteps: [
      {
        title: 'Audience & Deliverability Audit',
        detail: 'We inspect your current subscriber list health, domain authentication, and past campaign metrics.',
      },
      {
        title: 'Master Template Design & Client Testing',
        detail: 'We build reusable newsletter and announcement templates aligned with your brand tokens.',
      },
      {
        title: 'Content Production & Segment Scheduling',
        detail: 'We draft, design, and proof each campaign with your team before scheduling.',
      },
      {
        title: 'Performance Review & List Stewardship',
        detail: 'We analyze reader engagement and maintain clean list hygiene.',
      },
    ],
    scopeConsiderations: [
      'Can be commissioned as a standalone template system or an ongoing monthly editorial email retainer.',
      'We only send to opt-in subscribers and existing client relationships—never cold scraped lists.',
      'Pairs naturally with our Insights & Content Strategy practice to repurpose flagship articles into executive briefings.',
    ],
    faqs: [
      {
        q: 'Why do our current emails look inverted or unreadable in dark mode?',
        a: 'Email clients like Apple Mail and Gmail automatically invert colors unless templates are coded with explicit dark-mode media queries and transparent-safe graphic assets.',
      },
      {
        q: 'How often should a B2B company send an email newsletter?',
        a: 'Quality always beats frequency. A substantive bi-weekly or monthly insight briefing builds far more authority than weekly filler.',
      },
      {
        q: 'Can you repurpose our website Insights articles into email editions?',
        a: 'Yes! Structuring each Insights article so it also serves as an executive email briefing is one of the smartest ways to maximize content ROI.',
      },
      {
        q: 'Do you manage the sending inside our email platform?',
        a: 'Yes, we can prepare drafts inside your ESP for your final approval and scheduled dispatch.',
      },
    ],
    visualNodes: ['Segmented Opt-In List', 'Dark-Mode Safe HTML', 'Editorial Briefing Copy', 'Site & Inquiry Click'],
    relatedSlugs: ['marketing-automation', 'content-seo', 'copywriting'],
  },

  'crm-funnels': {
    headline: 'CRM pipeline architecture and commercial funnel alignment.',
    description:
      'Structure your deal stages, lead routing rules, and sales handoffs so no commercial inquiry slips through the cracks.',
    introduction: [
      'Many companies pay for a CRM platform yet treat it like a glorified address book. Without clear pipeline stages, mandatory qualification fields, and clean handoffs from website forms and WhatsApp, sales visibility breaks down.',
      'We architect CRM pipelines and commercial funnels—defining realistic deal stages, configuring lead intake mappings, and aligning marketing attribution with sales follow-up SLAs.',
    ],
    whoItIsFor: [
      'B2B, real estate, clinic, and service teams setting up or cleaning up their CRM pipeline',
      'Commercial leaders who lack a clear view of which marketing channels produce closed business',
      'Growing sales teams moving from shared spreadsheets to a structured pipeline workflow',
    ],
    problemsAddressed: [
      'Cluttered pipelines with 15+ vague stages that sales reps never update',
      'Website and WhatsApp inquiries sitting unassigned without clear ownership or response timers',
      'Lost attribution context where the sales team cannot see which service page or campaign a lead came from',
      'Duplicate contact records and inconsistent property naming',
    ],
    deliverables: [
      {
        title: 'Pipeline Stage & SLA Blueprint',
        detail: 'Clear stage definitions, entry/exit criteria, and response-time targets tailored to your sales cycle.',
      },
      {
        title: 'Custom Property & Field Schema',
        detail: 'Standardized fields for division, service interest, budget tier, timeline, and UTM source attribution.',
      },
      {
        title: 'Inbound Lead Mapping & Routing Setup',
        detail: 'Scoped connection between your website brief forms, qualifiers, and CRM contact/deal creation.',
      },
      {
        title: 'Sales Rep Views & Task Automation',
        detail: 'Clean daily follow-up queues and automated task reminders when a new project brief arrives.',
      },
      {
        title: 'Team Playbook & Onboarding Session',
        detail: 'Practical guide ensuring sales reps can update deals in seconds without administrative friction.',
      },
    ],
    processSteps: [
      {
        title: 'Sales Process & Data Audit',
        detail: 'We map how an inquiry progresses from first contact to signed proposal in your business.',
      },
      {
        title: 'Schema & Pipeline Architecture',
        detail: 'We design a streamlined set of pipeline stages and clean contact/deal properties.',
      },
      {
        title: 'Intake & Routing Configuration',
        detail: 'We configure form/webhook mappings and round-robin or division-based assignment.',
      },
      {
        title: 'Rep Training & Reporting Verification',
        detail: 'We walk your commercial team through the daily workflow and pipeline dashboards.',
      },
    ],
    scopeConsiderations: [
      'CRM platform integrations (HubSpot, Salesforce, Pipedrive, Zoho, or HighLevel) are subject to technical scoping and your license tier.',
      'Note: The Mansas Moguls agency website itself uses direct client-controlled brief handoffs (copy, WhatsApp, email) by design; for client engagements, we scope full CRM integration where desired.',
      'Can be paired with Moguls Strategy Revenue Operations planning.',
    ],
    faqs: [
      {
        q: 'How many pipeline stages should a B2B sales funnel have?',
        a: 'Usually 5 to 7 concrete stages tied to buyer milestones (e.g., New Brief → Discovery Scheduled → Scope Qualified → Proposal Sent → Negotiation → Won/Lost).',
      },
      {
        q: 'Why do sales reps stop updating the CRM?',
        a: 'Because previous administrators required 25 manual fields per deal. We keep required fields minimal and automate intake fields from the initial project brief.',
      },
      {
        q: 'Can you clean up our existing messy CRM setup?',
        a: 'Yes. We frequently audit existing CRM portals, archive unused custom fields, merge duplicates, and simplify stage workflows.',
      },
      {
        q: 'How do you preserve marketing source data into the CRM?',
        a: 'We map initial landing page, referrer, and selected division/service parameters directly onto the contact and deal record.',
      },
    ],
    visualNodes: ['Brief & UTM Intake', 'Clean Field Schema', '5-Stage Deal Pipeline', 'Rep SLA Queue'],
    relatedSlugs: ['revenue-operations', 'lead-generation', 'api-integrations'],
  },

  'analytics-reporting': {
    headline: 'Privacy-conscious analytics and commercial attribution reporting.',
    description:
      'Replace noisy vanity dashboards with clear measurement of traffic quality, user journeys, and inquiry conversions.',
    introduction: [
      'Most marketing dashboards drown executives in dozens of charts—impressions, bounce rates, scroll percentages—while failing to answer the simplest question: which pages and channels are driving real project inquiries?',
      'We implement clean, privacy-conscious web analytics and executive reporting—defining meaningful conversion events, standardizing UTM governance, and building concise dashboards focused on commercial outcomes.',
    ],
    whoItIsFor: [
      'Leadership and marketing teams lacking trust in their current analytics numbers due to duplicate tags or broken events',
      'Businesses running multi-channel marketing that need unified visibility across organic, paid, and direct paths',
      'Organizations wanting lightweight, consent-respecting measurement without bloated third-party scripts',
    ],
    problemsAddressed: [
      'Double-counted conversions or broken GA4 events firing on every page load',
      'Heavy third-party tracking scripts slowing down mobile Core Web Vitals',
      'Inability to distinguish between casual blog readers and visitors who engaged with service pages or lead tools',
      'Fragmented monthly reports pulled manually from four different ad platforms',
    ],
    deliverables: [
      {
        title: 'Measurement Plan & Event Taxonomy',
        detail: 'Clear specification of macro conversions (brief handoffs, calls) and micro engagements (qualifier steps, division switches).',
      },
      {
        title: 'Clean Tag & Event Implementation',
        detail: 'Lightweight instrumentation of GA4, Plausible/PostHog, or server-side events respecting user consent.',
      },
      {
        title: 'UTM Governance & Channel Grouping',
        detail: 'Standardized link builder rules so paid, social, email, and referral traffic bucket cleanly.',
      },
      {
        title: 'Executive Looker / Custom Dashboard',
        detail: 'Single-screen view of acquisition channels, top-converting service routes, and inquiry velocity.',
      },
      {
        title: 'Tracking QA & Documentation Guide',
        detail: 'Verification log confirming every event fires accurately across desktop and mobile.',
      },
    ],
    processSteps: [
      {
        title: 'Tag & Data Integrity Audit',
        detail: 'We inspect existing scripts, remove duplicate pixels, and identify tracking gaps.',
      },
      {
        title: 'Event Schema & Consent Alignment',
        detail: 'We define clean event names and parameters aligned with your privacy disclosures.',
      },
      {
        title: 'Instrumentation & Dashboard Build',
        detail: 'We wire the events and build a clear, jargon-free reporting view.',
      },
      {
        title: 'Verification & Monthly Review Cadence',
        detail: 'We validate live events and establish a practical review rhythm.',
      },
    ],
    scopeConsiderations: [
      'All tracking configurations are aligned with your published Privacy Policy and consent preferences.',
      'We avoid installing unnecessary session-recording bloat that degrades page speed or captures sensitive form inputs.',
      'Connects directly with SEO, Paid Media, and Conversion Rate Optimization engagements.',
    ],
    faqs: [
      {
        q: 'Why do our Google Ads and Google Analytics numbers never match exactly?',
        a: 'Ad platforms attribute conversions by ad click date and cross-device models, whereas web analytics attributes by session timestamp and last non-direct click. We configure both cleanly so you understand the relationship.',
      },
      {
        q: 'Can we track clicks on WhatsApp and Email Brief buttons?',
        a: 'Yes. We instrument outbound brief handoff clicks as primary conversion events with division and service context.',
      },
      {
        q: 'Will adding analytics slow down our website?',
        a: 'Not when engineered properly. We keep tag payloads minimal and defer non-critical scripts so initial HTML rendering is never blocked.',
      },
      {
        q: 'Do you store personal form inputs inside analytics events?',
        a: 'Never. Names, emails, phone numbers, and message text are strictly excluded from analytics telemetry.',
      },
    ],
    visualNodes: ['Event Taxonomy Spec', 'Consent-Safe Tagging', 'UTM Attribution Map', 'Executive Dashboard'],
    relatedSlugs: ['conversion-optimization', 'paid-media', 'seo'],
  },

  'content-seo': {
    isCoreDivisionService: true,
    headline: 'Content planning, editorial strategy, and social media management.',
    description:
      'Build lasting category authority with researched editorial articles, structured content calendars, and disciplined social media stewardship.',
    introduction: [
      'Publishing superficial, AI-spun blog posts or random daily social graphics does nothing to persuade serious buyers in Dubai. Decision-makers engage with content that demonstrates genuine domain understanding, practical frameworks, and clear editorial craft.',
      'We develop and execute integrated Content Planning, Editorial SEO, and Social Media Management programs—producing substantive long-form guides, service comparisons, and cohesive social content calendars.',
    ],
    whoItIsFor: [
      'B2B firms, consultancies, clinics, and real estate brands wanting to educate buyers during high-consideration decisions',
      'Companies whose blog or social channels have gone dormant or lack a coherent editorial point of view',
      'Marketing leaders needing a reliable partner to plan, write, design, and publish monthly content',
    ],
    problemsAddressed: [
      'Generic 300-word filler posts that neither rank in search nor earn trust from human readers',
      'Disconnected social media posts that get likes from peers but never link back to commercial services',
      'Subject-matter experts inside your company who have valuable insights but no time to write',
      'Lack of internal linking between educational articles and relevant service inquiry pages',
    ],
    deliverables: [
      {
        title: 'Quarterly Content & Topic Pillar Strategy',
        detail: 'Editorial calendar mapping buyer questions across search articles, LinkedIn/Instagram formats, and email briefings.',
      },
      {
        title: 'Long-Form Editorial Articles (800–1200+ Words)',
        detail: 'Researched, original guides with practical examples, readable subheadings, and embedded service links.',
      },
      {
        title: 'Social Media Content Calendar & Management',
        detail: 'Planned feed carousels, executive thought-leadership posts, and visual assets tailored per platform.',
      },
      {
        title: 'Custom Editorial Cover & Diagram Graphics',
        detail: 'Bespoke visual covers and architectural diagrams that elevate every article and social post.',
      },
      {
        title: 'Internal Link & Conversion Integration',
        detail: 'Strategic placement of service cross-links and project planning CTAs inside every piece.',
      },
    ],
    processSteps: [
      {
        title: 'Buyer Question & Expertise Extraction',
        detail: 'We interview your leadership or sales team for 45 minutes a month to capture real market insights.',
      },
      {
        title: 'Editorial Calendar & Outline Approval',
        detail: 'We structure article outlines and social hooks before drafting full copy.',
      },
      {
        title: 'Writing, Visual Production & On-Page SEO',
        detail: 'We write substantive copy, design custom covers/carousels, and format MDX/CMS routes.',
      },
      {
        title: 'Publishing, Distribution & Review',
        detail: 'We publish on schedule across web and social channels and track reader paths to inquiry.',
      },
    ],
    scopeConsiderations: [
      'Every article and social asset is reviewed and approved by your team before publication.',
      'We never invent statistics, fake client stories, or unsupported regulatory claims in editorial content.',
      'Coordinates closely with Moguls Creative for social graphics and Moguls Digital for MDX publishing.',
    ],
    faqs: [
      {
        q: 'How do you write accurately about our specific industry?',
        a: 'We combine deep commercial research with brief, structured interviews with your internal subject-matter experts, then handle all the structuring, writing, and editing.',
      },
      {
        q: 'Why are 800–1,200 word practical guides so effective?',
        a: 'That length is substantial enough to walk a buyer through real architectural trade-offs and checklists without padding text with repetitive fluff.',
      },
      {
        q: 'Do you handle both website articles and social media management?',
        a: 'Yes. We design each flagship monthly article so its core frameworks also power 4–6 cohesive LinkedIn and Instagram carousels.',
      },
      {
        q: 'Will you link our articles to our service pages?',
        a: 'Always. Every editorial piece is architected with contextual links to the relevant divisions and services.',
      },
    ],
    visualNodes: ['Buyer Question Pillars', '800–1200w Deep Guides', 'Social Carousel System', 'Service Page Links'],
    relatedSlugs: ['seo', 'social-media-management', 'copywriting'],
  },
};

