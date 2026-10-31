import React, { useState } from 'react';

const CONTACT_CONFIG = {
  email: 'intelligence@mansasmogules.com',
  phone: '+971561376535',
  phoneDisplay: '+971 56 137 6535',
  whatsappBase: 'https://wa.me/971561376535',
};

const DIVISION_OPTIONS = [
  'Moguls Digital — Websites, Apps & Platforms',
  'Moguls AI — Scoped Assistants & Automation',
  'Moguls Growth — Search Authority & Paid Funnels',
  'Moguls Creative — Brand Identity & Production',
  'Moguls Strategy — Business Diagnosis & Roadmaps',
  'Cross-Division Multi-Practice Brief',
];

const BUDGET_OPTIONS = [
  'Prefer not to disclose yet',
  'AED 35,000 – AED 75,000 (Approx. $10K – $20K)',
  'AED 75,000 – AED 180,000 (Approx. $20K – $50K)',
  'AED 180,000 – AED 400,000 (Approx. $50K – $110K)',
  'AED 400,000+ (Enterprise Architecture)',
];

const TIMELINE_OPTIONS = [
  'Immediate priority (Within 2–4 weeks)',
  'Planning for next month (30–60 days)',
  'Next quarter planning',
  'Flexible discovery phase',
];

export default function ContactPageForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState(DIVISION_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[0]);
  const [description, setDescription] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const generateBriefSummary = () => {
    return [
      `MANSAS MOGULS — PROJECT COMMISSION BRIEF`,
      `-----------------------------------------`,
      `Name: ${name || 'Not provided'}`,
      `Business / Entity: ${business || 'Not provided'}`,
      `Contact Email: ${email || 'Not provided'}`,
      `Primary Division: ${division}`,
      `Budget Range: ${budget}`,
      `Target Timeline: ${timeline}`,
      ``,
      `PROJECT DESCRIPTION & OBJECTIVES:`,
      `${description || 'No additional details provided yet.'}`,
      `-----------------------------------------`,
      `Generated via mansasmoguls.com`,
    ].join('\n');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateBriefSummary());
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 3000);
    } catch {
      // Fallback if clipboard API restricted
      alert('Brief prepared. Use WhatsApp or Email options below.');
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Mansas Moguls team, I would like to discuss a project brief:\n\n` +
        `• Name: ${name || 'N/A'}\n` +
        `• Business: ${business || 'N/A'}\n` +
        `• Division: ${division}\n` +
        `• Timeline: ${timeline}\n\n` +
        `Summary: ${description || 'I would like to explore services for our company.'}`
    );
    return `${CONTACT_CONFIG.whatsappBase}?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Brief: ${business || name || 'New Inquiry'} — ${division.split('—')[0].trim()}`
    );
    const body = encodeURIComponent(generateBriefSummary());
    return `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form-container" id="project-brief">
      <div className="form-header">
        <span className="form-eyebrow">Project Brief Builder</span>
        <h3 className="form-title">Specify Your Scope</h3>
        <p className="form-desc">
          Fill in your parameters below to generate a structured brief. You can copy it, continue directly on WhatsApp, or dispatch via email.
        </p>
      </div>

      <form className="brief-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row-dual">
          <div className="form-group">
            <label htmlFor="brief-name" className="field-label">
              Your Name <span className="req">*</span>
            </label>
            <input
              id="brief-name"
              type="text"
              required
              placeholder="e.g. Tariq Al-Mansoor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="brief-business" className="field-label">
              Company / Entity <span className="req">*</span>
            </label>
            <input
              id="brief-business"
              type="text"
              required
              placeholder="e.g. Al-Mansoor Enterprises"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="field-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="brief-email" className="field-label">
            Business Email <span className="req">*</span>
          </label>
          <input
            id="brief-email"
            type="email"
            required
            placeholder="tariq@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="brief-division" className="field-label">
            Primary Practice / Division
          </label>
          <select
            id="brief-division"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="field-select"
          >
            {DIVISION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row-dual">
          <div className="form-group">
            <label htmlFor="brief-budget" className="field-label">
              Budget Range (Optional)
            </label>
            <select
              id="brief-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="field-select"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="brief-timeline" className="field-label">
              Target Timeline (Optional)
            </label>
            <select
              id="brief-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="field-select"
            >
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="brief-desc" className="field-label">
            Project Description & Objectives
          </label>
          <textarea
            id="brief-desc"
            rows={4}
            placeholder="Outline your requirements, current pain points, or what you want to achieve..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="field-textarea"
          />
        </div>

        {/* Handoff Actions */}
        <div className="form-actions-stack">
          <div className="primary-actions-grid">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn btn-whatsapp"
            >
              Continue on WhatsApp →
            </a>
            <a href={getMailtoUrl()} className="action-btn btn-email">
              Email This Brief
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`action-btn btn-copy ${copyStatus === 'copied' ? 'is-copied' : ''}`}
          >
            {copyStatus === 'copied' ? '✓ Brief Copied to Clipboard' : 'Copy Project Brief'}
          </button>
        </div>

        <p className="privacy-reassurance">
          We respect executive confidentiality. Details entered here are kept strictly in your local session and only transmitted through your chosen email or WhatsApp channel.
        </p>
      </form>

      <style>{`
        .contact-form-container {
          background: #181820;
          border: 1px solid rgba(247, 245, 240, 0.1);
          border-radius: 1.5rem;
          padding: clamp(1.75rem, 3.5vw, 2.5rem);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
        }

        .form-header {
          margin-bottom: 1.75rem;
        }

        .form-eyebrow {
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #7456F2;
          font-weight: 700;
          display: block;
          margin-bottom: 0.4rem;
        }

        .form-title {
          font-family: var(--font-display, serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: #F7F5F0;
          margin: 0 0 0.45rem;
        }

        .form-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #8E8D9A;
          margin: 0;
        }

        .brief-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-dual {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 600px) {
          .form-row-dual {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .field-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #EAE4FF;
        }

        .req {
          color: #7456F2;
        }

        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          background: #111115;
          border: 1px solid rgba(247, 245, 240, 0.12);
          border-radius: 0.65rem;
          padding: 0.75rem 0.95rem;
          color: #F7F5F0;
          font-size: 0.9rem;
          font-family: inherit;
          transition: border-color 180ms ease, box-shadow 180ms ease;
          outline: none;
        }

        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: #7456F2;
          box-shadow: 0 0 0 3px rgba(116, 86, 242, 0.25);
        }

        .field-select {
          cursor: pointer;
        }

        .field-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-actions-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .primary-actions-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 520px) {
          .primary-actions-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.2rem;
          border-radius: 9999px;
          font-family: var(--font-display, sans-serif);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 180ms ease;
          min-height: 44px;
        }

        .btn-whatsapp {
          background-color: #7456F2;
          color: #FFFFFF;
          border: none;
        }

        .btn-whatsapp:hover {
          background-color: #6142e8;
          box-shadow: 0 6px 20px rgba(116, 86, 242, 0.45);
          transform: translateY(-1px);
        }

        .btn-email {
          background: rgba(247, 245, 240, 0.06);
          color: #F7F5F0;
          border: 1px solid rgba(247, 245, 240, 0.14);
        }

        .btn-email:hover {
          background: rgba(247, 245, 240, 0.12);
          border-color: #F7F5F0;
        }

        .btn-copy {
          background: transparent;
          color: #8E8D9A;
          border: 1px dashed rgba(247, 245, 240, 0.15);
        }

        .btn-copy:hover {
          color: #F7F5F0;
          border-color: #7456F2;
        }

        .btn-copy.is-copied {
          color: #4ade80;
          border-color: #4ade80;
          background: rgba(74, 222, 128, 0.08);
        }

        .privacy-reassurance {
          font-size: 0.76rem;
          line-height: 1.5;
          color: #666671;
          margin: 0.5rem 0 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
