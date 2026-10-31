import type { DivisionSlug } from './divisions';

export interface ApprovedCaseStudy {
  slug: string;
  title: string;
  client: string;
  division: DivisionSlug;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  desktopPreviewImage?: string;
  mobilePreviewImage?: string;
  liveUrl?: string;
  embedUrl?: string;
  approved: boolean;
}

/**
 * Approved client portfolio records.
 * Do not publish invented client work, testimonials, or unverified business results.
 * Add approved client projects here (with `approved: true`) or in `src/content/case-studies/*.mdx`.
 */
export const caseStudies: ApprovedCaseStudy[] = [];

export function getApprovedCaseStudies(): ApprovedCaseStudy[] {
  return caseStudies.filter((item) => item.approved === true);
}
