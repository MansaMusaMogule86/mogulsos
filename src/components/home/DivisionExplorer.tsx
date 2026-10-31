import React, { useState, useEffect } from 'react';
import { divisions, divisionSlugs, type DivisionSlug } from '../../data/divisions';
import DirectionalSculpture from './DirectionalSculpture';

interface Props {
  locale?: string;
}

interface DivisionRow {
  number: string;
  title: string;
  explanation: string;
}

interface DivisionEditorialData {
  label: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  rows: [DivisionRow, DivisionRow, DivisionRow, DivisionRow];
  ctaLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

const DIVISION_EDITORIAL_CONTENT: Record<DivisionSlug, DivisionEditorialData> = {
  strategy: {
    label: 'MOGULS STRATEGY',
    headlineLine1: 'A clearer direction.',
    headlineLine2: 'A stronger next move.',
    description:
      'We turn business questions into focused priorities, practical roadmaps, and a clear plan for execution.',
    rows: [
      {
        number: '01',
        title: 'Research & diagnosis',
        explanation:
          'We uncover root-cause operational friction, market opportunities, and commercial constraints before committing capital.',
      },
      {
        number: '02',
        title: 'Positioning & priorities',
        explanation:
          'We sharpen category differentiation, define your ideal buyer profile, and rank initiatives by commercial impact.',
      },
      {
        number: '03',
        title: 'Roadmap & planning',
        explanation:
          'We translate strategic priorities into phased 30, 60, and 90-day implementation blueprints with clear milestones.',
      },
      {
        number: '04',
        title: 'Execution support',
        explanation:
          'We guide cross-functional delivery across digital, AI, and growth with active governance and QA.',
      },
    ],
    ctaLabel: 'Explore Moguls Strategy',
    primaryHref: '/services/strategy/',
    secondaryHref: '/services/strategy/digital-transformation/',
  },
  digital: {
    label: 'MOGULS DIGITAL',
    headlineLine1: 'High-performance surfaces.',
    headlineLine2: 'Editorial clarity.',
    description:
      'We architect flagship business websites, responsive applications, and design systems built for speed and commercial conversion.',
    rows: [
      {
        number: '01',
        title: 'Information architecture',
        explanation:
          'We map page hierarchy, buyer journeys, and content structure to eliminate clutter and communicate authority immediately.',
      },
      {
        number: '02',
        title: 'Design system & prototyping',
        explanation:
          'We craft accessible component tokens and interactive clickable prototypes to validate workflows before build.',
      },
      {
        number: '03',
        title: 'Production engineering',
        explanation:
          'We build clean, accessible Astro and React codebases scoring high on Core Web Vitals with zero layout shift.',
      },
      {
        number: '04',
        title: 'Launch & maintenance',
        explanation:
          'We verify redirects, technical SEO schema, and provide ongoing stewardship so your site compounds value.',
      },
    ],
    ctaLabel: 'Explore Moguls Digital',
    primaryHref: '/services/digital/',
    secondaryHref: '/services/digital/website-design/',
  },
  ai: {
    label: 'MOGULS AI',
    headlineLine1: 'Scoped intelligence.',
    headlineLine2: 'Human oversight.',
    description:
      'We design practical AI assistants, internal knowledge search, and workflow automation built with explicit guardrails.',
    rows: [
      {
        number: '01',
        title: 'Opportunity audit & RAG',
        explanation:
          'We identify repetitive operational bottlenecks and index approved company documents for citation-backed retrieval.',
      },
      {
        number: '02',
        title: 'Guardrails & prompt safety',
        explanation:
          'We configure strict topic boundaries and refusal rules so automated systems never overpromise or guess.',
      },
      {
        number: '03',
        title: 'Review queue integration',
        explanation:
          'We place human sign-off gates before any sensitive action, document commit, or external communication executes.',
      },
      {
        title: 'Supervised production rollout',
        number: '04',
        explanation:
          'We benchmark edge cases, monitor latency and token quotas, and train your frontline operations team.',
      },
    ],
    ctaLabel: 'Explore Moguls AI',
    primaryHref: '/services/ai/',
    secondaryHref: '/services/ai/workflow-automation/',
  },
  growth: {
    label: 'MOGULS GROWTH',
    headlineLine1: 'Intent-led search.',
    headlineLine2: 'Measurable pipeline.',
    description:
      'We connect technical SEO, local search authority in Dubai, and paid campaigns with dedicated conversion landing pages.',
    rows: [
      {
        number: '01',
        title: 'Search intent mapping',
        explanation:
          'We align commercial buyer queries with dedicated, substantive service and industry pages rather than thin cards.',
      },
      {
        number: '02',
        title: 'Landing page message match',
        explanation:
          'We eliminate bounce rate by pairing search and social campaigns with fast, single-purpose landing flows.',
      },
      {
        number: '03',
        title: 'Paid search & social acquisition',
        explanation:
          'We manage disciplined Google and Meta campaigns with negative keyword hygiene and structured creative testing.',
      },
      {
        number: '04',
        title: 'Conversion rate optimization',
        explanation:
          'We remove form friction and streamline inquiry handoffs into structured briefs and direct WhatsApp.',
      },
    ],
    ctaLabel: 'Explore Moguls Growth',
    primaryHref: '/services/growth/',
    secondaryHref: '/services/growth/seo/',
  },
  creative: {
    label: 'MOGULS CREATIVE',
    headlineLine1: 'Enduring identity.',
    headlineLine2: 'Art-directed craft.',
    description:
      'We craft distinctive brand identities, executive pitch presentations, motion graphics, and digital brand guidelines.',
    rows: [
      {
        number: '01',
        title: 'Positioning & visual direction',
        explanation:
          'We explore typographic character, surface materiality, and tonal contrast before designing marks.',
      },
      {
        number: '02',
        title: 'Wordmarks & typography systems',
        explanation:
          'We craft optical emblems and disciplined two-font pairings for dark and warm-ivory surfaces.',
      },
      {
        number: '03',
        title: 'Motion graphics & pitch decks',
        explanation:
          'We translate complex commercial narratives into clear, high-retention slides and kinetic explainers.',
      },
      {
        number: '04',
        title: 'Digital brand guidelines',
        explanation:
          'We document exact color tokens, spacing scales, and safe-zone rules to protect visual consistency.',
      },
    ],
    ctaLabel: 'Explore Moguls Creative',
    primaryHref: '/services/creative/',
    secondaryHref: '/services/creative/brand-identity/',
  },
};

export default function DivisionExplorer({ locale = 'en' }: Props) {
  // Default to strategy as requested in the art direction, but allow full division exploration
  const [selectedSlug, setSelectedSlug] = useState<DivisionSlug>('strategy');
  const [activeRow, setActiveRow] = useState<number>(0);

  useEffect(() => {
    const handleHeroSelect = (e: Event) => {
      const custom = e as CustomEvent<{ division?: DivisionSlug }>;
      if (custom.detail?.division && divisions[custom.detail.division]) {
        setSelectedSlug(custom.detail.division);
        setActiveRow(0);
      }
    };
    window.addEventListener('moguls:division-select', handleHeroSelect);
    return () => window.removeEventListener('moguls:division-select', handleHeroSelect);
  }, []);

  const content = DIVISION_EDITORIAL_CONTENT[selectedSlug] || DIVISION_EDITORIAL_CONTENT.strategy;

  return (
    <section
      className="division-showcase-section"
      aria-labelledby="division-showcase-heading"
    >
      <div className="container-wide">
        {/* Division Tab Switcher (Minimal, no gold, selective violet) */}
        <div className="showcase-nav-bar" role="tablist" aria-label="Select agency division">
          {divisionSlugs.map((slug) => {
            const isSelected = slug === selectedSlug;
            const div = divisions[slug];
            return (
              <button
                key={slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`division-showcase-${slug}`}
                onClick={() => {
                  setSelectedSlug(slug);
                  setActiveRow(0);
                }}
                className={`showcase-nav-pill ${isSelected ? 'is-active' : ''}`}
              >
                {div.title}
              </button>
            );
          })}
        </div>

        {/* 2-Column Balanced Composition (40% Editorial / 60% Sculptural Visual) */}
        <div
          className="showcase-layout"
          role="tabpanel"
          id={`division-showcase-${selectedSlug}`}
          aria-labelledby="division-showcase-heading"
        >
          {/* Left Column: Editorial Content (40%) */}
          <div className="showcase-editorial-col">
            <div className="showcase-eyebrow-line">
              <span className="showcase-label">{content.label}</span>
            </div>

            <h2 id="division-showcase-heading" className="showcase-headline">
              <span>{content.headlineLine1}</span>
              <span>{content.headlineLine2}</span>
            </h2>

            <p className="showcase-description">{content.description}</p>

            {/* Four Compact Numbered Text Rows with Fine Separators */}
            <div
              className="showcase-rows-stack"
              role="region"
              aria-label={`${content.label} focus phases`}
            >
              {content.rows.map((row, index) => {
                const isActive = activeRow === index;
                return (
                  <div
                    key={row.number}
                    className={`showcase-row-item ${isActive ? 'is-active' : ''}`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveRow(index)}
                    onFocus={() => setActiveRow(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveRow(index);
                      }
                    }}
                  >
                    <div className="row-header">
                      <span className="row-number">{row.number}</span>
                      <h3 className="row-title">{row.title}</h3>
                    </div>
                    <p className="row-explanation">{row.explanation}</p>
                  </div>
                );
              })}
            </div>

            {/* Actions: Primary CTA and secondary inquiry */}
            <div className="showcase-cta-group">
              <a href={`/${locale}${content.primaryHref}`} className="btn-showcase-cta">
                {content.ctaLabel}
              </a>
              <a
                href={`/${locale}/contact/?division=${encodeURIComponent(
                  divisions[selectedSlug].title
                )}#project-brief`}
                className="showcase-secondary-link"
              >
                Inquire with {divisions[selectedSlug].shortLabel} →
              </a>
            </div>
          </div>

          {/* Right Column: Original Open Sculptural Composition (60%) */}
          <div
            className="showcase-visual-col"
            aria-label="Sculptural visualization of layered translucent planes aligning into a clear direction"
          >
            <DirectionalSculpture activeStep={activeRow} divisionSlug={selectedSlug} />
          </div>
        </div>
      </div>

      <style>{`
        .division-showcase-section {
          background-color: #141418;
          color: #F7F5F0;
          padding-block: clamp(3.5rem, 6.5vw, 6rem);
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
          position: relative;
          overflow: hidden;
        }

        /* Minimal Division Pill Bar */
        .showcase-nav-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: clamp(2rem, 4vw, 3.25rem);
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
        }

        .showcase-nav-pill {
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(247, 245, 240, 0.12);
          color: #8E8D9A;
          font-family: var(--font-display, sans-serif);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 180ms ease;
          min-height: 38px;
        }

        .showcase-nav-pill:hover {
          color: #F7F5F0;
          border-color: rgba(116, 86, 242, 0.45);
        }

        .showcase-nav-pill.is-active {
          color: #F7F5F0;
          background: rgba(116, 86, 242, 0.16);
          border-color: #7456F2;
        }

        /* 2-Column Responsive Layout */
        .showcase-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: center;
        }

        @media (min-width: 980px) {
          .showcase-layout {
            grid-template-columns: 38fr 62fr;
          }
        }

        /* Editorial Left Column */
        .showcase-editorial-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          z-index: 2;
        }

        .showcase-eyebrow-line {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .showcase-label {
          font-family: var(--font-display, sans-serif);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #7456F2;
        }

        .showcase-headline {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 3.4vw, 3rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #F7F5F0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .showcase-description {
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          line-height: 1.6;
          color: #8E8D9A;
          margin: 0;
          max-width: 44ch;
        }

        /* Four Numbered Text Rows with Fine Separators */
        .showcase-rows-stack {
          display: flex;
          flex-direction: column;
          margin-top: 0.75rem;
          border-top: 1px solid rgba(247, 245, 240, 0.1);
        }

        .showcase-row-item {
          padding-block: 1rem;
          border-bottom: 1px solid rgba(247, 245, 240, 0.1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          transition: all 180ms ease;
          position: relative;
          outline: none;
        }

        .showcase-row-item:hover,
        .showcase-row-item:focus-visible {
          background: rgba(116, 86, 242, 0.04);
          padding-left: 0.5rem;
        }

        .showcase-row-item:focus-visible {
          outline: 1px solid #7456F2;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .showcase-row-item.is-active {
          padding-left: 0.5rem;
        }

        .showcase-row-item.is-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.85rem;
          bottom: 0.85rem;
          width: 2px;
          background-color: #7456F2;
          border-radius: 999px;
        }

        .row-header {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .row-number {
          font-family: var(--font-display, sans-serif);
          font-size: 0.75rem;
          font-weight: 700;
          color: #8E8D9A;
          letter-spacing: 0.06em;
          transition: color 180ms ease;
        }

        .showcase-row-item.is-active .row-number {
          color: #7456F2;
        }

        .row-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.05rem;
          font-weight: 650;
          color: #F7F5F0;
          margin: 0;
          line-height: 1.3;
          transition: color 180ms ease;
        }

        .showcase-row-item.is-active .row-title {
          color: #FFFFFF;
        }

        .row-explanation {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #8E8D9A;
          margin: 0;
          padding-left: 1.65rem;
        }

        .showcase-row-item.is-active .row-explanation {
          color: #b0aebf;
        }

        /* Action Buttons */
        .showcase-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .btn-showcase-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          background-color: #7456F2;
          color: #FFFFFF;
          font-family: var(--font-display, sans-serif);
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
          min-height: 44px;
        }

        .btn-showcase-cta:hover {
          background-color: #6142e8;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px -6px rgba(116, 86, 242, 0.5);
        }

        .showcase-secondary-link {
          font-family: var(--font-display, sans-serif);
          font-size: 0.9rem;
          font-weight: 600;
          color: #8E8D9A;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .showcase-secondary-link:hover {
          color: #F7F5F0;
          text-decoration: underline;
        }

        /* Right Column: Open Visual, No visible enclosing card! */
        .showcase-visual-col {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          box-shadow: none;
          overflow: visible;
        }

        /* Mobile Adjustments: Stack content first, visual second, reduced height */
        @media (max-width: 979px) {
          .showcase-visual-col {
            order: 2;
            margin-top: 0.5rem;
          }
          .showcase-editorial-col {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
