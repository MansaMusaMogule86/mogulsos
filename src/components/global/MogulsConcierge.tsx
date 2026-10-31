import React, { useState, useEffect, useRef } from 'react';

interface ConciergePath {
  id: string;
  label: string;
  subtitle: string;
  division: string;
  divisionTitle: string;
  divisionHref: string;
  intro: string;
  subOptions: {
    id: string;
    label: string;
    summary: string;
    recommendedService: string;
    serviceHref: string;
    deliverables: string[];
  }[];
}

const CONCIERGE_PATHS: ConciergePath[] = [
  {
    id: 'website-app',
    label: 'Website or application',
    subtitle: 'Business websites, redesigns, e-commerce, and custom web/mobile interfaces',
    division: 'digital',
    divisionTitle: 'Moguls Digital',
    divisionHref: '/en/services/digital/',
    intro: 'Moguls Digital architects fast, editorial websites and product interfaces tailored for commercial clarity in Dubai and international markets.',
    subOptions: [
      {
        id: 'new-business-site',
        label: 'A new flagship business website',
        summary: 'Commission a custom-designed, high-performance business website with structured service positioning and lead capture.',
        recommendedService: 'Website Design',
        serviceHref: '/en/services/digital/website-design/',
        deliverables: ['Information architecture & copy structure', 'Responsive design system', 'Production Astro/Next.js build & SEO setup'],
      },
      {
        id: 'redesign-rebuild',
        label: 'A website redesign or technical rebuild',
        summary: 'Replace an outdated or slow website with a modern editorial layout, clean code, and preserved search equity.',
        recommendedService: 'Website Development',
        serviceHref: '/en/services/digital/website-development/',
        deliverables: ['URL & redirect preservation map', 'Visual and UX overhaul', 'Core Web Vitals performance optimization'],
      },
      {
        id: 'app-ui-prototype',
        label: 'An application interface or clickable prototype',
        summary: 'Design intuitive web/mobile application workflows, interactive Figma prototypes, and component libraries.',
        recommendedService: 'UI/UX Design',
        serviceHref: '/en/services/digital/ui-ux-design/',
        deliverables: ['User journey & screen architecture', 'Interactive clickable prototype', 'Developer-ready design system tokens'],
      },
      {
        id: 'ecommerce-store',
        label: 'An e-commerce storefront',
        summary: 'Build a conversion-focused online store with structured product discovery and regional checkout readiness.',
        recommendedService: 'E-commerce Development',
        serviceHref: '/en/services/digital/ecommerce/',
        deliverables: ['Catalog & filter architecture', 'Mobile-first product & checkout UX', 'Inventory & payment gateway scoping'],
      },
    ],
  },
  {
    id: 'ai-automation',
    label: 'AI and automation',
    subtitle: 'Customer assistants, workflow automation, knowledge search, and document review',
    division: 'ai',
    divisionTitle: 'Moguls AI',
    divisionHref: '/en/services/ai/',
    intro: 'Moguls AI designs practical, human-supervised AI assistants, internal search systems, and workflow automations scoped around your real operations.',
    subOptions: [
      {
        id: 'customer-assistant',
        label: 'Website or WhatsApp customer assistant',
        summary: 'Deploy a scoped assistant for inquiry qualification, FAQ resolution, and structured human handoff.',
        recommendedService: 'AI Chatbots',
        serviceHref: '/en/services/ai/ai-chatbots/',
        deliverables: ['Approved knowledge base grounding', 'Guardrails & escalation rules', 'Human-in-the-loop handoff workflow'],
      },
      {
        id: 'workflow-auto',
        label: 'Internal workflow automation',
        summary: 'Automate repetitive multi-step tasks across forms, documents, notifications, and internal tools.',
        recommendedService: 'Workflow Automation',
        serviceHref: '/en/services/ai/workflow-automation/',
        deliverables: ['Process bottleneck mapping', 'Scoped integration architecture', 'Exception handling & human review checkpoints'],
      },
      {
        id: 'knowledge-doc',
        label: 'Internal knowledge search or document extraction',
        summary: 'Enable teams to search SOPs, contracts, and proposals with source citations and structured extraction.',
        recommendedService: 'AI Knowledge Bases and RAG',
        serviceHref: '/en/services/ai/knowledge-bases/',
        deliverables: ['Document ingestion & chunking pipeline', 'Citation-backed retrieval interface', 'Role-based access & review controls'],
      },
      {
        id: 'ai-advisory',
        label: 'AI implementation consulting',
        summary: 'Evaluate where AI adds measurable operational value before committing engineering budget.',
        recommendedService: 'AI Strategy and Consulting',
        serviceHref: '/en/services/ai/ai-consulting/',
        deliverables: ['Use-case feasibility & ROI assessment', 'Data readiness & governance review', 'Phased pilot implementation roadmap'],
      },
    ],
  },
  {
    id: 'marketing-social',
    label: 'Marketing and social',
    subtitle: 'SEO, local search, paid campaigns, content planning, and conversion improvement',
    division: 'growth',
    divisionTitle: 'Moguls Growth',
    divisionHref: '/en/services/growth/',
    intro: 'Moguls Growth connects search visibility, paid acquisition, social management, and landing page conversion into a disciplined commercial engine.',
    subOptions: [
      {
        id: 'seo-local',
        label: 'SEO and Dubai local search visibility',
        summary: 'Improve organic rankings, technical site health, and local map visibility for high-intent searches.',
        recommendedService: 'Search Engine Optimization',
        serviceHref: '/en/services/growth/seo/',
        deliverables: ['Technical SEO & schema implementation', 'Search intent & content plan', 'Local search & profile optimization'],
      },
      {
        id: 'paid-campaigns',
        label: 'Paid search and social campaign management',
        summary: 'Run structured Google and Meta campaigns paired with dedicated landing pages and clear attribution.',
        recommendedService: 'Paid Media Strategy',
        serviceHref: '/en/services/growth/paid-media/',
        deliverables: ['Channel & audience architecture', 'Campaign creative & copy testing', 'Conversion tracking & reporting cadence'],
      },
      {
        id: 'conversion-cro',
        label: 'Conversion rate and funnel improvement',
        summary: 'Remove friction across landing pages, inquiry forms, and lead follow-up sequences.',
        recommendedService: 'Conversion Rate Optimization',
        serviceHref: '/en/services/growth/conversion-optimization/',
        deliverables: ['Funnel drop-off audit', 'Landing page & form restructuring', 'Experimentation & measurement plan'],
      },
    ],
  },
  {
    id: 'brand-creative',
    label: 'Brand and creative',
    subtitle: 'Brand identity, art direction, visual systems, motion, and presentation design',
    division: 'creative',
    divisionTitle: 'Moguls Creative',
    divisionHref: '/en/services/creative/',
    intro: 'Moguls Creative crafts distinctive visual identities, digital brand guidelines, campaign assets, and executive presentations.',
    subOptions: [
      {
        id: 'identity-system',
        label: 'Complete brand identity and guidelines',
        summary: 'Establish a cohesive visual system across typography, color, marks, and digital brand standards.',
        recommendedService: 'Brand Identity',
        serviceHref: '/en/services/creative/brand-identity/',
        deliverables: ['Visual identity & mark system', 'Typography & color tokens', 'Digital brand guidelines handbook'],
      },
      {
        id: 'pitch-presentation',
        label: 'Executive presentation or pitch deck design',
        summary: 'Transform complex commercial narratives into clear, persuasive investor or sales presentations.',
        recommendedService: 'Presentation and Pitch Design',
        serviceHref: '/en/services/creative/presentation-design/',
        deliverables: ['Narrative structure & slide pacing', 'Custom data & architecture visuals', 'Editable master deck templates'],
      },
      {
        id: 'social-motion',
        label: 'Social creative and motion graphics',
        summary: 'Produce consistent editorial social assets, short-form motion graphics, and campaign visuals.',
        recommendedService: 'Motion Design',
        serviceHref: '/en/services/creative/motion-design/',
        deliverables: ['Campaign visual direction', 'Motion graphics & product explainers', 'Multi-format social asset toolkit'],
      },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy',
    subtitle: 'Digital transformation, positioning, go-to-market, and automation roadmaps',
    division: 'strategy',
    divisionTitle: 'Moguls Strategy',
    divisionHref: '/en/services/strategy/',
    intro: 'Moguls Strategy partners with leadership teams to clarify market positioning, scope digital transformation, and sequence technology investments.',
    subOptions: [
      {
        id: 'digital-roadmap',
        label: 'Digital transformation or automation roadmap',
        summary: 'Audit current workflows and systems to define a realistic, phased technology and automation plan.',
        recommendedService: 'Digital Transformation',
        serviceHref: '/en/services/strategy/digital-transformation/',
        deliverables: ['Current-state systems & workflow audit', 'Target architecture blueprint', 'Prioritized 90-day implementation roadmap'],
      },
      {
        id: 'gtm-positioning',
        label: 'Brand positioning or UAE market entry',
        summary: 'Define competitive differentiation, audience segmentation, and go-to-market execution in Dubai.',
        recommendedService: 'Go to Market Strategy',
        serviceHref: '/en/services/strategy/go-to-market/',
        deliverables: ['Competitive & sector landscape analysis', 'Value proposition & positioning matrix', 'Channel & launch sequencing plan'],
      },
      {
        id: 'revops-audit',
        label: 'Business, funnel, and revenue operations review',
        summary: 'Align marketing, sales handoffs, and customer experience around measurable commercial stages.',
        recommendedService: 'Revenue Operations',
        serviceHref: '/en/services/strategy/revenue-operations/',
        deliverables: ['Lead-to-client journey mapping', 'Pipeline stage & SLA definitions', 'Reporting & operational playbook'],
      },
    ],
  },
  {
    id: 'explore-services',
    label: 'Explore services',
    subtitle: 'Browse all five divisions and 70 specialized capabilities',
    division: 'all',
    divisionTitle: 'All Five Divisions',
    divisionHref: '/en/services/',
    intro: 'Mansas Moguls operates across five connected divisions so strategy, brand, product engineering, AI, and growth work together under one roof.',
    subOptions: [
      {
        id: 'browse-all',
        label: 'View the complete Services Directory',
        summary: 'Compare capabilities across Moguls Digital, Moguls AI, Moguls Growth, Moguls Creative, and Moguls Strategy.',
        recommendedService: 'All Services Overview',
        serviceHref: '/en/services/',
        deliverables: ['5 integrated divisions', '70 specialized service scopes', 'Flexible standalone or multi-division engagements'],
      },
      {
        id: 'how-we-work',
        label: 'Learn how we scope and deliver projects',
        summary: 'Review our four-stage methodology: Discover, Design, Build, and Launch & Support.',
        recommendedService: 'Our Process',
        serviceHref: '/en/process/',
        deliverables: ['Structured discovery & scoping', 'Design & prototype validation', 'Production delivery & post-launch support'],
      },
    ],
  },
];

export default function MogulsConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const activePath = CONCIERGE_PATHS.find((p) => p.id === selectedPathId) || null;
  const activeSub = activePath?.subOptions.find((s) => s.id === selectedSubId) || null;

  useEffect(() => {
    const handleTriggerClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-open-concierge]');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleTriggerClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleTriggerClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const firstBtn = dialogRef.current?.querySelector('button, a') as HTMLElement | null;
        firstBtn?.focus();
      }, 50);
    }
  }, [isOpen, selectedPathId, selectedSubId]);

  const handleBack = () => {
    if (selectedSubId) {
      setSelectedSubId(null);
    } else if (selectedPathId) {
      setSelectedPathId(null);
    }
  };

  const handleRestart = () => {
    setSelectedPathId(null);
    setSelectedSubId(null);
    setCopied(false);
  };

  const buildBriefSummary = () => {
    if (!activePath || !activeSub) return '';
    return `Moguls Concierge Brief:\n- Division: ${activePath.divisionTitle}\n- Focus: ${activeSub.label}\n- Recommended Service: ${activeSub.recommendedService}\n- Key Priorities: ${activeSub.deliverables.join('; ')}`;
  };

  const handleCopyBrief = async () => {
    const text = buildBriefSummary();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback copy handled silently
    }
  };

  const buildContactHref = () => {
    if (!activePath || !activeSub) return '/en/contact/#project-brief';
    const params = new URLSearchParams({
      division: activePath.divisionTitle,
      service: activeSub.recommendedService,
      summary: buildBriefSummary(),
    });
    return `/en/contact/?${params.toString()}#project-brief`;
  };

  return (
    <>
      {/* Floating Launcher */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 70,
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="moguls-concierge-panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.75rem 1.2rem',
            borderRadius: '9999px',
            backgroundColor: '#141418',
            color: '#F7F5F0',
            border: '1px solid rgba(185, 154, 98, 0.55)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            minHeight: '46px',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '999px',
              backgroundColor: '#7456F2',
              boxShadow: '0 0 0 3px rgba(116, 86, 242, 0.28)',
            }}
          />
          <span>Moguls Concierge</span>
        </button>
      </div>

      {/* Modal / Guided Assistant Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concierge-title"
          id="moguls-concierge-panel"
          ref={dialogRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            backgroundColor: 'rgba(12, 12, 16, 0.72)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: '1rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            style={{
              width: 'min(500px, 100%)',
              maxHeight: 'min(680px, calc(100dvh - 2rem))',
              backgroundColor: '#18181f',
              color: '#F7F5F0',
              border: '1px solid rgba(247, 245, 240, 0.16)',
              borderRadius: '1.25rem',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.15rem 1.35rem',
                borderBottom: '1px solid rgba(247, 245, 240, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                backgroundColor: '#141418',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#B99A62',
                    fontWeight: 600,
                  }}
                >
                  <span>Local Guided Assistant</span>
                </div>
                <h2
                  id="concierge-title"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    margin: '0.15rem 0 0',
                    color: '#F7F5F0',
                  }}
                >
                  Moguls Concierge
                </h2>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                {(selectedPathId || selectedSubId) && (
                  <>
                    <button
                      type="button"
                      onClick={handleBack}
                      style={{
                        padding: '0.4rem 0.7rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(247, 245, 240, 0.16)',
                        background: 'rgba(247, 245, 240, 0.05)',
                        color: '#F7F5F0',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleRestart}
                      style={{
                        padding: '0.4rem 0.7rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(247, 245, 240, 0.16)',
                        background: 'rgba(247, 245, 240, 0.05)',
                        color: '#F7F5F0',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      Restart
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Moguls Concierge"
                  style={{
                    padding: '0.4rem 0.7rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(247, 245, 240, 0.16)',
                    background: 'rgba(247, 245, 240, 0.05)',
                    color: '#F7F5F0',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                  }}
                >
                  Close ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              style={{
                padding: '1.35rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Step 1: Root 6 Choices */}
              {!activePath && (
                <>
                  <p style={{ margin: 0, fontSize: '0.925rem', color: '#c8c6d4', lineHeight: 1.55 }}>
                    Select an area below to explore curated capabilities, division links, and prepare a structured project brief.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {CONCIERGE_PATHS.map((path) => (
                      <button
                        key={path.id}
                        type="button"
                        onClick={() => setSelectedPathId(path.id)}
                        style={{
                          textAlign: 'left',
                          padding: '0.9rem 1rem',
                          borderRadius: '0.85rem',
                          backgroundColor: 'rgba(247, 245, 240, 0.04)',
                          border: '1px solid rgba(247, 245, 240, 0.12)',
                          color: '#F7F5F0',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 650, fontSize: '0.95rem', color: '#F7F5F0' }}>
                            {path.label}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#a8a6b5', marginTop: '0.2rem' }}>
                            {path.subtitle}
                          </div>
                        </div>
                        <span style={{ color: '#7456F2', fontWeight: 700, fontSize: '1.05rem' }} aria-hidden="true">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Step 2: Sub-options within selected path */}
              {activePath && !activeSub && (
                <>
                  <div
                    style={{
                      padding: '0.9rem 1rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(116, 86, 242, 0.12)',
                      border: '1px solid rgba(116, 86, 242, 0.32)',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#EAE4FF', fontWeight: 600 }}>
                      {activePath.divisionTitle}
                    </div>
                    <p style={{ margin: '0.3rem 0 0', fontSize: '0.875rem', color: '#F7F5F0', lineHeight: 1.5 }}>
                      {activePath.intro}
                    </p>
                  </div>

                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#b4b2c0', fontWeight: 600 }}>
                    What best describes your immediate priority?
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {activePath.subOptions.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedSubId(sub.id)}
                        style={{
                          textAlign: 'left',
                          padding: '0.9rem 1rem',
                          borderRadius: '0.85rem',
                          backgroundColor: 'rgba(247, 245, 240, 0.04)',
                          border: '1px solid rgba(247, 245, 240, 0.12)',
                          color: '#F7F5F0',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontWeight: 650, fontSize: '0.925rem', color: '#F7F5F0' }}>
                          {sub.label}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#a8a6b5', marginTop: '0.25rem', lineHeight: 1.45 }}>
                          {sub.summary}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div style={{ paddingTop: '0.4rem' }}>
                    <a
                      href={activePath.divisionHref}
                      style={{
                        fontSize: '0.85rem',
                        color: '#EAE4FF',
                        textDecoration: 'underline',
                      }}
                    >
                      Explore {activePath.divisionTitle} overview →
                    </a>
                  </div>
                </>
              )}

              {/* Step 3: Curated Recommendation & Brief Handoff */}
              {activePath && activeSub && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      padding: '1.1rem',
                      borderRadius: '0.9rem',
                      backgroundColor: 'rgba(247, 245, 240, 0.05)',
                      border: '1px solid rgba(185, 154, 98, 0.4)',
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B99A62', fontWeight: 600 }}>
                      Suggested Starting Point · {activePath.divisionTitle}
                    </div>
                    <h3 style={{ margin: '0.35rem 0 0.45rem', fontSize: '1.15rem', color: '#F7F5F0' }}>
                      {activeSub.recommendedService}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#d0cedb', lineHeight: 1.55 }}>
                      {activeSub.summary}
                    </p>

                    <div style={{ marginTop: '0.85rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#EAE4FF', marginBottom: '0.4rem' }}>
                        Typical Scope Deliverables:
                      </div>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.825rem', color: '#c4c2d0', lineHeight: 1.6 }}>
                        {activeSub.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    <a
                      href={buildContactHref()}
                      className="btn btn-primary"
                      style={{ width: '100%', textAlign: 'center' }}
                      onClick={() => setIsOpen(false)}
                    >
                      Transfer to Project Brief Form →
                    </a>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }}>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="btn btn-secondary-dark"
                        style={{ fontSize: '0.82rem', padding: '0.65rem 0.8rem' }}
                      >
                        {copied ? 'Brief Copied ✓' : 'Copy Brief Summary'}
                      </button>
                      <a
                        href={activeSub.serviceHref}
                        className="btn btn-secondary-dark"
                        style={{ fontSize: '0.82rem', padding: '0.65rem 0.8rem', textAlign: 'center' }}
                      >
                        View Service Page
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer disclosure */}
            <div
              style={{
                padding: '0.75rem 1.35rem',
                borderTop: '1px solid rgba(247, 245, 240, 0.08)',
                backgroundColor: '#141418',
                fontSize: '0.73rem',
                color: '#8e8c99',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Curated local guide · No personal data stored</span>
              <a href="/en/contact/" style={{ color: '#EAE4FF', textDecoration: 'none' }}>
                Direct Contact →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

