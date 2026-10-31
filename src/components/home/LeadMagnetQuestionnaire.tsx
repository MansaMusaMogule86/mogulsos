import React, { useState } from 'react';

interface Props {
  locale?: string;
}

type PathKey =
  | 'new-website'
  | 'website-redesign'
  | 'application-experience'
  | 'ai-automation'
  | 'marketing-social'
  | 'strategy-review';

interface PathRecommendation {
  key: PathKey;
  label: string;
  division: string;
  startingPointTitle: string;
  serviceSlug: string;
  serviceHref: string;
  rationale: string;
  nextSteps: [string, string, string];
}

const PATH_OPTIONS: PathRecommendation[] = [
  {
    key: 'new-website',
    label: 'A new website.',
    division: 'Moguls Digital',
    startingPointTitle: 'Flagship Business Website Architecture & Build',
    serviceSlug: 'Website Design',
    serviceHref: '/en/services/digital/website-design/',
    rationale:
      'Establish a clear commercial presence in Dubai with bespoke editorial layout, fast load performance, structured service hierarchy, and direct lead handoff.',
    nextSteps: [
      'Define your core service offerings, target customer profiles, and primary inquiry actions.',
      'Establish a cohesive typography, color, and responsive page blueprint before development.',
      'Launch on a fast static/hybrid architecture with technical SEO and local search schema.',
    ],
  },
  {
    key: 'website-redesign',
    label: 'A website redesign.',
    division: 'Moguls Digital',
    startingPointTitle: 'Website Redesign & Technical Rebuild',
    serviceSlug: 'Website Development',
    serviceHref: '/en/services/digital/website-development/',
    rationale:
      'Upgrade visual authority, mobile usability, and conversion flow while preserving existing URL rankings and search equity through a structured redirect plan.',
    nextSteps: [
      'Inventory current URLs, high-traffic pages, and conversion bottlenecks to protect search visibility.',
      'Restructure navigation and service pages around clear commercial buyer questions.',
      'Rebuild with clean component code, responsive testing, and Core Web Vitals optimization.',
    ],
  },
  {
    key: 'application-experience',
    label: 'An application experience.',
    division: 'Moguls Digital',
    startingPointTitle: 'Application UI/UX & Interactive Prototype Sprint',
    serviceSlug: 'UI/UX Design',
    serviceHref: '/en/services/digital/ui-ux-design/',
    rationale:
      'De-risk product engineering by validating user journeys, permissions, and screen states in an interactive clickable prototype and tokenized design system.',
    nextSteps: [
      'Map core user roles, task flows, and edge-case states before committing backend engineering.',
      'Build an interactive Figma prototype to test usability with stakeholders and pilot users.',
      'Deliver a documented component library and API integration specification for production build.',
    ],
  },
  {
    key: 'ai-automation',
    label: 'An AI assistant or automation.',
    division: 'Moguls AI',
    startingPointTitle: 'Scoped AI Assistant & Workflow Automation Pilot',
    serviceSlug: 'Workflow Automation',
    serviceHref: '/en/services/ai/workflow-automation/',
    rationale:
      'Start with a tightly scoped, high-value operational workflow or customer assistant grounded in approved documents, with human review checkpoints for key decisions.',
    nextSteps: [
      'Select one repeatable bottleneck (lead qualification, FAQ triage, or document extraction) for a pilot.',
      'Curate the approved source documentation and define explicit escalation and human review rules.',
      'Validate accuracy in a staging environment before connecting external channels or CRM handoffs.',
    ],
  },
  {
    key: 'marketing-social',
    label: 'Marketing and social support.',
    division: 'Moguls Growth',
    startingPointTitle: 'Integrated Search, Paid Media & Content Program',
    serviceSlug: 'Paid Media Strategy',
    serviceHref: '/en/services/growth/paid-media/',
    rationale:
      'Pair targeted SEO, local search visibility in Dubai, and paid social/search campaigns with dedicated conversion landing pages so media spend generates qualified inquiries.',
    nextSteps: [
      'Align campaign landing pages and inquiry capture before scaling paid ad budgets.',
      'Establish foundational technical SEO, local map profiles, and editorial content pillars.',
      'Launch structured creative testing across search and social with transparent conversion reporting.',
    ],
  },
  {
    key: 'strategy-review',
    label: 'A strategy review.',
    division: 'Moguls Strategy',
    startingPointTitle: 'Digital Transformation & Commercial Strategy Diagnostic',
    serviceSlug: 'Digital Transformation',
    serviceHref: '/en/services/strategy/digital-transformation/',
    rationale:
      'Clarify positioning, evaluate technology options, and sequence your 90-day roadmap before committing capital across multiple vendors or tools.',
    nextSteps: [
      'Audit current customer touchpoints, internal workflows, and revenue operations friction.',
      'Define positioning differentiation and prioritize initiatives by commercial impact vs. effort.',
      'Deliver an actionable 90-day implementation roadmap across brand, digital, AI, and growth.',
    ],
  },
];

const STAGE_OPTIONS = [
  'Launching a new venture or market entry in Dubai',
  'Upgrading an established business that has outgrown its current setup',
  'Expanding capabilities with new digital products or automation',
  'Improving lead quality and commercial conversion efficiency',
];

const PRIORITY_OPTIONS = [
  'Credibility, brand authority, and clearer positioning',
  'More qualified client inquiries and stronger conversion',
  'Reducing manual team workload through structured workflows',
  'Launching a customer-facing portal, store, or application',
];

const TIMELINE_OPTIONS = [
  'Immediate priority (starting within 2–4 weeks)',
  'Planned for this quarter (1–3 months)',
  'Scoping and budgeting for an upcoming phase',
];

const ENGAGEMENT_OPTIONS = [
  'End-to-end delivery (strategy, design, and build)',
  'Design, prototype, or strategy blueprint only',
  'Phased pilot starting with one focused deliverable',
];

export default function LeadMagnetQuestionnaire({ locale = 'en' }: Props) {
  const [selectedPath, setSelectedPath] = useState<PathKey>('new-website');
  const [stage, setStage] = useState<string>(STAGE_OPTIONS[1]);
  const [priority, setPriority] = useState<string>(PRIORITY_OPTIONS[0]);
  const [timeline, setTimeline] = useState<string>(TIMELINE_OPTIONS[0]);
  const [engagement, setEngagement] = useState<string>(ENGAGEMENT_OPTIONS[0]);
  const [copied, setCopied] = useState<boolean>(false);

  const rec = PATH_OPTIONS.find((p) => p.key === selectedPath) || PATH_OPTIONS[0];

  const generatePlainSummary = () => {
    return [
      `Mansas Moguls — Initial Project Guide`,
      `1. Primary Focus: ${rec.label} (${rec.division})`,
      `2. Current Business Context: ${stage}`,
      `3. Top Priority: ${priority}`,
      `4. Target Timeline: ${timeline}`,
      `5. Engagement Preference: ${engagement}`,
      `Suggested Starting Point: ${rec.startingPointTitle}`,
      `Recommended Next Steps:`,
      `- ${rec.nextSteps[0]}`,
      `- ${rec.nextSteps[1]}`,
      `- ${rec.nextSteps[2]}`,
    ].join('\n');
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(generatePlainSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback handled gracefully
    }
  };

  const buildDiscussHref = () => {
    const params = new URLSearchParams({
      division: rec.division,
      service: rec.serviceSlug,
      timeline,
      summary: generatePlainSummary(),
    });
    return `/${locale}/contact/?${params.toString()}#project-brief`;
  };

  return (
    <section className="section-dark lead-magnet-section" aria-labelledby="lead-magnet-heading">
      <div className="container-wide">
        <div className="lm-header">
          <div>
            <span className="eyebrow-label" style={{ color: '#B99A62' }}>
              Interactive Planning Tool
            </span>
            <h2 id="lead-magnet-heading" className="section-heading" style={{ marginTop: '0.55rem' }}>
              What should your business build next?
            </h2>
          </div>
          <p className="lm-intro">
            Answer five quick questions to generate a tailored initial project guide, recommended starting point, and three practical next steps you can copy or bring directly into a project conversation.
          </p>
        </div>

        <div className="lm-grid">
          {/* Left Column: 5 Focused Questions */}
          <div className="lm-questions-card">
            {/* Q1: Primary Path */}
            <div className="lm-q-block">
              <label className="lm-q-label">
                <span className="q-num">01</span>
                <span>Which path best matches what you want to build or improve?</span>
              </label>
              <div className="lm-path-grid" role="radiogroup" aria-label="Primary project path">
                {PATH_OPTIONS.map((opt) => {
                  const active = opt.key === selectedPath;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setSelectedPath(opt.key)}
                      className={`lm-path-btn ${active ? 'is-active' : ''}`}
                    >
                      <span>{opt.label}</span>
                      <small>{opt.division}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Q2: Business Context */}
            <div className="lm-q-block">
              <label htmlFor="lm-q2-stage" className="lm-q-label">
                <span className="q-num">02</span>
                <span>What best describes your current business stage?</span>
              </label>
              <select
                id="lm-q2-stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="lm-select"
              >
                {STAGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Q3: Operational Priority */}
            <div className="lm-q-block">
              <label htmlFor="lm-q3-priority" className="lm-q-label">
                <span className="q-num">03</span>
                <span>What is the most important outcome for this initiative?</span>
              </label>
              <select
                id="lm-q3-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="lm-select"
              >
                {PRIORITY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Q4 & Q5 side-by-side */}
            <div className="lm-two-col">
              <div className="lm-q-block">
                <label htmlFor="lm-q4-timeline" className="lm-q-label">
                  <span className="q-num">04</span>
                  <span>Target timeline</span>
                </label>
                <select
                  id="lm-q4-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="lm-select"
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lm-q-block">
                <label htmlFor="lm-q5-engagement" className="lm-q-label">
                  <span className="q-num">05</span>
                  <span>Preferred scope model</span>
                </label>
                <select
                  id="lm-q5-engagement"
                  value={engagement}
                  onChange={(e) => setEngagement(e.target.value)}
                  className="lm-select"
                >
                  {ENGAGEMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Live Initial Guide & Summary Handoff */}
          <div className="lm-result-card" aria-live="polite">
            <div className="result-badge-row">
              <span className="pill-lavender">Initial Project Guide</span>
              <span className="result-division">{rec.division}</span>
            </div>

            <div className="result-main">
              <span className="result-kicker">Suggested Starting Point</span>
              <h3 className="result-title">{rec.startingPointTitle}</h3>
              <p className="result-rationale">{rec.rationale}</p>
            </div>

            <div className="result-steps-box">
              <h4>Three Practical Next Steps</h4>
              <ol className="result-steps-list">
                {rec.nextSteps.map((step, i) => (
                  <li key={i}>
                    <span className="step-idx">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="result-context-recap">
              <div>
                <span>Selected Context:</span> <strong>{stage}</strong>
              </div>
              <div>
                <span>Primary Outcome:</span> <strong>{priority}</strong>
              </div>
              <div>
                <span>Timeline & Model:</span> <strong>{timeline} · {engagement}</strong>
              </div>
            </div>

            <p className="result-disclaimer">
              Note: This recommendation is an initial planning guide generated locally from your selections above—not an automated website scan or technical audit. Final scope is confirmed during a collaborative discovery call.
            </p>

            <div className="result-actions">
              <a href={buildDiscussHref()} className="btn btn-primary" style={{ flex: '1 1 200px' }}>
                Discuss This Project
              </a>
              <button
                type="button"
                onClick={handleCopySummary}
                className="btn btn-secondary-dark"
                style={{ flex: '1 1 170px' }}
              >
                {copied ? 'Summary Copied ✓' : 'Copy My Summary'}
              </button>
            </div>

            <div style={{ marginTop: '0.35rem' }}>
              <a href={rec.serviceHref} className="result-service-link">
                Read full {rec.serviceSlug} specification →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lead-magnet-section {
          border-top: 1px solid rgba(247, 245, 240, 0.08);
          border-bottom: 1px solid rgba(247, 245, 240, 0.08);
        }
        .lm-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          align-items: end;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 920px) {
          .lm-header {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .lm-intro {
          margin: 0;
          color: #c6c4d2;
          font-size: 1rem;
          line-height: 1.6;
        }
        .lm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .lm-grid {
            grid-template-columns: 1.08fr 0.92fr;
          }
        }
        .lm-questions-card {
          background: #1C1C23;
          border: 1px solid rgba(247, 245, 240, 0.12);
          border-radius: 1.5rem;
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .lm-q-block {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .lm-q-label {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: #F7F5F0;
        }
        .q-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: #B99A62;
          letter-spacing: 0.08em;
        }
        .lm-path-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.6rem;
        }
        .lm-path-btn {
          text-align: left;
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          background: rgba(20, 20, 24, 0.75);
          border: 1px solid rgba(247, 245, 240, 0.14);
          color: #F7F5F0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          transition: all 180ms ease;
        }
        .lm-path-btn span {
          font-family: var(--font-display);
          font-weight: 650;
          font-size: 0.9rem;
        }
        .lm-path-btn small {
          font-size: 0.74rem;
          color: #a6a4b5;
        }
        .lm-path-btn:hover {
          border-color: rgba(116, 86, 242, 0.6);
        }
        .lm-path-btn.is-active {
          background: rgba(116, 86, 242, 0.18);
          border-color: #7456F2;
          box-shadow: 0 6px 20px -6px rgba(116, 86, 242, 0.45);
        }
        .lm-path-btn.is-active small {
          color: #EAE4FF;
        }
        .lm-select {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 0.75rem;
          background-color: #141418;
          border: 1px solid rgba(247, 245, 240, 0.18);
          color: #F7F5F0;
          font-family: var(--font-body);
          font-size: 0.9rem;
          cursor: pointer;
        }
        .lm-two-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.15rem;
        }
        @media (min-width: 640px) {
          .lm-two-col {
            grid-template-columns: 1fr 1fr;
          }
        }
        .lm-result-card {
          background: linear-gradient(160deg, #1E1D28 0%, #141418 100%);
          border: 1px solid rgba(116, 86, 242, 0.45);
          border-radius: 1.5rem;
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.55);
        }
        .result-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .result-division {
          font-size: 0.8rem;
          font-weight: 600;
          color: #B99A62;
        }
        .result-kicker {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #EAE4FF;
          font-weight: 600;
        }
        .result-title {
          font-size: clamp(1.35rem, 2.2vw, 1.75rem);
          color: #F7F5F0;
          margin: 0.35rem 0 0.55rem;
        }
        .result-rationale {
          margin: 0;
          font-size: 0.94rem;
          color: #d0cedc;
          line-height: 1.6;
        }
        .result-steps-box {
          background: rgba(20, 20, 24, 0.72);
          border: 1px solid rgba(247, 245, 240, 0.1);
          border-radius: 1rem;
          padding: 1.15rem;
        }
        .result-steps-box h4 {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #B99A62;
          margin: 0 0 0.75rem;
        }
        .result-steps-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .result-steps-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: #F7F5F0;
          line-height: 1.5;
        }
        .step-idx {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: rgba(116, 86, 242, 0.25);
          border: 1px solid rgba(116, 86, 242, 0.6);
          color: #EAE4FF;
          font-size: 0.74rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .result-context-recap {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: #b4b2c2;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(247, 245, 240, 0.08);
        }
        .result-context-recap strong {
          color: #F7F5F0;
          font-weight: 600;
        }
        .result-disclaimer {
          margin: 0;
          font-size: 0.76rem;
          color: #9e9ca9;
          line-height: 1.5;
          font-style: italic;
        }
        .result-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .result-service-link {
          font-size: 0.84rem;
          color: #EAE4FF;
          text-decoration: none;
          font-weight: 600;
        }
        .result-service-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}

