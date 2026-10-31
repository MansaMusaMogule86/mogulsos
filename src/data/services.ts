import type { DivisionSlug } from './divisions';
import type { Service, ServiceDetailContent } from './services/types';
import { digitalServicesDetails } from './services/digital';
import { aiServicesDetails } from './services/ai';
import { growthServicesDetails } from './services/growth';
import { creativeServicesDetails } from './services/creative';
import { strategyServicesDetails } from './services/strategy';

export type { Service, ServiceDetailContent } from './services/types';

const allDetailsBySlug: Record<string, ServiceDetailContent> = {
  ...digitalServicesDetails,
  ...aiServicesDetails,
  ...growthServicesDetails,
  ...creativeServicesDetails,
  ...strategyServicesDetails,
};

interface ServiceBase {
  division: DivisionSlug;
  slug: string;
  title: string;
}

const serviceRegistry: ServiceBase[] = [
  // Moguls Digital (14 routes)
  { "division": "digital", "slug": "website-design", "title": "Business Websites & Web Design" },
  { "division": "digital", "slug": "website-development", "title": "Website Redesigns & Rebuilds" },
  { "division": "digital", "slug": "web-applications", "title": "Custom Web Applications" },
  { "division": "digital", "slug": "mobile-apps", "title": "Mobile App Development" },
  { "division": "digital", "slug": "ui-ux-design", "title": "Application UI/UX Design" },
  { "division": "digital", "slug": "ecommerce", "title": "E-Commerce Storefronts" },
  { "division": "digital", "slug": "landing-pages", "title": "Campaign & Launch Landing Pages" },
  { "division": "digital", "slug": "cms-platforms", "title": "CMS & Editorial Platforms" },
  { "division": "digital", "slug": "web-performance", "title": "Performance & Core Web Vitals" },
  { "division": "digital", "slug": "website-maintenance", "title": "Website Maintenance & Stewardship" },
  { "division": "digital", "slug": "product-design", "title": "Clickable Prototypes & Design Systems" },
  { "division": "digital", "slug": "api-integrations", "title": "API & Systems Integrations" },
  { "division": "digital", "slug": "client-portals", "title": "Client & Partner Portals" },
  { "division": "digital", "slug": "progressive-web-apps", "title": "Progressive Web Apps" },

  // Moguls AI (14 routes)
  { "division": "ai", "slug": "ai-agents", "title": "Tool-Using AI Agents" },
  { "division": "ai", "slug": "ai-chatbots", "title": "Website & Customer Assistants" },
  { "division": "ai", "slug": "voice-ai", "title": "Voice Assistant Projects" },
  { "division": "ai", "slug": "whatsapp-ai", "title": "WhatsApp Business Assistants" },
  { "division": "ai", "slug": "workflow-automation", "title": "Workflow Automation" },
  { "division": "ai", "slug": "ai-lead-qualification", "title": "Lead Qualification Workflows" },
  { "division": "ai", "slug": "ai-customer-support", "title": "Customer Support Triage & Copilots" },
  { "division": "ai", "slug": "knowledge-bases", "title": "Internal Knowledge Search & RAG" },
  { "division": "ai", "slug": "ai-integrations", "title": "Custom AI Applications & Integrations" },
  { "division": "ai", "slug": "ai-analytics", "title": "Qualitative Synthesis & Intelligence" },
  { "division": "ai", "slug": "document-intelligence", "title": "Document Extraction & Review" },
  { "division": "ai", "slug": "ai-consulting", "title": "AI Implementation Consulting" },
  { "division": "ai", "slug": "agent-orchestration", "title": "Multi-Step AI Orchestration" },
  { "division": "ai", "slug": "ai-governance", "title": "AI Governance & Safety Guardrails" },

  // Moguls Growth (14 routes)
  { "division": "growth", "slug": "seo", "title": "Search Engine Optimization (SEO)" },
  { "division": "growth", "slug": "technical-seo", "title": "Technical SEO & Indexation" },
  { "division": "growth", "slug": "local-seo", "title": "Local Search Support & Maps" },
  { "division": "growth", "slug": "generative-engine-optimization", "title": "AI Search Visibility (GEO)" },
  { "division": "growth", "slug": "google-ads", "title": "Google Search Ads Management" },
  { "division": "growth", "slug": "meta-ads", "title": "Meta Ads & Paid Social" },
  { "division": "growth", "slug": "paid-media", "title": "Digital Marketing & Paid Media Strategy" },
  { "division": "growth", "slug": "lead-generation", "title": "Commercial Lead Generation Systems" },
  { "division": "growth", "slug": "conversion-optimization", "title": "Conversion Improvement (CRO)" },
  { "division": "growth", "slug": "marketing-automation", "title": "Lifecycle & Follow-Up Automation" },
  { "division": "growth", "slug": "email-marketing", "title": "Editorial Email Marketing" },
  { "division": "growth", "slug": "crm-funnels", "title": "CRM Pipelines & Funnel Alignment" },
  { "division": "growth", "slug": "analytics-reporting", "title": "Analytics & Commercial Attribution" },
  { "division": "growth", "slug": "content-seo", "title": "Content Planning & Editorial SEO" },

  // Moguls Creative (14 routes)
  { "division": "creative", "slug": "brand-identity", "title": "Brand Identity Systems" },
  { "division": "creative", "slug": "logo-design", "title": "Wordmarks, Monograms & Emblems" },
  { "division": "creative", "slug": "creative-direction", "title": "Art & Creative Direction" },
  { "division": "creative", "slug": "social-media-management", "title": "Social Media Management" },
  { "division": "creative", "slug": "social-content", "title": "Social Creative & Template Systems" },
  { "division": "creative", "slug": "video-production", "title": "Commercial Video & Explainers" },
  { "division": "creative", "slug": "motion-design", "title": "Motion Graphics & Kinetic Systems" },
  { "division": "creative", "slug": "3d-visuals", "title": "3D Visuals & AI-Assisted Production" },
  { "division": "creative", "slug": "photography", "title": "Photography Direction & Curation" },
  { "division": "creative", "slug": "graphic-design", "title": "Visual Systems & Collateral" },
  { "division": "creative", "slug": "campaign-creative", "title": "Campaign Creative" },
  { "division": "creative", "slug": "presentation-design", "title": "Presentation & Pitch Deck Design" },
  { "division": "creative", "slug": "copywriting", "title": "Commercial Copywriting & Verbal Identity" },
  { "division": "creative", "slug": "brand-guidelines", "title": "Digital Brand Guidelines" },

  // Moguls Strategy (14 routes)
  { "division": "strategy", "slug": "business-consulting", "title": "Business Consulting" },
  { "division": "strategy", "slug": "digital-transformation", "title": "Digital Transformation Planning" },
  { "division": "strategy", "slug": "growth-strategy", "title": "Growth Strategy" },
  { "division": "strategy", "slug": "brand-positioning", "title": "Brand Positioning" },
  { "division": "strategy", "slug": "customer-experience", "title": "Customer Experience (CX)" },
  { "division": "strategy", "slug": "market-research", "title": "Market Research" },
  { "division": "strategy", "slug": "go-to-market", "title": "Go-to-Market Planning" },
  { "division": "strategy", "slug": "revenue-operations", "title": "Revenue Operations Planning" },
  { "division": "strategy", "slug": "automation-roadmaps", "title": "Automation Roadmaps" },
  { "division": "strategy", "slug": "business-audits", "title": "Business & Revenue Audits" },
  { "division": "strategy", "slug": "market-entry", "title": "Market Entry Planning" },
  { "division": "strategy", "slug": "product-roadmaps", "title": "Product Roadmaps" },
  { "division": "strategy", "slug": "service-design", "title": "Service Design" },
  { "division": "strategy", "slug": "operational-strategy", "title": "Operational Strategy" },
];

export const services: Service[] = serviceRegistry.map((item) => {
  const details = allDetailsBySlug[item.slug];
  if (!details) {
    throw new Error(`Missing service details for slug: ${item.slug}`);
  }
  return {
    ...item,
    ...details,
  };
});

export function getServices(division: DivisionSlug): Service[] {
  return services.filter((service) => service.division === division);
}

export function getServiceBySlug(
  division: DivisionSlug,
  slug: string
): Service | undefined {
  return services.find(
    (service) => service.division === division && service.slug === slug
  );
}
