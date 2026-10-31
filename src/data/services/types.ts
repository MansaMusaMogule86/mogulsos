import type { DivisionSlug } from '../divisions';

export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface ServiceProcessStep {
  title: string;
  detail: string;
}

export interface ServiceFAQItem {
  q: string;
  a: string;
}

export interface ServiceDetailContent {
  headline: string;
  description: string;
  introduction: [string, string];
  whoItIsFor: string[];
  problemsAddressed: string[];
  deliverables: ServiceDeliverable[];
  processSteps: ServiceProcessStep[];
  scopeConsiderations: string[];
  faqs: ServiceFAQItem[];
  visualNodes: [string, string, string, string];
  relatedSlugs: [string, string, string];
  isCoreDivisionService?: boolean;
}

export interface Service extends ServiceDetailContent {
  division: DivisionSlug;
  slug: string;
  title: string;
}

