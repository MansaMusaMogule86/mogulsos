import React, { useState } from 'react';
import type { ApprovedCaseStudy } from '../../data/case-studies';
import { divisions, divisionSlugs, type DivisionSlug } from '../../data/divisions';

interface Props {
  projects: ApprovedCaseStudy[];
  locale?: string;
  compact?: boolean;
}

export default function PortfolioShowcase({
  projects,
  locale = 'en',
  compact = false,
}: Props) {
  const approvedProjects = projects.filter((p) => p.approved);
  const [activeFilter, setActiveFilter] = useState<'all' | DivisionSlug>('all');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    approvedProjects[0]?.slug ?? null
  );
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [embedLoaded, setEmbedLoaded] = useState<boolean>(false);

  // Intentional state when no approved projects are published yet
  if (approvedProjects.length === 0) {
    return (
      <div className="work-empty-state" role="region" aria-label="Portfolio publication status">
        <div className="work-empty-inner">
          <div className="work-empty-copy">
            <span className="eyebrow-label" style={{ color: '#B99A62' }}>
              Selected Work
            </span>
            <h3 className="work-empty-headline">
              Selected projects are being prepared for publication.
            </h3>
            <p className="work-empty-sub">
              We publish client engagements only with explicit written authorization. To review relevant architecture walkthroughs or discuss a new brief directly with our team in Dubai, start a conversation below.
            </p>
          </div>
          <div className="work-empty-actions">
            <a href={`/${locale}/contact/#project-brief`} className="btn btn-primary">
              Discuss Your Project
            </a>
            {!compact && (
              <a href={`/${locale}/services/`} className="btn btn-secondary-dark">
                Explore Our Services
              </a>
            )}
          </div>
        </div>

        <style>{`
          .work-empty-state {
            background: linear-gradient(135deg, rgba(28, 28, 35, 0.95) 0%, rgba(20, 20, 24, 0.98) 100%);
            border: 1px solid rgba(247, 245, 240, 0.14);
            border-radius: 1.5rem;
            padding: clamp(1.75rem, 3.5vw, 2.75rem);
          }
          .work-empty-inner {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: space-between;
          }
          @media (min-width: 860px) {
            .work-empty-inner {
              flex-direction: row;
              align-items: center;
            }
          }
          .work-empty-copy {
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
            max-width: 60ch;
          }
          .work-empty-headline {
            font-size: clamp(1.35rem, 2.4vw, 1.85rem);
            color: #F7F5F0;
            margin: 0;
          }
          .work-empty-sub {
            margin: 0;
            color: #c2c0ce;
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .work-empty-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.85rem;
            flex-shrink: 0;
          }
        `}</style>
      </div>
    );
  }

  const filtered =
    activeFilter === 'all'
      ? approvedProjects
      : approvedProjects.filter((p) => p.division === activeFilter);

  const activeProject =
    filtered.find((p) => p.slug === selectedSlug) || filtered[0] || approvedProjects[0];

  return (
    <div className="portfolio-showcase">
      {/* Division Filter Bar */}
      <div className="portfolio-toolbar" role="toolbar" aria-label="Filter projects by division">
        <div className="filter-pills">
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveFilter('all');
              setEmbedLoaded(false);
            }}
          >
            All Divisions ({approvedProjects.length})
          </button>
          {divisionSlugs.map((slug) => {
            const count = approvedProjects.filter((p) => p.division === slug).length;
            if (count === 0) return null;
            return (
              <button
                key={slug}
                type="button"
                className={`filter-btn ${activeFilter === slug ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveFilter(slug);
                  setEmbedLoaded(false);
                }}
              >
                {divisions[slug].title} ({count})
              </button>
            );
          })}
        </div>

        {/* Desktop / Mobile Presentation Switcher */}
        <div className="viewport-switcher" role="group" aria-label="Preview device mode">
          <button
            type="button"
            className={`vp-btn ${viewportMode === 'desktop' ? 'is-active' : ''}`}
            onClick={() => setViewportMode('desktop')}
          >
            Desktop View
          </button>
          <button
            type="button"
            className={`vp-btn ${viewportMode === 'mobile' ? 'is-active' : ''}`}
            onClick={() => setViewportMode('mobile')}
          >
            Mobile View
          </button>
        </div>
      </div>

      {/* Main Active Case Study Presentation */}
      {activeProject && (
        <div className="portfolio-stage">
          <div className="stage-preview-col">
            <div className={`preview-device-frame mode-${viewportMode}`}>
              {activeProject.embedUrl && embedLoaded ? (
                <iframe
                  src={activeProject.embedUrl}
                  title={`${activeProject.title} live interactive preview`}
                  className="preview-iframe"
                  loading="lazy"
                />
              ) : (
                <div className="preview-poster">
                  {viewportMode === 'desktop' && activeProject.desktopPreviewImage ? (
                    <img
                      src={activeProject.desktopPreviewImage}
                      alt={`${activeProject.title} desktop presentation`}
                    />
                  ) : viewportMode === 'mobile' && activeProject.mobilePreviewImage ? (
                    <img
                      src={activeProject.mobilePreviewImage}
                      alt={`${activeProject.title} mobile presentation`}
                    />
                  ) : (
                    <div className="preview-placeholder-art">
                      <span>{divisions[activeProject.division].title}</span>
                      <h4>{activeProject.title}</h4>
                      <p>{activeProject.industry}</p>
                    </div>
                  )}

                  {activeProject.embedUrl && !embedLoaded && (
                    <button
                      type="button"
                      className="btn btn-primary embed-load-trigger"
                      onClick={() => setEmbedLoaded(true)}
                    >
                      Click to Load Interactive Preview
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="stage-details-col">
            <div className="case-meta">
              <span className="pill-dark">{divisions[activeProject.division].title}</span>
              <span className="case-industry">{activeProject.industry}</span>
            </div>

            <h3 className="case-title">{activeProject.title}</h3>
            <p className="case-summary">{activeProject.summary}</p>

            <div className="case-narrative">
              <div>
                <h4>Challenge</h4>
                <p>{activeProject.challenge}</p>
              </div>
              <div>
                <h4>Architecture & Solution</h4>
                <p>{activeProject.solution}</p>
              </div>
            </div>

            {activeProject.deliverables.length > 0 && (
              <div className="case-deliverables">
                <h4>Deliverables</h4>
                <ul>
                  {activeProject.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="case-actions">
              <a
                href={`/${locale}/contact/?division=${encodeURIComponent(
                  divisions[activeProject.division].title
                )}&summary=${encodeURIComponent(
                  `Interested in a project similar to: ${activeProject.title}`
                )}#project-brief`}
                className="btn btn-primary"
              >
                Start a Similar Project
              </a>
              <a
                href={`/${locale}/work/${activeProject.slug}/`}
                className="btn btn-secondary-dark"
              >
                Read Case Study
              </a>
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-live-link"
                >
                  Visit Live Website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project Selector Strip if multiple approved projects exist */}
      {filtered.length > 1 && (
        <div className="project-selector-strip">
          {filtered.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                setSelectedSlug(item.slug);
                setEmbedLoaded(false);
              }}
              className={`selector-card ${item.slug === activeProject?.slug ? 'is-selected' : ''}`}
            >
              <span className="sel-div">{divisions[item.division].title}</span>
              <strong>{item.title}</strong>
              <span className="sel-ind">{item.industry}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

