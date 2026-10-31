export type DivisionSlug = 'digital' | 'ai' | 'growth' | 'creative' | 'strategy';

export interface DivisionRecord {
  slug: DivisionSlug;
  title: string;
  shortLabel: string;
  accent: string;
  accentSecondary?: string;
  eyebrow: string;
  heroSummary: string;
  description: string;
  editorialIntro: string;
  capabilities: string[];
  allCapabilities: string[];
  featuredServiceSlug: string;
  featuredServiceLabel: string;
  sculptureMode: {
    name: string;
    frequency: number;
    twist: number;
    ribbonSpread: number;
    pulseSpeed: number;
  };
}

export const divisions: Record<DivisionSlug, DivisionRecord> = {
  digital: {
    slug: 'digital',
    title: 'Moguls Digital',
    shortLabel: 'Digital',
    accent: '#85e8f2',
    accentSecondary: '#f7f5f0',
    eyebrow: 'Websites, Products & Systems',
    heroSummary:
      'High-performance business websites, full-scale redesigns, e-commerce storefronts, and application UI/UX built for speed and conversion.',
    description:
      'Architecting flagship business websites, custom web and mobile interfaces, design systems, and resilient digital platforms for companies operating in Dubai and beyond.',
    editorialIntro:
      'Moguls Digital builds the flagship digital surfaces your customers interact with first. From bespoke business websites and technical rebuilds to interactive product prototypes and scalable design systems, every interface is engineered for editorial clarity, accessibility, and fast load performance.',
    capabilities: [
      'Business websites',
      'Website redesigns and rebuilds',
      'Ecommerce',
      'Landing pages',
      'Application UI/UX',
      'Design systems & clickable prototypes',
    ],
    allCapabilities: [
      'Business websites',
      'Website redesigns and rebuilds',
      'Ecommerce',
      'Landing pages',
      'Application UI/UX',
      'Clickable prototypes',
      'Design systems',
      'Website maintenance',
    ],
    featuredServiceSlug: 'website-design',
    featuredServiceLabel: 'Explore Business Website Design',
    sculptureMode: {
      name: 'Architectural Ribbon Lattice',
      frequency: 1.35,
      twist: 1.8,
      ribbonSpread: 1.1,
      pulseSpeed: 0.75,
    },
  },
  ai: {
    slug: 'ai',
    title: 'Moguls AI',
    shortLabel: 'AI',
    accent: '#7456f2',
    accentSecondary: '#85e8f2',
    eyebrow: 'Assistants, Search & Workflow Automation',
    heroSummary:
      'Scoped customer assistants, internal knowledge search, document extraction, and workflow automations designed with human review checkpoints.',
    description:
      'Practical AI assistants, voice workflows, internal knowledge retrieval, and multi-step process automation scoped around real operational requirements and human oversight.',
    editorialIntro:
      'Moguls AI turns operational bottlenecks into structured, auditable workflows. We scope and build customer-facing website and WhatsApp assistants, citation-backed internal knowledge search, document extraction pipelines, and tool-using agents—always maintaining human review wherever commercial decisions or sensitive actions require it.',
    capabilities: [
      'Website and customer assistants',
      'Voice assistant projects',
      'Workflow automation',
      'Internal knowledge search',
      'Document extraction and review',
      'Custom AI applications & consulting',
    ],
    allCapabilities: [
      'Website and customer assistants',
      'Voice assistant projects',
      'Workflow automation',
      'Internal knowledge search',
      'Document extraction and review',
      'Custom AI applications',
      'Tool using agents',
      'AI implementation consulting',
    ],
    featuredServiceSlug: 'workflow-automation',
    featuredServiceLabel: 'Explore Workflow Automation',
    sculptureMode: {
      name: 'Synaptic Strand Convergence',
      frequency: 2.1,
      twist: 2.6,
      ribbonSpread: 0.85,
      pulseSpeed: 1.15,
    },
  },
  growth: {
    slug: 'growth',
    title: 'Moguls Growth',
    shortLabel: 'Growth',
    accent: '#7456f2',
    accentSecondary: '#c8ad7f',
    eyebrow: 'Search, Acquisition & Conversion',
    heroSummary:
      'Search engine optimization, local search visibility in Dubai, paid campaign management, content planning, and landing page conversion improvement.',
    description:
      'Connecting organic search authority, local discovery, paid media management, and conversion rate optimization into a disciplined commercial acquisition system.',
    editorialIntro:
      'Traffic without conversion architecture wastes budget. Moguls Growth aligns technical and editorial SEO, local search support across the UAE, paid search and social campaign management, and structured landing page experimentation so every campaign compounds commercial pipeline.',
    capabilities: [
      'Digital marketing strategy',
      'SEO & local search support',
      'Paid campaign management',
      'Social media management',
      'Content planning & campaign creative',
      'Conversion improvement',
    ],
    allCapabilities: [
      'Digital marketing strategy',
      'Social media management',
      'Content planning',
      'SEO',
      'Local search support',
      'Campaign creative',
      'Paid campaign management',
      'Conversion improvement',
    ],
    featuredServiceSlug: 'seo',
    featuredServiceLabel: 'Explore Search & Growth Strategy',
    sculptureMode: {
      name: 'Ascending Harmonic Wave',
      frequency: 1.65,
      twist: 1.4,
      ribbonSpread: 1.35,
      pulseSpeed: 0.95,
    },
  },
  creative: {
    slug: 'creative',
    title: 'Moguls Creative',
    shortLabel: 'Creative',
    accent: '#7456f2',
    accentSecondary: '#eae4ff',
    eyebrow: 'Identity, Art Direction & Motion',
    heroSummary:
      'Distinctive brand identities, visual systems, executive presentations, motion graphics, and digital brand guidelines crafted for authority.',
    description:
      'Brand identity architecture, art direction, motion design, presentation systems, and cohesive visual production for ambitious organizations.',
    editorialIntro:
      'Moguls Creative shapes how your organization is perceived across every touchpoint. We develop enduring brand identities, art direction, executive pitch presentations, motion graphics, and comprehensive digital brand guidelines that keep internal teams and external campaigns visually unified.',
    capabilities: [
      'Brand identity & visual systems',
      'Art direction',
      'Presentation design',
      'Motion graphics',
      'Social creative & AI-assisted production',
      'Digital brand guidelines',
    ],
    allCapabilities: [
      'Brand identity',
      'Art direction',
      'Visual systems',
      'Social creative',
      'Presentation design',
      'Motion graphics',
      'AI assisted visual production',
      'Digital brand guidelines',
    ],
    featuredServiceSlug: 'brand-identity',
    featuredServiceLabel: 'Explore Brand Identity Systems',
    sculptureMode: {
      name: 'Sculpted Silk Continuum',
      frequency: 1.15,
      twist: 2.2,
      ribbonSpread: 1.45,
      pulseSpeed: 0.68,
    },
  },
  strategy: {
    slug: 'strategy',
    title: 'Moguls Strategy',
    shortLabel: 'Strategy',
    accent: '#c8ad7f',
    accentSecondary: '#f7f5f0',
    eyebrow: 'Advisory, Transformation & Roadmaps',
    heroSummary:
      'Commercial consulting, digital transformation planning, market entry strategy, revenue operations, and prioritized automation roadmaps.',
    description:
      'Strategic advisory across digital transformation, brand positioning, UAE market entry, revenue operations, and product roadmapping.',
    editorialIntro:
      'Before writing code or launching campaigns, leadership teams need clarity on where to invest and in what sequence. Moguls Strategy delivers rigorous business and revenue audits, digital transformation plans, go-to-market strategies, and automation roadmaps grounded in operational reality.',
    capabilities: [
      'Business consulting & revenue audits',
      'Digital transformation planning',
      'Go-to-market & market entry planning',
      'Brand positioning & market research',
      'Revenue operations & automation roadmaps',
      'Product roadmaps & service design',
    ],
    allCapabilities: [
      'Business consulting',
      'Digital transformation planning',
      'Growth strategy',
      'Brand positioning',
      'Customer experience',
      'Market research',
      'Go to market planning',
      'Revenue operations planning',
      'Automation roadmaps',
      'Business and revenue audits',
      'Market entry planning',
      'Product roadmaps',
      'Service design',
      'Operational strategy',
    ],
    featuredServiceSlug: 'digital-transformation',
    featuredServiceLabel: 'Explore Digital Transformation Planning',
    sculptureMode: {
      name: 'Meridian Geodesic Field',
      frequency: 0.95,
      twist: 1.25,
      ribbonSpread: 1.0,
      pulseSpeed: 0.6,
    },
  },
};

export const divisionSlugs = Object.keys(divisions) as DivisionSlug[];
