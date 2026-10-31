import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DirectionalSculpture from './DirectionalSculpture';

interface Props {
  locale?: string;
}

interface DivisionPanelData {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  capabilities: {
    num: string;
    title: string;
    text: string;
  }[];
  primaryCtaText: string;
  primaryHref: string;
  secondaryCtaText: string;
  secondaryHref: string;
  visualType: 'digital' | 'ai' | 'growth' | 'creative' | 'strategy';
}

const DIVISION_PANELS: DivisionPanelData[] = [
  {
    slug: 'digital',
    number: '01',
    name: 'Moguls Digital',
    eyebrow: 'MOGULS DIGITAL · ENGINEERING & SURFACES',
    headline: 'High-Performance Surfaces. Editorial Authority.',
    description:
      'We architect flagship business websites, responsive applications, and tokenized design systems engineered for speed, conversion clarity, and zero layout shift.',
    capabilities: [
      {
        num: '01',
        title: 'Information architecture',
        text: 'Clear hierarchy and user pathways that establish trust in the first 5 seconds.',
      },
      {
        num: '02',
        title: 'Tokenized design systems',
        text: 'Accessible, modular UI component libraries built for consistency and velocity.',
      },
      {
        num: '03',
        title: 'Production engineering',
        text: 'Clean Astro, React, and TypeScript codebases with 100/100 Core Web Vitals.',
      },
      {
        num: '04',
        title: 'Deployment & stewardship',
        text: 'Zero-downtime CI/CD workflows, technical SEO schema, and proactive maintenance.',
      },
    ],
    primaryCtaText: 'Explore Moguls Digital',
    primaryHref: '/services/digital/',
    secondaryCtaText: 'Start a Digital Project',
    secondaryHref: '/contact/?division=Moguls%20Digital#project-brief',
    visualType: 'digital',
  },
  {
    slug: 'ai',
    number: '02',
    name: 'Moguls AI',
    eyebrow: 'MOGULS AI · SCOPED INTELLIGENCE',
    headline: 'Scoped Intelligence. Human-in-the-Loop Oversight.',
    description:
      'We design practical AI assistants, internal knowledge retrieval (RAG), and operational pipelines built with explicit guardrails, source attribution, and verification gates.',
    capabilities: [
      {
        num: '01',
        title: 'Knowledge indexing (RAG)',
        text: 'Secure indexing of approved company SOPs, manuals, and catalog data.',
      },
      {
        num: '02',
        title: 'Guardrail engineering',
        text: 'Strict refusal boundaries and schema validation preventing hallucinations.',
      },
      {
        num: '03',
        title: 'Review gate workflows',
        text: 'Human sign-off checkpoints for sensitive client communication and transactions.',
      },
      {
        num: '04',
        title: 'Operational monitoring',
        text: 'Telemetry dashboards tracking latency, accuracy benchmarks, and cost efficiency.',
      },
    ],
    primaryCtaText: 'Explore Moguls AI',
    primaryHref: '/services/ai/',
    secondaryCtaText: 'Commission AI Solution',
    secondaryHref: '/contact/?division=Moguls%20AI#project-brief',
    visualType: 'ai',
  },
  {
    slug: 'growth',
    number: '03',
    name: 'Moguls Growth',
    eyebrow: 'MOGULS GROWTH · INTENT & PERFORMANCE',
    headline: 'Intent-Led Search. Measurable Pipeline.',
    description:
      'We connect commercial search intent in Dubai and the GCC with high-converting dedicated service surfaces, local map pack authority, and disciplined paid acquisition.',
    capabilities: [
      {
        num: '01',
        title: 'Commercial search intent',
        text: 'In-depth mapping of high-value buyer queries rather than generic keyword vanity.',
      },
      {
        num: '02',
        title: 'Message-matched funnels',
        text: 'Eliminate bounce rates with focused, single-purpose landing experiences.',
      },
      {
        num: '03',
        title: 'Paid search & social campaigns',
        text: 'Disciplined Google and Meta ad management with negative keyword hygiene.',
      },
      {
        num: '04',
        title: 'Attribution & telemetry',
        text: 'Transparent pipeline analytics connecting ad spend directly to closed deals.',
      },
    ],
    primaryCtaText: 'Explore Moguls Growth',
    primaryHref: '/services/growth/',
    secondaryCtaText: 'Discuss Growth Strategy',
    secondaryHref: '/contact/?division=Moguls%20Growth#project-brief',
    visualType: 'growth',
  },
  {
    slug: 'creative',
    number: '04',
    name: 'Moguls Creative',
    eyebrow: 'MOGULS CREATIVE · BRAND & PRODUCTION',
    headline: 'Brand Identity Systems. High-Caliber Production.',
    description:
      'We define premium brand identities, typographic systems, motion graphics, and content suites that establish undeniable authority and luxury category prestige.',
    capabilities: [
      {
        num: '01',
        title: 'Visual identity & emblems',
        text: 'Original wordmarks, heraldic marks, and symbols crafted for enduring prestige.',
      },
      {
        num: '02',
        title: 'Typographic & color systems',
        text: 'Mathematical layout grids, harmonious palettes, and bilingual font pairings.',
      },
      {
        num: '03',
        title: 'Motion & spatial direction',
        text: 'Refined 3D visual sculpts and fluid interface animations that reward attention.',
      },
      {
        num: '04',
        title: 'Comprehensive brand books',
        text: 'Definitive governance manuals ensuring consistency across all touchpoints.',
      },
    ],
    primaryCtaText: 'Explore Moguls Creative',
    primaryHref: '/services/creative/',
    secondaryCtaText: 'Commission Brand Identity',
    secondaryHref: '/contact/?division=Moguls%20Creative#project-brief',
    visualType: 'creative',
  },
  {
    slug: 'strategy',
    number: '05',
    name: 'Moguls Strategy',
    eyebrow: 'MOGULS STRATEGY · CLARITY & ROADMAPS',
    headline: 'A Clearer Direction. A Stronger Next Move.',
    description:
      'We turn business questions into focused priorities, practical roadmaps, and a clear plan for execution across technology, creative, and commercial positioning.',
    capabilities: [
      {
        num: '01',
        title: 'Research & diagnosis',
        text: 'We uncover root-cause operational friction, market opportunities, and commercial constraints before committing capital.',
      },
      {
        num: '02',
        title: 'Positioning & priorities',
        text: 'We sharpen category differentiation, define your ideal buyer profile, and rank initiatives by commercial impact.',
      },
      {
        num: '03',
        title: 'Roadmap & planning',
        text: 'We translate strategic priorities into phased 30, 60, and 90-day implementation blueprints with clear milestones.',
      },
      {
        num: '04',
        title: 'Execution support',
        text: 'We guide cross-functional delivery across digital, AI, and growth with active governance and QA.',
      },
    ],
    primaryCtaText: 'Explore Moguls Strategy',
    primaryHref: '/services/strategy/',
    secondaryCtaText: 'Inquire with Strategy',
    secondaryHref: '/contact/?division=Moguls%20Strategy#project-brief',
    visualType: 'strategy',
  },
];

export default function DivisionStickyStack({ locale = 'en' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize GSAP ScrollTrigger on client
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Check media query: enable sticky stacking only on desktop screens (> 900px)
    const isDesktop = window.matchMedia('(min-width: 901px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const cards = container.querySelectorAll<HTMLElement>('.division-stack-card');
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, i) => {
      // For all cards except the final one, create scale and dim trigger as next arrives
      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];

        const tween = gsap.to(card, {
          scale: 0.96,
          opacity: 0.76,
          filter: 'brightness(0.78)',
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 85%',
            end: 'top 120px',
            scrub: true,
          },
        });

        if (tween.scrollTrigger) {
          triggers.push(tween.scrollTrigger);
        }
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="division-stack-section"
      aria-labelledby="division-stack-heading"
    >
      <div className="container-wide">
        {/* Editorial Section Introduction */}
        <div className="stack-section-intro">
          <div className="stack-intro-left">
            <span className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden="true" />
              Integrated Architecture
            </span>
            <h2 id="division-stack-heading" className="stack-main-headline">
              Five divisions. One connected vision.
            </h2>
          </div>
          <p className="stack-main-desc">
            Each practice operates as a specialized center of excellence while integrating seamlessly across discovery, design, engineering, and performance marketing.
          </p>
        </div>

        {/* 5 Stacked Sticky Division Cards */}
        <div className="division-cards-container">
          {DIVISION_PANELS.map((panel, idx) => {
            return (
              <article
                key={panel.slug}
                id={`division-card-${panel.slug}`}
                className="division-stack-card"
                style={{ zIndex: idx + 1 }}
                aria-labelledby={`panel-heading-${panel.slug}`}
              >
                <div className="card-inner-grid">
                  {/* Left Column: Substantive Editorial Content */}
                  <div className="card-editorial-col">
                    <div className="card-eyebrow-row">
                      <span className="card-eyebrow-text">{panel.eyebrow}</span>
                    </div>

                    <h3 id={`panel-heading-${panel.slug}`} className="card-headline">
                      {panel.headline}
                    </h3>

                    <p className="card-description">{panel.description}</p>

                    <div className="card-capabilities-stack">
                      {panel.capabilities.map((cap) => (
                        <div key={cap.num} className="card-cap-row">
                          <span className="cap-num">{cap.num}</span>
                          <div className="cap-body">
                            <h4 className="cap-title">{cap.title}</h4>
                            <p className="cap-text">{cap.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="card-actions-row">
                      <a href={`/${locale}${panel.primaryHref}`} className="btn-card-primary">
                        {panel.primaryCtaText} →
                      </a>
                      <a href={`/${locale}${panel.secondaryHref}`} className="btn-card-secondary">
                        {panel.secondaryCtaText}
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Architectural Visual Presentation */}
                  <div className="card-visual-col" aria-hidden="true">
                    {panel.visualType === 'strategy' ? (
                      <div className="visual-strategy-wrapper">
                        <DirectionalSculpture activeStep={0} divisionSlug="strategy" />
                      </div>
                    ) : panel.visualType === 'digital' ? (
                      <div className="blueprint-visual">
                        <div className="blueprint-chrome">
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-title">architecture-preview.ts</span>
                        </div>
                        <div className="blueprint-content">
                          <div className="bp-code-block">
                            <span className="bp-kw">export const</span> <span className="bp-fn">SurfaceEngine</span> = {'{'}
                            <div className="bp-indent">
                              <span className="bp-prop">framework</span>: <span className="bp-str">"Astro + React"</span>,
                              <br />
                              <span className="bp-prop">coreWebVitals</span>: <span className="bp-num">100</span>,
                              <br />
                              <span className="bp-prop">layoutShift</span>: <span className="bp-num">0.00</span>,
                              <br />
                              <span className="bp-prop">bilingualReady</span>: <span className="bp-bool">true</span>,
                              <br />
                              <span className="bp-prop">region</span>: <span className="bp-str">"Dubai / GCC"</span>
                            </div>
                            {'}'};
                          </div>
                          <div className="bp-bars-group">
                            <div className="bp-bar-item">
                              <div className="bp-bar-label"><span>Desktop FCP</span><span>0.38s</span></div>
                              <div className="bp-track"><div className="bp-fill" style={{ width: '92%' }} /></div>
                            </div>
                            <div className="bp-bar-item">
                              <div className="bp-bar-label"><span>Mobile LCP</span><span>0.82s</span></div>
                              <div className="bp-track"><div className="bp-fill" style={{ width: '88%' }} /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : panel.visualType === 'ai' ? (
                      <div className="blueprint-visual">
                        <div className="blueprint-chrome">
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-title">rag-orchestrator.node</span>
                        </div>
                        <div className="blueprint-content">
                          <div className="bp-diagram-flow">
                            <div className="flow-step">
                              <span className="step-tag">INGEST</span>
                              <span className="step-desc">Approved UAE Business SOPs</span>
                            </div>
                            <span className="flow-arrow">↓</span>
                            <div className="flow-step is-highlighted">
                              <span className="step-tag">GUARDRAILS</span>
                              <span className="step-desc">Refusal Rules & Topic Filter</span>
                            </div>
                            <span className="flow-arrow">↓</span>
                            <div className="flow-step">
                              <span className="step-tag">OUTPUT</span>
                              <span className="step-desc">Verified Citation & Human Gate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : panel.visualType === 'growth' ? (
                      <div className="blueprint-visual">
                        <div className="blueprint-chrome">
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-title">funnel-telemetry.dashboard</span>
                        </div>
                        <div className="blueprint-content">
                          <div className="growth-funnel-viz">
                            <div className="funnel-tier" style={{ width: '100%' }}>
                              <span>High-Intent Commercial Search</span>
                              <strong>100%</strong>
                            </div>
                            <div className="funnel-tier" style={{ width: '78%' }}>
                              <span>Dedicated Landing Experience</span>
                              <strong>78%</strong>
                            </div>
                            <div className="funnel-tier" style={{ width: '54%' }}>
                              <span>Qualified Inquiry Submission</span>
                              <strong>54%</strong>
                            </div>
                            <div className="funnel-tier is-active" style={{ width: '38%' }}>
                              <span>Retained Enterprise Contract</span>
                              <strong>38%</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="blueprint-visual">
                        <div className="blueprint-chrome">
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-dot" />
                          <span className="bp-title">design-system-tokens.spec</span>
                        </div>
                        <div className="blueprint-content">
                          <div className="creative-tokens-grid">
                            <div className="token-swatch">
                              <span className="swatch-box" style={{ background: '#141418', border: '1px solid rgba(247,245,240,0.2)' }} />
                              <span className="swatch-name">Ink #141418</span>
                            </div>
                            <div className="token-swatch">
                              <span className="swatch-box" style={{ background: '#7456F2' }} />
                              <span className="swatch-name">Violet #7456F2</span>
                            </div>
                            <div className="token-swatch">
                              <span className="swatch-box" style={{ background: '#EAE4FF' }} />
                              <span className="swatch-name">Lavender #EAE4FF</span>
                            </div>
                            <div className="token-swatch">
                              <span className="swatch-box" style={{ background: '#F7F5F0' }} />
                              <span className="swatch-name">Ivory #F7F5F0</span>
                            </div>
                          </div>
                          <div className="creative-type-scale">
                            <span className="type-sample-lg">Aa — Display Heading</span>
                            <span className="type-sample-md">Body Text — High Readability</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .division-stack-section {
          background-color: var(--color-ink, #141418);
          color: var(--color-ivory, #F7F5F0);
          padding-block: clamp(3.5rem, 6vw, 6rem);
          position: relative;
        }

        .stack-section-intro {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }

        @media (min-width: 900px) {
          .stack-section-intro {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
          .stack-intro-left {
            max-width: 55%;
          }
          .stack-main-desc {
            max-width: 40%;
          }
        }

        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-lavender, #EAE4FF);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background-color: var(--color-violet, #7456F2);
        }

        .stack-main-headline {
          font-family: var(--font-display, serif);
          font-size: clamp(2rem, 3.8vw, 3.25rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--color-ivory, #F7F5F0);
          margin: 0;
        }

        .stack-main-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #8E8D9A;
          margin: 0;
        }

        /* Container for the 5 cards */
        .division-cards-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media (min-width: 901px) {
          .division-cards-container {
            gap: 4rem;
          }
        }

        /* Individual Division Card */
        .division-stack-card {
          width: 100%;
          border-radius: 1.5rem;
          background: #181820;
          border: 1px solid rgba(247, 245, 240, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
          overflow: hidden;
          will-change: transform, opacity, filter;
        }

        /* Desktop Sticky Behavior */
        @media (min-width: 901px) {
          .division-stack-card {
            position: sticky;
            top: 110px; /* Offset below sticky site header (~72px) */
            margin-bottom: 2rem;
            transform-origin: top center;
          }
        }

        @media (max-width: 900px) {
          .division-stack-card {
            position: relative;
            top: auto !important;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
          }
        }

        .card-inner-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: clamp(1.75rem, 3.5vw, 3rem);
          align-items: center;
        }

        @media (min-width: 960px) {
          .card-inner-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3rem;
          }
        }

        /* Editorial Content Column */
        .card-editorial-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .card-eyebrow-text {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #7456F2;
          font-weight: 700;
        }

        .card-headline {
          font-family: var(--font-display, serif);
          font-size: clamp(1.6rem, 2.6vw, 2.35rem);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.015em;
          color: var(--color-ivory, #F7F5F0);
          margin: 0;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #8E8D9A;
          margin: 0;
        }

        .card-capabilities-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.35rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }

        .card-cap-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .cap-num {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 700;
          color: #7456F2;
          margin-top: 0.15rem;
        }

        .cap-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .cap-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--color-ivory, #F7F5F0);
          margin: 0;
        }

        .cap-text {
          font-size: 0.84rem;
          line-height: 1.5;
          color: #8E8D9A;
          margin: 0;
        }

        .card-actions-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .btn-card-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.4rem;
          border-radius: 9999px;
          background-color: #7456F2;
          color: #FFFFFF;
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 180ms ease;
          min-height: 42px;
        }

        .btn-card-primary:hover {
          background-color: #6142e8;
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(116, 86, 242, 0.4);
        }

        .btn-card-secondary {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 600;
          color: #8E8D9A;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .btn-card-secondary:hover {
          color: #F7F5F0;
          text-decoration: underline;
        }

        /* Visual Presentation Column */
        .card-visual-col {
          position: relative;
          width: 100%;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-strategy-wrapper {
          width: 100%;
          height: 360px;
        }

        /* Blueprint styled visual elements */
        .blueprint-visual {
          width: 100%;
          border-radius: 1rem;
          background: #111115;
          border: 1px solid rgba(247, 245, 240, 0.08);
          overflow: hidden;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        .blueprint-chrome {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 0.95rem;
          background: rgba(28, 28, 35, 0.7);
          border-bottom: 1px solid rgba(247, 245, 240, 0.06);
        }

        .bp-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(247, 245, 240, 0.25);
        }

        .bp-title {
          margin-left: 0.5rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.74rem;
          color: #8E8D9A;
        }

        .blueprint-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bp-code-block {
          font-family: var(--font-mono, monospace);
          font-size: 0.82rem;
          line-height: 1.6;
          color: #D6D5DC;
          background: rgba(20, 20, 24, 0.6);
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(247, 245, 240, 0.05);
        }

        .bp-kw { color: #7456F2; font-weight: 600; }
        .bp-fn { color: #EAE4FF; }
        .bp-prop { color: #8E8D9A; }
        .bp-str { color: #B99A62; }
        .bp-num { color: #9A82FC; }
        .bp-bool { color: #7456F2; }
        .bp-indent { padding-left: 1.25rem; margin-block: 0.25rem; }

        .bp-bars-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .bp-bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bp-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.76rem;
          color: #8E8D9A;
        }

        .bp-track {
          width: 100%;
          height: 6px;
          border-radius: 9999px;
          background: rgba(247, 245, 240, 0.08);
          overflow: hidden;
        }

        .bp-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #7456F2 0%, #9A82FC 100%);
        }

        /* AI Diagram */
        .bp-diagram-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .flow-step {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.65rem;
          background: rgba(247, 245, 240, 0.03);
          border: 1px solid rgba(247, 245, 240, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .flow-step.is-highlighted {
          border-color: #7456F2;
          background: rgba(116, 86, 242, 0.1);
        }

        .step-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7456F2;
          font-weight: 700;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--color-ivory, #F7F5F0);
        }

        .flow-arrow {
          color: #7456F2;
          font-size: 1rem;
        }

        /* Growth Funnel */
        .growth-funnel-viz {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .funnel-tier {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background: rgba(247, 245, 240, 0.04);
          border: 1px solid rgba(247, 245, 240, 0.08);
          font-size: 0.84rem;
          color: #8E8D9A;
        }

        .funnel-tier.is-active {
          border-color: #7456F2;
          background: rgba(116, 86, 242, 0.15);
          color: #FFFFFF;
        }

        /* Creative Tokens */
        .creative-tokens-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .token-swatch {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .swatch-box {
          width: 24px;
          height: 24px;
          border-radius: 0.35rem;
        }

        .swatch-name {
          font-size: 0.78rem;
          color: #8E8D9A;
        }

        .creative-type-scale {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(247, 245, 240, 0.06);
        }

        .type-sample-lg {
          font-family: var(--font-display, serif);
          font-size: 1.15rem;
          color: var(--color-ivory, #F7F5F0);
        }

        .type-sample-md {
          font-size: 0.85rem;
          color: #8E8D9A;
        }
      `}</style>
    </section>
  );
}
