import type { ServiceDetailContent } from './types';

export const strategyServicesDetails: Record<string, ServiceDetailContent> = {
  'business-consulting': {
    isCoreDivisionService: true,
    headline: 'Commercial and operating consulting for ambitious businesses in Dubai.',
    description:
      'Structured advisory helping leadership teams clarify business models, service packaging, unit economics, and growth priorities.',
    introduction: [
      'Ambitious companies often hit inflection points where hard work alone stops compounding—service lines become muddled, margins compress under custom requests, or leadership is pulled in ten directions at once.',
      'Our Business Consulting practice works directly with founders, managing directors, and executive teams in Dubai to bring structural clarity to your service model, commercial packaging, and quarterly execution priorities.',
    ],
    whoItIsFor: [
      'Founders and managing directors in the UAE navigating a growth plateau, business model pivot, or multi-division expansion',
      'Service, real estate, hospitality, and technology companies needing clearer commercial packaging and pricing logic',
      'International firms establishing or restructuring their regional commercial operations in Dubai',
    ],
    problemsAddressed: [
      'Trying to sell everything to everyone without clearly packaged core offerings',
      'Sales and delivery friction caused by unstandardized project scopes and custom one-off pricing',
      'Leadership lacking a prioritized 90-day execution cadence across marketing, digital, and operations',
      'Strategic slide decks from traditional consultancies that sit on a shelf without an implementation bridge',
    ],
    deliverables: [
      {
        title: 'Commercial & Operating Diagnostic',
        detail: 'Objective review of your current revenue mix, offer structure, client acquisition cost, and delivery bottlenecks.',
      },
      {
        title: 'Service Packaging & Architecture Matrix',
        detail: 'Clear definition of core vs. specialized offerings, scope boundaries, and value tiers.',
      },
      {
        title: 'Prioritized 90-Day Strategic Roadmap',
        detail: 'Sequenced initiatives across positioning, digital infrastructure, automation, and demand generation.',
      },
      {
        title: 'KPI & Executive Cadence Framework',
        detail: 'Focused scorecard of leading and lagging commercial indicators for leadership review.',
      },
      {
        title: 'Cross-Division Implementation Briefs',
        detail: 'Actionable specifications ready for internal execution or seamless handoff to our Digital, AI, Creative, and Growth teams.',
      },
    ],
    processSteps: [
      {
        title: 'Executive Interviews & Commercial Audit',
        detail: 'We review your current offerings, pipeline mechanics, and operational constraints.',
      },
      {
        title: 'Offer & Model Structuring',
        detail: 'We simplify and package your capabilities so buyers and sales teams understand them immediately.',
      },
      {
        title: 'Roadmap Sequencing & Resource Alignment',
        detail: 'We rank initiatives by commercial return and operational readiness.',
      },
      {
        title: 'Leadership Workshop & Execution Handoff',
        detail: 'We align your leadership team around the 90-day plan and initiate phase-one delivery.',
      },
    ],
    scopeConsiderations: [
      'Delivered as a focused 2-to-4 week diagnostic sprint or a quarterly advisory retainer.',
      'Unlike purely theoretical consultancies, our recommendations are grounded in what can actually be designed, built, and marketed.',
      'Does not include statutory financial auditing or legal licensing representation.',
    ],
    faqs: [
      {
        q: 'How is Moguls Strategy different from a traditional management consultancy?',
        a: 'Traditional consultancies hand over a 150-page theoretical PDF and leave you to figure out how to build the website, brand, or software. Because Mansas Moguls unites Strategy with Digital, AI, Creative, and Growth, every roadmap is built for immediate execution.',
      },
      {
        q: 'Can we commission a strategy engagement before deciding on a website or AI build?',
        a: 'Yes—and for complex businesses, starting with a 2-week strategy and scoping sprint is the best way to de-risk your larger implementation budget.',
      },
      {
        q: 'Who participates from our company during consulting engagements?',
        a: 'Typically the founder, managing director, or commercial/operations leads across 3–4 focused working sessions.',
      },
      {
        q: 'Do you work with both startups and established UAE enterprises?',
        a: 'Yes. We tailor the diagnostic depth to match whether you are validating a new venture or optimizing an established multi-team operation.',
      },
    ],
    visualNodes: ['Commercial Diagnostic', 'Offer Packaging Matrix', '90-Day Sequenced Plan', 'Execution Bridge'],
    relatedSlugs: ['growth-strategy', 'business-audits', 'operational-strategy'],
  },

  'digital-transformation': {
    isCoreDivisionService: true,
    headline: 'Digital transformation planning that sequences technology around real people.',
    description:
      'Audit legacy systems, eliminate disconnected spreadsheets, and architect a phased modernization roadmap across web, portals, and automation.',
    introduction: [
      'Most "digital transformation" projects fail because companies buy expensive enterprise software before mapping how their staff and customers actually work. Replacing a manual mess with an overly complex software mess solves nothing.',
      'We lead pragmatic Digital Transformation Planning—auditing your current customer touchpoints, internal tools, and data handoffs to design a phased, low-risk modernization roadmap.',
    ],
    whoItIsFor: [
      'Established bricks-and-mortar or service businesses in Dubai modernizing legacy customer and internal operations',
      'Companies suffering from software sprawl—paying for 15 disconnected SaaS tools that do not talk to each other',
      'COO and IT leaders needing an objective architecture blueprint before commissioning software builds',
    ],
    problemsAddressed: [
      'Purchasing heavyweight software licenses that staff refuse to adopt because the UX is too complex',
      'Critical business data trapped in isolated Excel files on individual employee laptops',
      'Trying to rebuild the website, CRM, ERP, and AI tools all in the same week without a phased sequence',
      'Lack of clear integration contracts between customer-facing portals and back-office operations',
    ],
    deliverables: [
      {
        title: 'Current-State Systems & Friction Map',
        detail: 'Visual inventory of all existing software tools, manual spreadsheets, data silos, and customer touchpoints.',
      },
      {
        title: 'Target Digital Ecosystem Blueprint',
        detail: 'Clean architecture diagram showing how web, portals, CRM, documents, and automation should connect.',
      },
      {
        title: 'Build-vs-Buy & Vendor Evaluation',
        detail: 'Objective recommendation on where to use off-the-shelf platforms vs. where to build custom interfaces.',
      },
      {
        title: 'Phased Rollout & Migration Schedule',
        detail: 'Step-by-step sequence (Phase 1 Foundation → Phase 2 Workflow → Phase 3 Intelligence) preventing operational disruption.',
      },
      {
        title: 'Change Management & Adoption Guide',
        detail: 'Practical plan for training staff and retiring legacy workflows smoothly.',
      },
    ],
    processSteps: [
      {
        title: 'System Inventory & Staff Shadowing',
        detail: 'We observe how frontline staff and customers actually complete tasks today.',
      },
      {
        title: 'Gap Analysis & Architecture Design',
        detail: 'We design the target ecosystem, eliminating redundant tools and manual re-entry.',
      },
      {
        title: 'Phasing, Budgeting & Risk Mitigation',
        detail: 'We break the transformation into self-contained 30/60/90-day milestones.',
      },
      {
        title: 'Blueprint Handover & Phase-1 Kickoff',
        detail: 'We deliver the complete technical and operational specification.',
      },
    ],
    scopeConsiderations: [
      'Always vendor-neutral: we recommend the simplest, most maintainable architecture for your team size.',
      'Prioritizes customer-facing clarity and high-friction manual bottlenecks first.',
      'Can transition seamlessly into implementation across Moguls Digital and Moguls AI.',
    ],
    faqs: [
      {
        q: 'Why should we separate Digital Transformation Planning from implementation?',
        a: 'Planning first lets you see the entire puzzle—costs, dependencies, and sequence—before committing to long-term software contracts or engineering sprints.',
      },
      {
        q: 'How do you prevent disruption to daily business operations during a transformation?',
        a: 'By never doing a "big bang" cutover. We sequence transformations in parallel waves—launching the public web layer first, then migrating internal workflows one department at a time.',
      },
      {
        q: 'Will you recommend custom software if an off-the-shelf tool works?',
        a: 'No. We recommend off-the-shelf tools for commoditized back-office functions and reserve custom design and code for your diferenciated customer experience and unique workflows.',
      },
      {
        q: 'How long does a Digital Transformation Planning engagement take?',
        a: 'Typically 3 to 5 weeks depending on the number of departments and existing software systems audited.',
      },
    ],
    visualNodes: ['Legacy Tool Audit', 'Target Ecosystem Map', 'Build vs Buy Matrix', 'Phased Rollout Plan'],
    relatedSlugs: ['automation-roadmaps', 'operational-strategy', 'web-applications'],
  },

  'growth-strategy': {
    isCoreDivisionService: true,
    headline: 'Commercial growth strategy and acquisition economics.',
    description:
      'Align your positioning, offer ladder, acquisition channels, and conversion architecture into a unified commercial growth plan.',
    introduction: [
      'Tactical marketing without a growth strategy is just random experimentation—running a few ads here, posting on social media there, and wondering why revenue remains unpredictable.',
      'We partner with leadership teams to build a disciplined Commercial Growth Strategy—connecting your ideal customer segments, offer hierarchy, acquisition channel economics, and website conversion architecture.',
    ],
    whoItIsFor: [
      'B2B, real estate, hospitality, clinic, and e-commerce businesses in Dubai planning their next stage of commercial scale',
      'Companies whose referral network has carried them so far, but now need repeatable digital customer acquisition',
      'CMOs and founders wanting an integrated plan across search, paid media, content, and conversion before deploying budget',
    ],
    problemsAddressed: [
      'Spending marketing budget across too many channels simultaneously without reaching critical mass in any of them',
      'Lack of an entry-point offer or diagnostic tool to capture mid-funnel prospects who aren’t ready for a massive contract yet',
      'Unclear customer acquisition cost (CAC) targets and payback expectations',
      'Disconnect between brand positioning and performance marketing execution',
    ],
    deliverables: [
      {
        title: 'Ideal Customer Profile (ICP) & Demand Analysis',
        detail: 'Segmentation of your highest-margin buyer cohorts and how they search, evaluate, and buy in the UAE.',
      },
      {
        title: 'Offer Ladder & Value-Exchange Design',
        detail: 'Structuring diagnostic entry offers, core flagpole services, and recurring retention/stewardship tiers.',
      },
      {
        title: 'Channel Selection & Budget Model',
        detail: 'Prioritized channel mix (SEO, Local Search, Google Ads, Meta/LinkedIn, Partnerships) matched to your unit economics.',
      },
      {
        title: 'Funnel & Landing Architecture Blueprint',
        detail: 'Specification of required service pages, landing pages, lead magnets, and inquiry handoffs.',
      },
      {
        title: '90-Day Growth Execution Playbook',
        detail: 'Week-by-week implementation schedule and KPI scorecard.',
      },
    ],
    processSteps: [
      {
        title: 'Unit Economics & Cohort Discovery',
        detail: 'We analyze your best past engagements, deal sizes, sales cycle length, and margins.',
      },
      {
        title: 'Market Demand & Competitive Sizing',
        detail: 'We evaluate search demand, paid media competition, and positioning gaps in your category.',
      },
      {
        title: 'Funnel, Offer & Channel Architecture',
        detail: 'We design the complete acquisition-to-inquiry system and budget allocation.',
      },
      {
        title: 'Playbook Delivery & Activation',
        detail: 'We hand over the strategy or transition directly into Moguls Growth execution.',
      },
    ],
    scopeConsiderations: [
      'Grounded in realistic UAE market dynamics and transparent unit-economic assumptions—never inflated financial projections.',
      'Designed so your internal team or Moguls Growth can execute it step by step.',
      'Pairs naturally with Brand Positioning and Go-to-Market Strategy.',
    ],
    faqs: [
      {
        q: 'Why shouldn’t we launch on every marketing channel at once?',
        a: 'Spreading a moderate budget across six platforms results in thin creative and zero momentum. Mastering 1–2 high-intent channels with a great landing page first builds a profitable foundation.',
      },
      {
        q: 'What is an "Offer Ladder"?',
        a: 'It is how you structure your services so prospects can engage at the right level—starting with a low-friction initial guide or discovery sprint, moving into a core build, and continuing into ongoing stewardship.',
      },
      {
        q: 'Do you invent market size statistics in strategy decks?',
        a: 'Never. We rely on observable search demand, verifiable competitor footprints, and your actual commercial unit economics.',
      },
      {
        q: 'Can Moguls Growth execute the plan once we approve it?',
        a: 'Yes. Our strategy blueprints map directly into our SEO, Paid Media, Conversion Optimization, and Digital teams.',
      },
    ],
    visualNodes: ['ICP & Unit Economics', 'Offer Ladder Design', 'Channel & Budget Model', '90-Day Growth Plan'],
    relatedSlugs: ['go-to-market', 'paid-media', 'conversion-optimization'],
  },

  'brand-positioning': {
    isCoreDivisionService: true,
    headline: 'Brand positioning and competitive differentiation for crowded markets.',
    description:
      'Define what sets your business apart in Dubai, articulate a sharp value proposition, and align your narrative across every division.',
    introduction: [
      'In competitive sectors like Dubai real estate, hospitality, clinics, finance, and technology services, sounding like everyone else forces you to compete on price alone. Positioning is the strategic decision of who you are for, what standard you uphold, and why a discerning client chooses you.',
      'We lead structured Brand Positioning engagements—analyzing competitor claims, uncovering your genuine operational strengths, and codifying a clear positioning architecture that anchors your website, identity, and sales conversations.',
    ],
    whoItIsFor: [
      'Companies whose current messaging sounds interchangeable with ten other competitors in the UAE',
      'Multi-service or multi-division organizations struggling to explain how their different practices connect under one roof',
      'Businesses preparing for a major rebrand, website redesign, or premium market shift',
    ],
    problemsAddressed: [
      'Vague taglines ("Quality solutions for your needs") that say nothing memorable',
      'Sales reps, founders, and website pages describing the company in three completely different ways',
      'Prospects misunderstanding your caliber or assuming you are a low-cost commodity vendor',
      'Difficulty explaining how diverse capabilities (such as strategy, creative, web, and AI) form one coherent offering',
    ],
    deliverables: [
      {
        title: 'Competitive Positioning Audit',
        detail: 'Analysis of how local and international competitors frame their offers, pricing tiers, and visual authority.',
      },
      {
        title: 'Core Positioning Statement & Pillars',
        detail: 'Definitive articulation of your category, target audience, primary differentiator, and supporting capabilities.',
      },
      {
        title: 'Brand Architecture & Division Hierarchy',
        detail: 'Clear naming and relationship model between your parent brand, divisions, and specialized services.',
      },
      {
        title: 'Audience-Specific Messaging Matrix',
        detail: 'Tailored value propositions and objection answers for CEOs, procurement leads, and technical buyers.',
      },
      {
        title: 'Headline & Narrative Playbook',
        detail: 'Ready-to-use homepage hero copy, about story, and sales deck framing.',
      },
    ],
    processSteps: [
      {
        title: 'Leadership & Commercial Discovery',
        detail: 'We uncover why your best clients chose you and where your real operational craft lies.',
      },
      {
        title: 'Category & Competitor Mapping',
        detail: 'We map the linguistic and visual clichés in your sector so we can steer clear of them.',
      },
      {
        title: 'Positioning & Architecture Synthesis',
        detail: 'We craft your positioning pillars, brand hierarchy, and messaging matrix.',
      },
      {
        title: 'Creative & Digital Alignment',
        detail: 'We brief the visual identity and website teams so design and positioning move as one.',
      },
    ],
    scopeConsiderations: [
      'Honest positioning never relies on exaggerated superlatives ("#1 in the world") or invented awards; it highlights specific capabilities, methodology, and clarity.',
      'Serves as the ideal foundation before kicking off Brand Identity (`Moguls Creative`) or Website Design (`Moguls Digital`).',
      'Completed within 2 to 3 focused weeks.',
    ],
    faqs: [
      {
        q: 'Why shouldn’t we just claim we are the "leading" or "best" agency in Dubai?',
        a: 'Unverified superlatives sound generic and trigger skepticism in sophisticated buyers. Specific positioning—showing exact deliverables, clear methodology, and thoughtful capability illustrations—earns far more trust.',
      },
      {
        q: 'How do you position a company that offers multiple different services?',
        a: 'Through a connected division architecture (for example, uniting Digital, AI, Growth, Creative, and Strategy under one shared brand vision) so clients see breadth as an integrated advantage rather than a lack of focus.',
      },
      {
        q: 'Does positioning include renaming our company or services?',
        a: 'We preserve your approved company and division names while sharpening how each service is titled, grouped, and explained.',
      },
      {
        q: 'What happens after our positioning playbook is approved?',
        a: 'It feeds directly into your website copywriting, visual identity system, and executive pitch deck.',
      },
    ],
    visualNodes: ['Category Cliché Audit', 'Positioning Pillars', 'Division Hierarchy', 'Messaging Matrix'],
    relatedSlugs: ['brand-identity', 'copywriting', 'go-to-market'],
  },

  'customer-experience': {
    isCoreDivisionService: true,
    headline: 'Customer experience (CX) mapping and end-to-end journey design.',
    description:
      'Audit every digital and human touchpoint from first discovery through inquiry, onboarding, delivery, and long-term retention.',
    introduction: [
      'Customers do not experience your business in departmental silos—they experience one continuous journey: finding you on Google, browsing your website on their phone, using your guided assistant, submitting a brief, speaking on WhatsApp, onboarding, and receiving delivery.',
      'We map and redesign your end-to-end Customer Experience (CX)—identifying where expectations drop between marketing promise and operational reality, and engineering seamless transitions across digital and human touchpoints.',
    ],
    whoItIsFor: [
      'Hospitality, healthcare/clinic, real estate, luxury retail, and high-touch B2B service brands in Dubai',
      'Organizations where marketing generates strong initial interest but prospects drop off during inquiry or onboarding',
      'Multi-channel businesses wanting consistency across web, mobile, WhatsApp, phone, and in-person interactions',
    ],
    problemsAddressed: [
      'Jarring transitions where a luxury website leads to a clumsy, unbranded contact form or slow email reply',
      'Customers having to repeat their requirements three times to three different team members',
      'Confusing post-purchase or post-signature onboarding that creates early buyer anxiety',
      'Lack of structured feedback loops to catch service friction before it turns into public churn',
    ],
    deliverables: [
      {
        title: 'End-to-End Customer Journey Blueprint',
        detail: 'Visual map tracking customer actions, questions, emotions, digital screens, and backstage staff tasks across every stage.',
      },
      {
        title: 'Touchpoint Friction & Drop-Off Audit',
        detail: 'Mystery-shopping walkthrough of your current web, mobile, WhatsApp, and onboarding experience.',
      },
      {
        title: 'Digital-to-Human Handoff Standards',
        detail: 'Protocols ensuring project briefs, concierge summaries, and intake forms pass cleanly to human specialists.',
      },
      {
        title: 'Onboarding & Communication Templates',
        detail: 'Redesigned welcome sequences, milestone status updates, and review checkpoints.',
      },
      {
        title: 'Prioritized CX Improvement Backlog',
        detail: 'Quick-win UI fixes paired with medium-term portal and workflow upgrades.',
      },
    ],
    processSteps: [
      {
        title: 'First-Person Journey Walkthrough',
        detail: 'We experience your brand as a real prospect across mobile, desktop, and inquiry channels.',
      },
      {
        title: 'Frontstage & Backstage Mapping',
        detail: 'We link what the customer sees on screen with what your internal staff have to do behind the scenes.',
      },
      {
        title: 'Touchpoint & Handoff Redesign',
        detail: 'We redesign the high-friction moments—qualifiers, brief transfers, and onboarding kits.',
      },
      {
        title: 'Implementation & Service Standards Rollout',
        detail: 'We deploy the digital improvements and align your frontline team.',
      },
    ],
    scopeConsiderations: [
      'Covers both digital interfaces (web, portals, guided assistants) and human operational handoffs.',
      'Can be executed as a diagnostic audit or paired with Moguls Digital and Moguls AI for full implementation.',
      'Respects customer privacy by designing transparent, consent-based interactions.',
    ],
    faqs: [
      {
        q: 'How is Customer Experience (CX) different from UI/UX Design?',
        a: 'UI/UX focuses on the screens of a single website or app. CX looks at the entire arc—including what happens after the user clicks "Submit," how fast your team responds on WhatsApp or email, and how onboarding feels.',
      },
      {
        q: 'Why is the handoff between website tools and human staff so important?',
        a: 'Nothing frustrates a buyer more than answering 5 questions in a website planner only to have a salesperson ask the exact same 5 questions from scratch. Transferring the summary directly into the brief solves this.',
      },
      {
        q: 'Can you help us improve our client onboarding experience?',
        a: 'Yes. First impressions after signing an agreement set the tone for the entire relationship; we design structured onboarding portals, intake checklists, and welcome kits.',
      },
      {
        q: 'Which industries in Dubai benefit most from CX mapping?',
        a: 'Hospitality, private clinics, real estate brokerages, wealth/corporate advisory, and premium D2C brands where service reputation drives referrals.',
      },
    ],
    visualNodes: ['Discovery & Web Browse', 'Guided Brief Handoff', 'Human Specialist Call', 'Onboarding & Delivery'],
    relatedSlugs: ['service-design', 'ui-ux-design', 'client-portals'],
  },

  'market-research': {
    isCoreDivisionService: true,
    headline: 'Commercial market research, competitor benchmarking, and buyer discovery.',
    description:
      'Evidence-based analysis of competitor offerings, search demand, buyer criteria, and digital gaps in Dubai and GCC markets.',
    introduction: [
      'Launching a new venture, service line, or digital platform based on boardroom assumptions is expensive. At the same time, generic 100-page macro-economic PDF reports rarely tell you how competitors actually structure their offers or what local buyers look for on a website.',
      'We conduct focused Commercial Market Research—analyzing real search demand, auditing competitor digital footprints and service packaging across the UAE, and synthesizing actionable buyer decision criteria.',
    ],
    whoItIsFor: [
      'International companies evaluating market entry or expansion into Dubai and the wider UAE',
      'Established businesses preparing to launch a new division, digital product, or pricing model',
      'Product and marketing leaders wanting an objective benchmark of competitor websites, funnels, and positioning',
    ],
    problemsAddressed: [
      'Building products or service pages without knowing what questions UAE buyers prioritize',
      'Blindly copying a local competitor’s website structure without realizing its conversion flaws',
      'Relying on outdated or fabricated market statistics instead of observable commercial signals',
      'Missing underserved niche segments or high-intent search categories',
    ],
    deliverables: [
      {
        title: 'Competitor Landscape & Offer Matrix',
        detail: 'Detailed teardown of 8–12 direct and aspirational competitors: positioning, service lines, UX, and inquiry models.',
      },
      {
        title: 'Search & Category Demand Analysis',
        detail: 'Empirical breakdown of how commercial buyers search for your category across Dubai and the GCC.',
      },
      {
        title: 'Buyer Decision Criteria & Objection Map',
        detail: 'Synthesis of key trust signals, procurement requirements, and common friction points in your sector.',
      },
      {
        title: 'Digital & Content Opportunity Gap Report',
        detail: 'Identification of underserved topics, service niches, and UX differentiators you can own.',
      },
      {
        title: 'Strategic Recommendations Briefing',
        detail: 'Clear executive summary translating research findings directly into positioning and roadmap actions.',
      },
    ],
    processSteps: [
      {
        title: 'Research Questions & Scope Framing',
        detail: 'We define the exact commercial decisions this research needs to inform.',
      },
      {
        title: 'Competitor Teardowns & Demand Gathering',
        detail: 'We audit competitor digital ecosystems, service structures, and regional search behavior.',
      },
      {
        title: 'Qualitative & Buyer Signal Synthesis',
        detail: 'We analyze review patterns, procurement criteria, and sector expectations.',
      },
      {
        title: 'Opportunity Mapping & Readout',
        detail: 'We present clear, evidence-backed recommendations for your leadership team.',
      },
    ],
    scopeConsiderations: [
      'We never fabricate survey numbers or invent unsupported market statistics; every finding cites its observable source or methodology.',
      'Primary customer interviews can be conducted with your permission when qualitative buyer feedback is scoped.',
      'Feeds directly into Go-to-Market Strategy and Market Entry Planning.',
    ],
    faqs: [
      {
        q: 'How is your market research different from generic industry reports?',
        a: 'Generic reports give broad regional macro numbers. We look at actionable commercial reality: how your exact competitors in Dubai structure their websites, what services they highlight, how they capture leads, and where they fall short.',
      },
      {
        q: 'Do you cite sources for every research finding?',
        a: 'Yes. We distinguish clearly between observed competitor data, search demand signals, and qualitative hypotheses—never padding reports with invented statistics.',
      },
      {
        q: 'How long does a market research sprint take?',
        a: 'A focused competitor and category demand teardown typically takes 2 to 3 weeks.',
      },
      {
        q: 'Can this research guide our website sitemap and content plan?',
        a: 'Yes! Understanding what competitors miss on their service pages is the best blueprint for structuring your own sitemap and editorial articles.',
      },
    ],
    visualNodes: ['Competitor UX Teardown', 'UAE Search Demand', 'Buyer Criteria Map', 'White-Space Strategy'],
    relatedSlugs: ['market-entry', 'go-to-market', 'brand-positioning'],
  },

  'go-to-market': {
    isCoreDivisionService: true,
    headline: 'Go-to-Market (GTM) planning and launch orchestration.',
    description:
      'Sequence your positioning, flagship website, sales enablement assets, and acquisition campaigns for a coordinated commercial launch.',
    introduction: [
      'A great product or service launch can fizzle out if the website goes live before the sales deck is ready, or if paid ads start running before inquiry routing is tested. Successful launches require synchronized choreography.',
      'We architect comprehensive Go-to-Market (GTM) Plans—aligning your target segments, value proposition, digital launch surface, sales collateral, and initial acquisition waves into one coordinated timeline.',
    ],
    whoItIsFor: [
      'Companies launching a new business unit, flagship software product, real estate project, or clinic in Dubai',
      'Established firms rolling out a major rebrand and repositioned service offering',
      'Ventures transitioning from stealth development into public commercial acquisition',
    ],
    problemsAddressed: [
      'Piecemeal launches where marketing, web design, and sales teams operate on conflicting schedules',
      'Launching ads or PR before the website has complete service pages and tested contact handoffs',
      'Sales teams lacking a unified pitch deck, company profile, and FAQ sheet on launch day',
      'No post-launch 30/60/90-day optimization plan after the initial announcement week',
    ],
    deliverables: [
      {
        title: 'GTM Segmentation & Offer Positioning',
        detail: 'Definition of priority launch segments, core value proposition, and introductory charter/pilot offers.',
      },
      {
        title: 'Launch Asset & Readiness Checklist',
        detail: 'Required digital surfaces (website, landing pages, qualifier), sales collateral (deck, profile), and tracking.',
      },
      {
        title: 'Channel & Campaign Rollout Sequence',
        detail: 'Phased activation across owned channels, founder/partner networks, search capture, and paid social.',
      },
      {
        title: 'Sales Handoff & Inquiry Playbook',
        detail: 'Brief routing rules, WhatsApp/email response templates, and discovery call agendas.',
      },
      {
        title: '30/60/90-Day Launch Master Schedule',
        detail: 'Dependencies, owners, and milestone gates from pre-launch prep through post-launch tuning.',
      },
    ],
    processSteps: [
      {
        title: 'Offer & Audience Alignment',
        detail: 'We lock in who we are targeting first and what the compelling initial call to action is.',
      },
      {
        title: 'Surface & Collateral Specification',
        detail: 'We define every web page, deck, and campaign asset required before launch day.',
      },
      {
        title: 'Cross-Division Production & QA',
        detail: 'We coordinate Creative, Digital, and Growth teams to build and test all launch assets.',
      },
      {
        title: 'Phased Rollout & Post-Launch Iteration',
        detail: 'We execute the launch sequence and adjust messaging based on real market response.',
      },
    ],
    scopeConsiderations: [
      'Can be commissioned as a strategic GTM blueprint or as a turnkey cross-division launch executed by Mansas Moguls.',
      'We prioritize launching a complete, verified English digital experience first before expanding to secondary locales.',
      'Timelines are reverse-engineered from your commercial target date with realistic QA buffers.',
    ],
    faqs: [
      {
        q: 'What is the biggest mistake companies make when launching a new offering?',
        a: 'Announcing the launch publicly while their website still has placeholder pages or broken mobile layouts. First impressions with early buyers are hard to recover.',
      },
      {
        q: 'How far in advance should GTM planning begin?',
        a: 'Ideally 6 to 10 weeks before your target commercial launch date so positioning, web build, and campaign assets can be produced without cutting corners.',
      },
      {
        q: 'Can you execute all the GTM assets in-house?',
        a: 'Yes. Because Mansas Moguls encompasses Strategy, Creative, Digital, AI, and Growth, we can take your GTM plan all the way through website build, deck design, and campaign launch.',
      },
      {
        q: 'How do you handle a soft launch vs. a full public launch?',
        a: 'We recommend a 2-week controlled soft launch (activating search capture and partner networks first) to validate inquiry handoffs before scaling broader paid campaigns.',
      },
    ],
    visualNodes: ['Segment & Offer Lock', 'Web & Collateral Prep', 'Soft-Launch QA Gate', 'Full Channel Rollout'],
    relatedSlugs: ['market-entry', 'growth-strategy', 'campaign-creative'],
  },

  'revenue-operations': {
    isCoreDivisionService: true,
    headline: 'Revenue Operations (RevOps) planning and commercial pipeline alignment.',
    description:
      'Unify marketing attribution, inquiry qualification, sales pipeline stages, and client onboarding into one measurable revenue system.',
    introduction: [
      'When marketing, sales, and client delivery teams operate with separate definitions, separate spreadsheets, and disconnected handoffs, revenue leaks at every transition. Marketing celebrates form fills while sales complains about lead quality, and delivery scrambles when a deal closes.',
      'Our Revenue Operations (RevOps) Planning practice architects the connective tissue across your commercial engine—standardizing lifecycle stages, qualification criteria, SLA timers, and attribution reporting.',
    ],
    whoItIsFor: [
      'B2B, real estate, clinic, and multi-division service companies scaling their commercial teams in Dubai',
      'Leadership teams tired of conflicting numbers between marketing reports and sales pipeline spreadsheets',
      'Organizations preparing to implement or restructure a CRM and automation stack',
    ],
    problemsAddressed: [
      'Disagreement between marketing and sales on what constitutes a qualified project inquiry',
      'Slow lead response times because ownership and routing rules are ambiguous',
      'Deals closing without structured scope handoff notes for the delivery/onboarding team',
      'Inability to see which service lines or industry sectors yield the fastest sales cycles and highest retention',
    ],
    deliverables: [
      {
        title: 'End-to-End Revenue Lifecycle Architecture',
        detail: 'Unified stage definitions from initial anonymous visitor through qualified brief, proposal, closed-won, and expansion.',
      },
      {
        title: 'Lead Qualification & Routing Specification',
        detail: 'Scoring logic, required brief fields, division assignment rules, and response SLA targets.',
      },
      {
        title: 'Data Dictionary & Property Governance',
        detail: 'Standardized naming for contact, company, and deal fields across forms, CRM, and reporting.',
      },
      {
        title: 'Sales-to-Delivery Handover Protocol',
        detail: 'Mandatory checklist and brief summary package triggered when an engagement is approved.',
      },
      {
        title: 'Executive RevOps Scorecard Specification',
        detail: 'Blueprint for tracking inquiry velocity, stage conversion rates, cycle time, and pipeline health.',
      },
    ],
    processSteps: [
      {
        title: 'Lifecycle & Handoff Diagnostic',
        detail: 'We trace how leads, proposals, and signed clients currently move between marketing, sales, and delivery.',
      },
      {
        title: 'Stage, SLA & Field Standardization',
        detail: 'We eliminate duplicate fields and align all teams on clear stage entry/exit rules.',
      },
      {
        title: 'Routing & Automation Blueprinting',
        detail: 'We design the automated notifications, brief transfers, and onboarding triggers.',
      },
      {
        title: 'Governance & Team Rollout',
        detail: 'We document the RevOps playbook and coordinate implementation with technical teams.',
      },
    ],
    scopeConsiderations: [
      'Focuses on process clarity first; software configuration (`crm-funnels` / `workflow-automation`) follows once the human workflow is agreed.',
      'Designed to minimize administrative data-entry burden on salespeople.',
      'Adaptable to your existing CRM or a lightweight structured brief workflow.',
    ],
    faqs: [
      {
        q: 'What is Revenue Operations (RevOps) in plain English?',
        a: 'It is making sure marketing, sales, and project delivery share the same playbook, the same definitions, and clean handoffs so inquiries turn into happy clients smoothly.',
      },
      {
        q: 'Do we need an expensive enterprise CRM to apply RevOps principles?',
        a: 'No. Even a lean team using structured project brief forms, WhatsApp/email handoffs, and a simple pipeline tracker benefits hugely from clear stage definitions and response SLAs.',
      },
      {
        q: 'How does RevOps improve the transition from sales to project delivery?',
        a: 'By requiring a structured scope summary before a deal moves to "Closed-Won," the delivery team starts with full context rather than asking the client to repeat everything.',
      },
      {
        q: 'Can you help us implement the workflows after the RevOps plan is approved?',
        a: 'Yes. Moguls Growth and Moguls AI can implement the exact CRM pipelines and workflow automations specified in your RevOps blueprint.',
      },
    ],
    visualNodes: ['Unified Lifecycle Stages', 'Routing & SLA Rules', 'Sales-to-Delivery Sync', 'Pipeline Scorecard'],
    relatedSlugs: ['crm-funnels', 'workflow-automation', 'business-audits'],
  },

  'automation-roadmaps': {
    isCoreDivisionService: true,
    headline: 'Automation and AI roadmaps sequenced by operational ROI.',
    description:
      'Identify high-friction manual workflows across your business and sequence a realistic, phased automation and AI implementation plan.',
    introduction: [
      'When companies attempt to automate without a roadmap, they often build complex bots for low-priority tasks while leaving their biggest daily time-sinks untouched. Worse, automating a broken manual process only produces errors faster.',
      'We create prioritized Automation & AI Roadmaps—auditing your team’s repetitive tasks, standardizing the underlying workflow first, and sequencing deterministic automations and human-supervised AI pilots over 30, 60, and 90 days.',
    ],
    whoItIsFor: [
      'Operations directors, COOs, and business owners wanting to scale output without linearly increasing administrative headcount',
      'Companies curious about workflow automation and AI agents that want a clear cost-vs-impact plan before building',
      'Multi-department businesses needing a unified automation architecture rather than isolated departmental scripts',
    ],
    problemsAddressed: [
      'Automating chaotic processes before standardizing the input fields and approval rules',
      'Over-engineering complex AI agents where a 10-line deterministic webhook would be 100% reliable',
      'Lack of clear visibility into which manual tasks actually consume the most staff hours each week',
      'Missing human review checkpoints in financial, legal, or client-facing workflows',
    ],
    deliverables: [
      {
        title: 'Time-Motion & Bottleneck Inventory',
        detail: 'Catalog of repetitive manual workflows across sales intake, onboarding, document review, and reporting.',
      },
      {
        title: 'Impact vs. Complexity Scoring Matrix',
        detail: 'Ranking of candidate automations by weekly hours saved, error reduction, API readiness, and risk.',
      },
      {
        title: 'Deterministic vs. AI Architecture Split',
        detail: 'Clear specification of which steps use rule-based webhooks and which use scoped AI/RAG with human review.',
      },
      {
        title: '30/60/90-Day Sequenced Build Plan',
        detail: 'Phase 1 Quick Wins, Phase 2 Core Workflows, and Phase 3 Assisted Intelligence.',
      },
      {
        title: 'Technical Scoping & Governance Briefs',
        detail: 'Ready-to-build specifications for every approved workflow.',
      },
    ],
    processSteps: [
      {
        title: 'Departmental Workflow Shadowing',
        detail: 'We map how forms, documents, approvals, and status updates currently move across your team.',
      },
      {
        title: 'Process Simplification First',
        detail: 'We strip out unnecessary manual steps before designing any automation.',
      },
      {
        title: 'Scoring, Architecture & Human Gate Design',
        detail: 'We define API requirements, fallback paths, and mandatory human sign-off gates.',
      },
      {
        title: 'Roadmap Readout & Pilot Selection',
        detail: 'We present the ranked roadmap and help you select the highest-return Phase 1 workflow.',
      },
    ],
    scopeConsiderations: [
      'Every external integration in the roadmap is evaluated for API availability and technical scoping requirements.',
      'Human review gates are built into the specification wherever decisions or external actions require oversight.',
      'Transitions directly into Moguls AI `workflow-automation` or `document-intelligence` builds.',
    ],
    faqs: [
      {
        q: 'Why do you simplify the manual process before automating it?',
        a: 'Often, half the steps in a legacy manual workflow only exist because of an old spreadsheet habit. Eliminating unnecessary steps first makes the resulting automation simpler and far more reliable.',
      },
      {
        q: 'How do you decide between standard automation and AI?',
        a: 'If inputs are structured (dropdowns, numbers, statuses), standard deterministic code is best. If inputs are unstructured (PDF documents, free-text emails, knowledge lookups), we add a scoped AI step with human review.',
      },
      {
        q: 'What is a typical Phase 1 quick win?',
        a: 'Structured inquiry intake and routing, automated project workspace provisioning upon contract sign-off, or side-by-side document field extraction.',
      },
      {
        q: 'Do we have to build the entire 90-day roadmap at once?',
        a: 'No. The beauty of a sequenced roadmap is that you can commission Phase 1, measure the time saved by your team, and then proceed to Phase 2.',
      },
    ],
    visualNodes: ['Manual Bottleneck Audit', 'Simplify Process First', 'Rule vs AI Split', '30/60/90-Day Build Plan'],
    relatedSlugs: ['workflow-automation', 'ai-consulting', 'digital-transformation'],
  },

  'business-audits': {
    isCoreDivisionService: true,
    headline: 'Comprehensive business, digital, and commercial funnel audits.',
    description:
      'An objective, multi-disciplinary diagnostic of your website, brand clarity, search visibility, inquiry flow, and operational handoffs.',
    introduction: [
      'When commercial growth slows down or digital investments underperform, it is rarely caused by a single isolated bug. Often, positioning ambiguity, mobile UX friction, thin service pages, and slow inquiry follow-up compound one another.',
      'We conduct human-led Business & Commercial Funnel Audits across all five Mansas Moguls disciplines—inspecting your brand positioning, website architecture, search visibility, paid media setup, and lead handoff workflows to give you a single prioritized action plan.',
    ],
    whoItIsFor: [
      'CEOs, managing directors, and marketing leaders wanting an honest, independent assessment before commissioning a major redesign or campaign',
      'Companies dissatisfied with their current digital agency results that want to diagnose the root cause',
      'Private equity, family offices, or holding groups evaluating the digital maturity of a portfolio business in the UAE',
    ],
    problemsAddressed: [
      'Guessing whether your conversion issue is a traffic problem, a positioning problem, a website UX problem, or a sales follow-up problem',
      'Automated "free SEO scan" widgets that spit out generic alarms without inspecting your actual business model or copy quality',
      'Wasting budget rebuilding things that already work while overlooking critical mobile or routing failures',
      'Lack of a single prioritized fix list across design, engineering, and marketing',
    ],
    deliverables: [
      {
        title: 'Brand & Positioning Clarity Review',
        detail: 'Evaluation of headline authority, service differentiation, and visual consistency.',
      },
      {
        title: 'Website UX, Viewport & Technical Inspection',
        detail: 'Manual inspection across 390px mobile, 768px tablet, and 1440px desktop plus Core Web Vitals and route health.',
      },
      {
        title: 'Search & Acquisition Channel Diagnostic',
        detail: 'Audit of indexation, service page depth, local search signals, and paid media account structure.',
      },
      {
        title: 'Inquiry & Revenue Handoff Walkthrough',
        detail: 'Testing of your forms, WhatsApp links, response speed, and pipeline intake.',
      },
      {
        title: 'Prioritized Remediation Roadmap',
        detail: 'Ranked list of Critical Fixes, High-Impact Improvements, and Strategic Expansions.',
      },
    ],
    processSteps: [
      {
        title: 'Commercial Context & Goal Alignment',
        detail: 'We learn your revenue model, target buyer profiles, and primary growth frustrations.',
      },
      {
        title: '5-Division Forensic Inspection',
        detail: 'Our Strategy, Digital, Creative, Growth, and AI leads inspect your live ecosystem.',
      },
      {
        title: 'Root-Cause Synthesis & Prioritization',
        detail: 'We connect symptoms to root causes and rank fixes by commercial impact.',
      },
      {
        title: 'Executive Readout & Action Plan',
        detail: 'We walk your leadership team through the findings with annotated screenshots and clear next steps.',
      },
    ],
    scopeConsiderations: [
      'This is a thorough, human-conducted strategic and technical audit—never an automated script pretending to scan your business.',
      'Does not constitute a statutory financial or legal compliance audit.',
      'Audit fees can be credited toward subsequent implementation if you choose to have Mansas Moguls execute the roadmap.',
    ],
    faqs: [
      {
        q: 'How is this different from automated website grader tools?',
        a: 'Automated tools only check basic HTML tags. They cannot tell if your headline makes commercial sense, if your service pages repeat generic text, or if your inquiry flow frustrates Dubai buyers. Our audit is conducted hands-on by senior specialists.',
      },
      {
        q: 'What access do you need to perform the audit?',
        a: 'We can conduct an external digital and funnel audit with zero backend access, or include a deeper Search Console, Analytics, and Ad Account review with read-only viewer access.',
      },
      {
        q: 'How long does the audit take?',
        a: 'Typically 10 to 14 business days from kickoff to the executive walkthrough and written report.',
      },
      {
        q: 'Are we obligated to hire Mansas Moguls to implement the fixes?',
        a: 'No. The audit deliverable is a self-contained, actionable blueprint that your internal team or any vendor can execute.',
      },
    ],
    visualNodes: ['Positioning & Copy Check', '390 / 768 / 1440 UX Audit', 'Search & Paid Diagnostic', 'Prioritized Fix List'],
    relatedSlugs: ['conversion-optimization', 'technical-seo', 'business-consulting'],
  },

  'market-entry': {
    isCoreDivisionService: true,
    headline: 'Dubai and UAE market entry planning for regional expansion.',
    description:
      'Localize your positioning, digital infrastructure, service packaging, and acquisition channels for commercial launch in the United Arab Emirates.',
    introduction: [
      'Expanding a successful international business into Dubai requires more than translating a brochure or adding a `.ae` domain. Buyer expectations in the UAE emphasize immediate mobile accessibility, WhatsApp communication velocity, visible local presence, and high-trust editorial presentation.',
      'We help international firms and regional ventures architect their UAE Market Entry—adapting service positioning, building localized web and search foundations, and launching targeted acquisition in Dubai.',
    ],
    whoItIsFor: [
      'European, UK, North American, Asian, and regional companies opening a commercial office or branch in Dubai',
      'Established B2B, healthcare, hospitality, and luxury brands adapting their global digital presence for UAE audiences',
      'Founders relocating to the UAE and launching a new regional venture',
    ],
    problemsAddressed: [
      'Global websites that bury UAE contact details, lack WhatsApp handoffs, or cite irrelevant foreign regulations',
      'Assuming European or US buyer journeys work identically in Dubai’s fast-paced, relationship-driven market',
      'Launching paid ads in the UAE before establishing local search signals, Dubai address credibility, and localized landing pages',
      'Fragmented rollout where legal setup finishes months before the commercial digital footprint is ready',
    ],
    deliverables: [
      {
        title: 'UAE Category & Competitor Intelligence Brief',
        detail: 'Analysis of local incumbents, pricing tiers, buyer expectations, and search demand in Dubai.',
      },
      {
        title: 'Localized Value Proposition & Offer Adaptation',
        detail: 'Tailoring your service packaging, proof points, and terminology for UAE decision-makers.',
      },
      {
        title: 'Regional Digital & Local Search Blueprint',
        detail: 'Architecture for your UAE web routes, `en_AE` / bilingual readiness, local schema, and WhatsApp brief handoffs.',
      },
      {
        title: '90-Day Dubai Acquisition & Launch Plan',
        detail: 'Sequenced activation across Google Search (UAE), LinkedIn/Meta regional targeting, and partner outreach.',
      },
      {
        title: 'Executive Market Entry Playbook',
        detail: 'Complete checklist coordinating brand, digital, and growth milestones.',
      },
    ],
    processSteps: [
      {
        title: 'Global Asset & UAE Fit Assessment',
        detail: 'We review your existing international positioning and identify what needs adaptation for Dubai.',
      },
      {
        title: 'Local Competitive & Demand Mapping',
        detail: 'We benchmark local competitors and map high-intent UAE search and social channels.',
      },
      {
        title: 'Digital Surface & Funnel Localization',
        detail: 'We design your Dubai landing architecture, local trust signals, and communication paths.',
      },
      {
        title: 'Coordinated Commercial Launch',
        detail: 'We build and activate your regional digital presence alongside your local team.',
      },
    ],
    scopeConsiderations: [
      'Focuses on commercial positioning, digital infrastructure, brand localization, and customer acquisition; corporate legal incorporation and visa processing remain with licensed legal/free-zone advisors.',
      'We ensure English (`en`) is launched to the highest standard first, with Arabic (`ar` RTL) scoped when full human-reviewed localization is required.',
      'Can be paired with full turnkey website and campaign execution.',
    ],
    faqs: [
      {
        q: 'What makes digital buyer behavior in Dubai unique?',
        a: 'Buyers in Dubai are highly mobile-first, expect fast response times via WhatsApp alongside formal email briefs, and place strong weight on polished visual presentation and verified local UAE presence.',
      },
      {
        q: 'Should we build a separate UAE website or add a regional experience to our global site?',
        a: 'We evaluate your domain authority and service model to recommend either a dedicated regional site or localized `/en/` and UAE landing architectures.',
      },
      {
        q: 'Do we need Arabic translation on day one to launch B2B services in Dubai?',
        a: 'English is the primary language of commercial business in Dubai, so launching a complete, flawless English experience first is essential. Arabic RTL localization can then be added thoughtfully for government or consumer segments.',
      },
      {
        q: 'Do you handle trade license registration?',
        a: 'No—we are a commercial strategy, creative, digital, and AI agency, not a legal incorporation agent. We build the commercial and digital engine that makes your licensed entity win business.',
      },
    ],
    visualNodes: ['UAE Competitor Map', 'Offer Localization', 'Dubai Web & WhatsApp UX', 'Regional Launch Wave'],
    relatedSlugs: ['go-to-market', 'local-seo', 'brand-positioning'],
  },

  'product-roadmaps': {
    isCoreDivisionService: true,
    headline: 'Product strategy, MVP scoping, and multi-quarter roadmaps.',
    description:
      'Define what to build first, prevent scope creep, and sequence features across V1 launch and future iterations.',
    introduction: [
      'The fastest way to stall a digital product or custom platform is trying to build every possible feature in Version 1. Without ruthless prioritization, engineering budgets balloon and launch dates slip by quarters.',
      'We partner with founders, product owners, and enterprise teams to craft disciplined Product Roadmaps—separating essential V1 core value from V2/V3 enhancements, validating workflows through clickable prototypes, and writing clear engineering specifications.',
    ],
    whoItIsFor: [
      'Founders and startups in Dubai scoping an MVP web or mobile application to take to market rapidly',
      'Enterprise teams building an internal platform, client portal, or AI-enabled product',
      'Organizations whose current development roadmap is clogged with competing stakeholder feature requests',
    ],
    problemsAddressed: [
      'Scope creep turning a 6-week MVP into an unfinished 9-month engineering project',
      'Building complex backend admin tools before validating whether customers use the core workflow',
      'Vague feature lists ("Add AI dashboard") that leave developers guessing what to actually code',
      'Lack of clear dependencies between UI design, API readiness, and frontend build phases',
    ],
    deliverables: [
      {
        title: 'Product Vision & Core Loop Specification',
        detail: 'Definition of target personas, the primary problem solved, and the minimum viable workflow.',
      },
      {
        title: 'MoSCoW Feature Prioritization Matrix',
        detail: 'Clear separation of Must-Have (V1 Launch), Should-Have (V1.1), and Could-Have (V2+) capabilities.',
      },
      {
        title: 'User Story & Acceptance Criteria Backlog',
        detail: 'Structured functional specifications covering happy paths, permissions, and edge cases.',
      },
      {
        title: 'Technical Dependency & Architecture Map',
        detail: 'Sequencing of frontend, backend, database, and third-party integration milestones.',
      },
      {
        title: 'Multi-Phase Release Roadmap',
        detail: 'Visual timeline communicating V1, V2, and V3 milestones for stakeholders and investors.',
      },
    ],
    processSteps: [
      {
        title: 'User Problem & Value Distillation',
        detail: 'We challenge every proposed feature to isolate what truly drives initial user adoption.',
      },
      {
        title: 'MVP Scoping & Trade-Off Workshop',
        detail: 'We draw a firm, realistic boundary around Version 1 so it can ship cleanly and quickly.',
      },
      {
        title: 'Backlog & Architecture Sequencing',
        detail: 'We map technical dependencies and write clear acceptance criteria.',
      },
      {
        title: 'Prototype & Engineering Kickoff',
        detail: 'We hand the roadmap into clickable UI/UX prototyping (`Moguls Digital`) and sprint execution.',
      },
    ],
    scopeConsiderations: [
      'Always favors shipping a complete, polished core workflow over shipping ten half-finished features.',
      'Integrates directly with Moguls Digital `product-design` and `web-applications`.',
      'Adaptable for both standalone software products and internal operational platforms.',
    ],
    faqs: [
      {
        q: 'How do you decide what belongs in Version 1 (MVP) vs. Version 2?',
        a: 'Version 1 must solve the core user problem completely and reliably from start to finish. Secondary conveniences (like automated bulk exports or custom theme settings) are scheduled for Version 1.1 once real users are onboarded.',
      },
      {
        q: 'Why does having a written product roadmap save money on development?',
        a: 'Changing a requirement on a roadmap or wireframe takes 10 minutes; changing it after backend databases and frontend screens are coded takes weeks.',
      },
      {
        q: 'Can we use this roadmap for investor discussions?',
        a: 'Yes. Investors respect founders who demonstrate a disciplined, capital-efficient V1 launch scope paired with a clear V2/V3 expansion vision.',
      },
      {
        q: 'Should we pair the product roadmap with a clickable prototype?',
        a: 'Yes—combining a written product roadmap with an interactive Figma prototype is the gold standard for aligning stakeholders and developers.',
      },
    ],
    visualNodes: ['Core Value Loop', 'V1 vs V2 Prioritization', 'Acceptance Backlog', 'Phased Release Map'],
    relatedSlugs: ['product-design', 'ui-ux-design', 'web-applications'],
  },

  'service-design': {
    isCoreDivisionService: true,
    headline: 'Service design that harmonizes digital interfaces and backstage operations.',
    description:
      'Blueprint how your people, processes, physical spaces, and digital tools work together to deliver a signature service.',
    introduction: [
      'In service businesses—whether a private clinic, a luxury hospitality concept, a real estate advisory, or a B2B agency—the website or app is only the tip of the iceberg. Every digital promise relies on backstage staff, policies, and tools to fulfill it.',
      'Our Service Design practice blueprints both the frontstage customer experience and the backstage operational choreography—ensuring that every new digital feature or service package is practical for your staff to deliver consistently.',
    ],
    whoItIsFor: [
      'Clinics, hospitality groups, concierge businesses, real estate firms, and professional services in Dubai',
      'Organizations launching a new service tier or physical-plus-digital ("phygital") customer experience',
      'Operations leaders finding that frontline staff struggle to fulfill what marketing promises on the website',
    ],
    problemsAddressed: [
      'Digital booking or inquiry tools that create chaotic manual work for receptionists and coordinators behind the scenes',
      'Inconsistent service quality depending on which staff member handles the client',
      'Lack of clear service blueprints showing who does what at each stage of delivery',
      'Disconnected physical and digital touchpoints in showrooms, clinics, or venues',
    ],
    deliverables: [
      {
        title: 'Multi-Layer Service Blueprint',
        detail: 'Synchronized map of Customer Actions, Frontstage Digital/Human Touchpoints, Backstage Staff Actions, and Support Systems.',
      },
      {
        title: 'Role & Touchpoint Script Playbooks',
        detail: 'Clear checklists and communication standards for reception, sales, and delivery staff.',
      },
      {
        title: 'Digital Companion & Intake Specifications',
        detail: 'Requirements for pre-arrival web forms, QR experiences, status updates, and post-visit follow-up.',
      },
      {
        title: 'Exception & Recovery Protocols',
        detail: 'Defined procedures for handling reschedules, delays, or special client requests gracefully.',
      },
      {
        title: 'Pilot Implementation & Training Plan',
        detail: 'Step-by-step rollout guide for testing the new service flow with staff and customers.',
      },
    ],
    processSteps: [
      {
        title: 'Frontstage & Backstage Observation',
        detail: 'We observe both the customer journey and the staff workstation reality.',
      },
      {
        title: 'Service Blueprinting Workshop',
        detail: 'We map the line of visibility between customer touchpoints and internal workflows.',
      },
      {
        title: 'Touchpoint & Tool Prototyping',
        detail: 'We design the digital intake surfaces alongside the internal staff SOPs.',
      },
      {
        title: 'Staff Alignment & Live Pilot',
        detail: 'We walk frontline teams through the blueprint and refine during initial rollout.',
      },
    ],
    scopeConsiderations: [
      'Bridges the gap between Moguls Strategy advisory, Moguls Digital interfaces, and Moguls AI workflow automation.',
      'Tailored for high-touch Dubai service environments where personal hospitality and digital speed must coexist.',
      'Delivered through collaborative workshops with your operational leads.',
    ],
    faqs: [
      {
        q: 'What is a "Service Blueprint"?',
        a: 'It is an architectural diagram that stacks four horizontal lanes: what the customer does, what the customer sees (digital screens + frontline staff), what happens backstage out of sight, and which software systems support each step.',
      },
      {
        q: 'Why do digital projects fail when backstage service design is ignored?',
        a: 'If you build a sleek online booking button on the website, but the reception desk still uses a paper diary and doesn’t check email until 4 PM, the customer experience fails.',
      },
      {
        q: 'Is service design relevant for B2B companies as well as hospitality and clinics?',
        a: 'Absolutely. B2B scoping, proposal delivery, client onboarding, and quarterly review rituals are all service experiences that benefit enormously from deliberate design.',
      },
      {
        q: 'Can you build the digital tools identified in the Service Blueprint?',
        a: 'Yes. Moguls Digital and Moguls AI can design and build the exact forms, portals, and internal notifications mapped in the blueprint.',
      },
    ],
    visualNodes: ['Customer Action Lane', 'Frontstage Touchpoints', 'Backstage Staff SOPs', 'Support Systems Layer'],
    relatedSlugs: ['customer-experience', 'operational-strategy', 'workflow-automation'],
  },

  'operational-strategy': {
    isCoreDivisionService: true,
    headline: 'Operational strategy, SOP architecture, and delivery scalability.',
    description:
      'Structure your internal delivery workflows, SOP documentation, team handoffs, and quality gates so your business scales without chaos.',
    introduction: [
      'Winning more business is dangerous if your internal delivery operation relies on heroic late-night improvisation by founders. Sustainable scale requires repeatable standard operating procedures (SOPs), clear role ownership, and predictable quality gates.',
      'We partner with COOs, founders, and operations directors to architect scalable Operational Strategies—documenting core delivery workflows, establishing quality checklists, and organizing your internal knowledge base.',
    ],
    whoItIsFor: [
      'Growing service, agency, real estate, clinic, and operations businesses in Dubai scaling from founder-led delivery to team-led delivery',
      'Companies experiencing quality bottlenecks, missed deadlines, or staff burnout as client volume grows',
      'Organizations preparing their SOP documentation before implementing internal knowledge search (RAG) or workflow automation',
    ],
    problemsAddressed: [
      'Critical operational know-how living exclusively inside the heads of 1 or 2 senior people',
      'New hires taking months to become productive because there are no written step-by-step playbooks',
      'Inconsistent project deliverables where quality gates are skipped under deadline pressure',
      'Chaotic task boards and communication channels without clear responsibility assignment',
    ],
    deliverables: [
      {
        title: 'Core Delivery Value-Chain Map',
        detail: 'End-to-end diagram of how your organization fulfills client engagements from kickoff to sign-off.',
      },
      {
        title: 'Modular SOP & Playbook Library',
        detail: 'Concise, searchable standard operating procedures with checklists, templates, and definition-of-done criteria.',
      },
      {
        title: 'RACI Ownership & Escalation Matrix',
        detail: 'Clear assignment of who is Responsible, Accountable, Consulted, and Informed across key processes.',
      },
      {
        title: 'Quality Assurance (QA) Gate Framework',
        detail: 'Mandatory verification checklists before deliverables or milestones are presented to clients.',
      },
      {
        title: 'Knowledge Base Structure (RAG-Ready)',
        detail: 'Clean markdown/wiki organization ready for human browsing or Moguls AI internal knowledge search.',
      },
    ],
    processSteps: [
      {
        title: 'Delivery & Bottleneck Diagnostic',
        detail: 'We interview your key operators to identify where projects stall or require founder rescue.',
      },
      {
        title: 'Workflow Standardization & QA Gates',
        detail: 'We define the 4-to-6 standard stages of delivery and mandatory quality checks.',
      },
      {
        title: 'SOP Authoring & Template Structuring',
        detail: 'We write clear, scannable playbooks that staff will actually use.',
      },
      {
        title: 'Team Rollout & Automation Alignment',
        detail: 'We onboard your team to the new playbooks and identify steps ready for automation.',
      },
    ],
    scopeConsiderations: [
      'We write concise, action-oriented checklists rather than bloated corporate manuals that gather dust.',
      'Structuring your SOPs cleanly is the single best prerequisite before building an Internal Knowledge Search (`knowledge-bases`) system.',
      'Can be scoped for a single high-friction department or company-wide delivery.',
    ],
    faqs: [
      {
        q: 'Why do most company SOP binders never get used by staff?',
        a: 'Because they are written as 40-page walls of text buried in a shared folder. Effective SOPs are modular, checklist-driven, and linked directly inside the tools where work happens.',
      },
      {
        q: 'How does Operational Strategy connect to Moguls AI?',
        a: 'An AI knowledge base or workflow automation is only as good as your underlying SOPs. When we structure and clarify your operational playbooks first, any subsequent AI search or automation works with dramatically higher accuracy.',
      },
      {
        q: 'How do you extract SOPs without taking up weeks of our senior team’s time?',
        a: 'We record brief 30-minute screen-share walkthroughs with your key operators as they perform a task, and our team handles all the structuring, diagramming, and writing.',
      },
      {
        q: 'Can this help us onboard new staff faster in Dubai?',
        a: 'Yes. Having a clear 30-day onboarding playbook and documented QA standards cuts new-hire ramp time significantly.',
      },
    ],
    visualNodes: ['Value-Chain Audit', 'RACI & QA Gates', 'Modular SOP Checklists', 'RAG-Ready Knowledge'],
    relatedSlugs: ['workflow-automation', 'knowledge-bases', 'business-consulting'],
  },
};

