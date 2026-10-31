import type { ServiceDetailContent } from './types';

export const aiServicesDetails: Record<string, ServiceDetailContent> = {
  'ai-agents': {
    isCoreDivisionService: true,
    headline: 'Tool-using AI agents scoped with explicit boundaries and human review.',
    description:
      'Design and implementation of task-specific AI agents that prepare drafts, lookup records, and queue actions for human approval.',
    introduction: [
      'Unconstrained autonomous agents are risky in commercial environments. Useful business agents operate within strict tool permissions, structured schemas, and clear human-in-the-loop approval checkpoints.',
      'We architect and build tool-using AI agents for client operations—equipping them to retrieve internal context, draft structured outputs, or prepare system actions while requiring human review before sensitive decisions or external communications are executed.',
    ],
    whoItIsFor: [
      'Operations and service teams spending hours compiling research, drafting responses, or updating structured records',
      'B2B organizations wanting to assist account managers with automated preparation before client calls',
      'Companies ready to move beyond basic chat interfaces toward structured, tool-assisted workflows',
    ],
    problemsAddressed: [
      'Analysts and coordinators manually switching between 5+ tabs to assemble routine status updates or briefs',
      'Fear of AI hallucinations or unauthorized actions when deploying unverified automation',
      'Lack of audit logs showing which source documents or parameters an agent used to reach a recommendation',
      'Inconsistent formatting across team outputs and operational summaries',
    ],
    deliverables: [
      {
        title: 'Agent Capability & Permission Specification',
        detail: 'Strict definition of allowed tools, read/write boundaries, and mandatory human approval gates.',
      },
      {
        title: 'Structured Tool & Schema Architecture',
        detail: 'Typed function schemas (Zod/JSON Schema) ensuring the agent produces predictable, validated outputs.',
      },
      {
        title: 'Human-in-the-Loop Review Interface',
        detail: 'Approval queue where staff inspect, edit, or approve agent-prepared drafts before execution.',
      },
      {
        title: 'Evaluation & Guardrail Test Suite',
        detail: 'Adversarial and edge-case prompt testing to verify the agent refuses out-of-scope actions.',
      },
      {
        title: 'Operational Runbook & Telemetry Setup',
        detail: 'Logging of tool calls, token usage, latency, and human override rates.',
      },
    ],
    processSteps: [
      {
        title: 'Task Decomposition & Risk Mapping',
        detail: 'We separate deterministic steps, AI reasoning steps, and mandatory human sign-off points.',
      },
      {
        title: 'Tool Contract & Prompt Engineering',
        detail: 'We build read-only retrieval tools first and validate output accuracy against real examples.',
      },
      {
        title: 'Review Interface & Staging Integration',
        detail: 'We connect the agent to a staging approval queue for supervised team testing.',
      },
      {
        title: 'Guardrail Verification & Production Rollout',
        detail: 'We finalize rate limits, fallback handling, and train your team on supervision workflows.',
      },
    ],
    scopeConsiderations: [
      'External software integrations (CRM, ticketing, or ERP tools) are subject to technical scoping and API availability.',
      'Actions with financial, legal, or external customer impact are always architected with a mandatory human review gate.',
      'Model hosting and API consumption costs are sized transparently during discovery.',
    ],
    faqs: [
      {
        q: 'Will an AI agent send emails or modify records without our team seeing them?',
        a: 'No. By default, we design tool-using agents in a "draft-and-approve" architecture so a human team member reviews and confirms any external communication or critical record update.',
      },
      {
        q: 'Which AI models do you build with?',
        a: 'We select model providers (such as OpenAI, Anthropic Claude, Google Gemini, or private enterprise endpoints) based on your latency, privacy, and reasoning requirements.',
      },
      {
        q: 'How do you prevent the agent from inventing information?',
        a: 'We restrict the agent to structured tool outputs, enforce schema validation, and require source citations for factual claims.',
      },
      {
        q: 'Can we start with a read-only agent pilot?',
        a: 'Yes. Starting with read-only research and draft generation is the safest way to measure time savings before scoping write actions.',
      },
    ],
    visualNodes: ['Trigger & Context', 'Scoped Tool Calls', 'Human Review Gate', 'Logged Execution'],
    relatedSlugs: ['agent-orchestration', 'workflow-automation', 'ai-governance'],
  },

  'ai-chatbots': {
    isCoreDivisionService: true,
    headline: 'Website and customer assistants grounded in your approved knowledge.',
    description:
      'Custom website assistants designed to answer buyer questions from verified documentation, capture structured project briefs, and escalate cleanly to your team.',
    introduction: [
      'Visitors browsing your website outside business hours often have specific questions about scope, pricing models, timelines, or sector fit. Standard static FAQs force them to hunt, while generic chatbots frustrate users with vague answers.',
      'We build custom website and customer assistants for client deployment—grounding responses strictly in your approved documentation and routing qualified prospects directly to your sales or service team with a complete conversation summary.',
    ],
    whoItIsFor: [
      'Service businesses, clinics, real estate groups, and B2B firms in Dubai handling high volumes of repetitive pre-sales inquiries',
      'Companies wanting 24/7 bilingual (English/Arabic) initial response coverage with structured human handoff',
      'Organizations looking to replace rigid form trees with guided conversational qualification',
    ],
    problemsAddressed: [
      'High-intent website visitors leaving when they cannot find a quick answer to a specific scope or policy question',
      'Sales teams spending hours answering the same baseline questions before knowing if a lead is qualified',
      'Off-the-shelf chatbots making unsupported claims about pricing, discounts, or capabilities',
      'Conversations hitting a dead end without capturing contact details or transferring context to a human',
    ],
    deliverables: [
      {
        title: 'Conversation Architecture & Scope Guardrails',
        detail: 'Definition of allowed topics, refusal rules for off-policy questions (like custom legal/pricing commitments), and escalation triggers.',
      },
      {
        title: 'Curated Knowledge Base Indexing',
        detail: 'Preparation and structuring of your approved FAQs, service brochures, and policy documents.',
      },
      {
        title: 'Branded Assistant Widget & Mobile UI',
        detail: 'Accessible, responsive chat interface styled to match your brand design tokens.',
      },
      {
        title: 'Qualification & Handoff Pipeline',
        detail: 'Structured summary generation sent via webhook, email, or WhatsApp handoff to your team.',
      },
      {
        title: 'Conversation Review & Tuning Playbook',
        detail: 'Workflow for your team to inspect transcripts and update approved answers over time.',
      },
    ],
    processSteps: [
      {
        title: 'Inquiry Audit & Knowledge Curation',
        detail: 'We review your top 50 real customer questions and compile the authoritative answers.',
      },
      {
        title: 'Guardrail & Escalation Design',
        detail: 'We configure strict prompt boundaries so the assistant never guesses or overpromises.',
      },
      {
        title: 'UI Integration & Handoff Wiring',
        detail: 'We build the frontend widget and connect lead summary delivery to your preferred channel.',
      },
      {
        title: 'Red-Team Testing & Launch',
        detail: 'We test tricky prompts, verify mobile usability, and deploy to your website.',
      },
    ],
    scopeConsiderations: [
      'Note: On our own Mansas Moguls website, Moguls Concierge is intentionally built as a local curated guide; for client engagements, we scope either deterministic guided assistants or LLM-powered RAG assistants depending on your needs.',
      'Live CRM or ticketing integrations are subject to technical scoping of your existing platform.',
      'Human escalation rules are mandatory whenever a visitor requests custom quotes, sensitive support, or specialist advice.',
    ],
    faqs: [
      {
        q: 'Can the assistant invent prices or make binding promises?',
        a: 'We explicitly program guardrail instructions and knowledge retrieval rules so the assistant only cites approved pricing ranges and escalates custom quote requests to a human.',
      },
      {
        q: 'Should we build a deterministic guided assistant or an AI-powered chat assistant?',
        a: 'If you have 6–10 predictable buyer paths, a deterministic guided assistant is fast, zero-latency, and 100% predictable. If visitors ask open-ended questions across large documentation, a grounded RAG assistant is ideal.',
      },
      {
        q: 'Does it support both English and Arabic?',
        a: 'Yes. We can scope bilingual prompt templates, knowledge retrieval, and RTL interface support for UAE audiences.',
      },
      {
        q: 'How does our sales team receive the conversation?',
        a: 'When a visitor completes qualification or requests a human, the assistant packages a clean summary for email, WhatsApp, or scoped CRM webhook delivery.',
      },
    ],
    visualNodes: ['Approved Docs Index', 'Guardrail Prompting', 'Branded Chat UI', 'Human Team Handoff'],
    relatedSlugs: ['whatsapp-ai', 'ai-lead-qualification', 'knowledge-bases'],
  },

  'voice-ai': {
    isCoreDivisionService: true,
    headline: 'Voice assistant projects for structured inbound triage and appointment routing.',
    description:
      'Scoped voice assistant prototypes and telephony workflows for after-hours inquiry capture, FAQ routing, and human call transfer.',
    introduction: [
      'Missed phone calls during peak hours or outside office hours often mean lost opportunities in real estate, hospitality, clinics, and concierge services.',
      'We scope and implement voice assistant projects that handle structured inbound call triage, answer common operational questions (hours, locations, booking preparation), and transfer callers or structured voice summaries directly to your human staff.',
    ],
    whoItIsFor: [
      'Hospitality venues, clinics, real estate agencies, and service desks experiencing high call volumes or missed after-hours calls',
      'Operations teams wanting structured caller intent capture before transferring to a specialist',
      'Businesses exploring voice interface prototypes for customer or internal field workflows',
    ],
    problemsAddressed: [
      'Missed inbound calls outside standard Dubai working hours turning into lost leads',
      'Front-desk staff interrupted constantly by repetitive questions about directions, hours, or basic policies',
      'Rigid touch-tone IVR trees ("Press 1, Press 2") that cause callers to hang up',
      'Lack of structured call summaries when transferring an inquiry to a human representative',
    ],
    deliverables: [
      {
        title: 'Voice Call Flow & Escalation Script',
        detail: 'Spoken dialogue design, interruption handling, fallback phrases, and immediate human-transfer triggers.',
      },
      {
        title: 'Low-Latency Speech-to-Text & Synthesis Pipeline',
        detail: 'Configuration of voice recognition, grounded response logic, and natural voice synthesis.',
      },
      {
        title: 'Telephony / SIP & Webhook Scoping',
        detail: 'Integration architecture connecting inbound call numbers, warm transfers, and post-call summaries.',
      },
      {
        title: 'Caller Disclosure & Compliance Setup',
        detail: 'Clear upfront greeting informing callers they are speaking with an automated assistant and how to reach a person immediately.',
      },
      {
        title: 'Call Transcript & Summary Dashboard',
        detail: 'Structured post-call notes delivered to your reception or sales team for review.',
      },
    ],
    processSteps: [
      {
        title: 'Call Intent & Telecom Discovery',
        detail: 'We analyze your most frequent inbound call reasons and review your UAE telecom/SIP setup.',
      },
      {
        title: 'Spoken Dialogue & Guardrail Prototyping',
        detail: 'We script concise spoken responses and test latency, accents, and background noise handling.',
      },
      {
        title: 'Transfer & Summary Integration',
        detail: 'We wire warm call transfers and post-call transcript summaries for your staff.',
      },
      {
        title: 'Pilot Testing & Supervised Rollout',
        detail: 'We test on a staging number first before routing overflow or after-hours calls.',
      },
    ],
    scopeConsiderations: [
      'Telephony carrier compatibility, UAE telecom regulations, and SIP trunk access are scoped prior to implementation.',
      'Callers must always be able to request a human operator or leave a direct callback request at any point.',
      'Sensitive medical, financial, or contractual advice is strictly excluded from automated voice responses and routed to licensed staff.',
    ],
    faqs: [
      {
        q: 'Do callers know they are speaking with an automated voice assistant?',
        a: 'Yes. Ethical and effective voice design always starts with a transparent greeting stating it is a virtual assistant and offering an immediate transfer to a team member.',
      },
      {
        q: 'How does it handle diverse accents common in Dubai?',
        a: 'We test speech recognition models across diverse regional and international English/Arabic accents during the pilot phase and configure confirmation prompts for names and numbers.',
      },
      {
        q: 'What happens if the caller asks a complex question?',
        a: 'The assistant acknowledges the request, captures the caller’s name and topic, and either transfers the call live during business hours or logs a priority callback.',
      },
      {
        q: 'Can we deploy it only for after-hours or overflow calls?',
        a: 'Yes. Starting with after-hours and overflow call capture is the most practical way to deploy a voice assistant.',
      },
    ],
    visualNodes: ['Inbound Call Greeting', 'Intent & FAQ Triage', 'Warm Human Transfer', 'Post-Call Summary'],
    relatedSlugs: ['ai-chatbots', 'ai-customer-support', 'whatsapp-ai'],
  },

  'whatsapp-ai': {
    headline: 'WhatsApp business assistants for structured inquiry intake and human handoff.',
    description:
      'Scoped WhatsApp Business API workflows that greet prospects, gather project or booking details, and assign conversations to your human team.',
    introduction: [
      'In Dubai and across the GCC, WhatsApp is the primary channel where business conversations happen. However, when prospects message a general number, responses can be delayed or scattered without structured intake.',
      'We design and implement WhatsApp Business API assistants that provide instant acknowledgment, guide prospects through 3–4 relevant qualification questions, answer approved FAQs, and hand the conversation smoothly to a human specialist.',
    ],
    whoItIsFor: [
      'Real estate brokerages, clinics, hospitality groups, and service businesses receiving daily WhatsApp inquiries',
      'Sales teams needing structured intake (budget, timeline, service type) before an agent jumps into the chat',
      'Companies wanting to unify website CTAs and ad clicks into a managed WhatsApp Business inbox',
    ],
    problemsAddressed: [
      'Prospects waiting hours for a first reply when messaging on evenings or weekends',
      'Sales reps spending 15 messages back and forth just to collect basic contact and requirement details',
      'Unapproved personal WhatsApp accounts creating data silos when employees leave',
      'Lack of clear transition between automated intake and live human conversation',
    ],
    deliverables: [
      {
        title: 'WhatsApp Conversation & Template Blueprint',
        detail: 'Interactive button flows, list menus, approved Meta message templates, and escalation triggers.',
      },
      {
        title: 'WhatsApp Business API & Inbox Scoping',
        detail: 'Configuration architecture with your official Meta BSP / shared team inbox.',
      },
      {
        title: 'Grounded FAQ & Intake Logic',
        detail: 'Scoped assistant layer that answers common questions and compiles a structured lead summary.',
      },
      {
        title: 'Human Takeover & Pause Controls',
        detail: 'Automatic pausing of automated replies the moment a human team member joins the thread.',
      },
      {
        title: 'Opt-In & Meta Policy Compliance Guide',
        detail: 'Documentation ensuring 24-hour service window rules and template approvals are respected.',
      },
    ],
    processSteps: [
      {
        title: 'Channel & BSP Readiness Audit',
        detail: 'We review your WhatsApp Business API status, phone number setup, and shared team inbox.',
      },
      {
        title: 'Interactive Flow & Guardrail Design',
        detail: 'We combine quick-reply buttons with scoped natural-language handling.',
      },
      {
        title: 'Webhook & Team Handoff Implementation',
        detail: 'We build the routing logic and human takeover triggers in staging.',
      },
      {
        title: 'End-to-End Verification & Go-Live',
        detail: 'We verify message delivery, escalation notifications, and team inbox workflow.',
      },
    ],
    scopeConsiderations: [
      'Requires an official WhatsApp Business Platform (API) account through an approved provider; standard personal WhatsApp apps do not support compliant webhook automation.',
      'Automated messages immediately pause once a human agent replies or when a customer requests a representative.',
      'CRM synchronization is scoped based on your team inbox and CRM API capabilities.',
    ],
    faqs: [
      {
        q: 'What happens when a sales rep replies in the WhatsApp thread?',
        a: 'Our workflow detects human agent intervention and automatically pauses the assistant on that thread so the rep can converse naturally without interference.',
      },
      {
        q: 'Does this comply with Meta’s WhatsApp Business policies?',
        a: 'Yes. We architect strictly around the official WhatsApp Business Platform API, respecting 24-hour customer service windows and approved template categories.',
      },
      {
        q: 'Can we use interactive buttons instead of open-ended AI chat?',
        a: 'Yes—and we often recommend a hybrid approach where quick-reply buttons handle core routing and scoped AI handles specific FAQ questions.',
      },
      {
        q: 'Do we need a WhatsApp API automation just to receive leads from our website?',
        a: 'No. If you prefer a simpler setup, we can encode project briefs directly into `wa.me` deep links on your website with zero API overhead.',
      },
    ],
    visualNodes: ['WhatsApp API Entry', 'Guided Intake Flow', 'FAQ Grounding', 'Human Inbox Takeover'],
    relatedSlugs: ['ai-chatbots', 'ai-lead-qualification', 'crm-funnels'],
  },

  'workflow-automation': {
    isCoreDivisionService: true,
    headline: 'Workflow automation that eliminates repetitive operational handoffs.',
    description:
      'Connect forms, documents, approvals, and internal notifications into auditable multi-step workflows with human review checkpoints.',
    introduction: [
      'Most operational delays happen in the gaps between teams: an inquiry sits in an inbox, an onboarding form needs to be copied into a project tracker, or a document awaits review without anyone being notified.',
      'We design and implement practical workflow automations—combining deterministic rules, API webhooks, and scoped AI steps (such as summarizing an intake form or classifying a request) while keeping human sign-off at every critical decision gate.',
    ],
    whoItIsFor: [
      'Operations, finance, onboarding, and client delivery teams bogged down by manual copy-pasting and status chasing',
      'Growing Dubai businesses whose manual processes are breaking as inquiry and project volume increases',
      'Leadership teams wanting reliable SLAs, error alerts, and audit trails across core business processes',
    ],
    problemsAddressed: [
      'Staff spending hours every week copying data between forms, emails, spreadsheets, and project boards',
      'Dropped handoffs between sales and delivery teams after a client signs an agreement',
      'Fragile "no-code" zaps built without error handling that fail silently when a field format changes',
      'Over-automated processes that execute external actions without giving a manager a chance to review',
    ],
    deliverables: [
      {
        title: 'Current-vs-Target Workflow Blueprint',
        detail: 'Step-by-step map of triggers, data transformations, exception paths, and human approval checkpoints.',
      },
      {
        title: 'Production Workflow Implementation',
        detail: 'Engineered automation pipelines using code-backed workers or enterprise orchestration platforms.',
      },
      {
        title: 'AI Classification & Summary Nodes (Optional)',
        detail: 'Scoped AI steps for summarizing long text inputs, tagging urgency, or extracting structured fields.',
      },
      {
        title: 'Error Alerting, Retries & Dead-Letter Queue',
        detail: 'Resilient failure handling so no record is ever silently lost if an external API times out.',
      },
      {
        title: 'Operations Runbook & Ownership Handover',
        detail: 'Clear documentation of every webhook, credential, and troubleshooting procedure.',
      },
    ],
    processSteps: [
      {
        title: 'Process Audit & Bottleneck Selection',
        detail: 'We shadow the actual manual process and identify the highest-friction steps.',
      },
      {
        title: 'Schema, Exception & Approval Design',
        detail: 'We define what happens when data is missing or when a human manager needs to approve.',
      },
      {
        title: 'Workflow Build & Staging Simulation',
        detail: 'We build the automation and test it with realistic edge-case payloads.',
      },
      {
        title: 'Supervised Go-Live & Team Handover',
        detail: 'We launch with active monitoring and train your operations lead.',
      },
    ],
    scopeConsiderations: [
      'All third-party software connectors are subject to technical scoping to confirm API availability and rate limits.',
      'We prioritize deterministic code/rules for exact logic and use AI nodes only where unstructured text or documents require interpretation.',
      'Human review gates are preserved wherever financial, contractual, or client-facing communications are triggered.',
    ],
    faqs: [
      {
        q: 'Do you use AI for every step of a workflow automation?',
        a: 'No. If a step can be solved with a clean deterministic rule or API mapping, deterministic code is faster, cheaper, and 100% predictable. We reserve AI strictly for unstructured tasks like summarizing briefs or classifying documents.',
      },
      {
        q: 'What platforms or stacks do you build automations on?',
        a: 'Depending on your team’s technical setup, we build custom TypeScript/Node serverless workflows, n8n/Make enterprise pipelines, or direct webhook microservices.',
      },
      {
        q: 'What happens if an automation hits an unexpected input?',
        a: 'Instead of guessing, the workflow pauses that item, flags it in a human review queue, and alerts the responsible team member.',
      },
      {
        q: 'How do we know which workflow to automate first?',
        a: 'We start with high-frequency, low-variance internal handoffs—such as lead routing, client onboarding provisioning, or document intake.',
      },
    ],
    visualNodes: ['Webhook / Form Trigger', 'Validation & AI Triage', 'Human Approval Gate', 'System Sync & Log'],
    relatedSlugs: ['api-integrations', 'document-intelligence', 'automation-roadmaps'],
  },

  'ai-lead-qualification': {
    headline: 'Structured lead qualification and brief preparation workflows.',
    description:
      'Capture, enrich, and organize incoming project inquiries into structured briefs so sales teams respond faster with better context.',
    introduction: [
      'Treating every inbound inquiry identically either overwhelms senior consultants with unqualified calls or leaves high-value prospects waiting in a generic queue.',
      'We design structured lead qualification workflows—combining interactive frontend questionnaires, brief structuring, and human review routing so your commercial team receives clear context before the first conversation.',
    ],
    whoItIsFor: [
      'B2B agencies, consultancies, real estate groups, and custom builders receiving diverse inbound inquiries',
      'Sales teams wanting prospects to self-select scope, timeline, and objectives in a helpful interactive format',
      'Organizations looking to improve response speed and brief quality without aggressive gatekeeping',
    ],
    problemsAddressed: [
      'One-line contact form submissions ("Call me") that give your team zero context on how to prepare',
      'Long, intimidating 20-field forms that cause serious buyers to abandon the page',
      'Senior partners spending hours on discovery calls only to learn the service requested is out of scope',
      'Slow routing when different divisions or specialists handle different types of inquiries',
    ],
    deliverables: [
      {
        title: 'Qualification Criteria & Routing Matrix',
        detail: 'Definition of key buyer signals, division routing rules, and priority tiers.',
      },
      {
        title: 'Interactive Frontend Qualifier / Questionnaire',
        detail: 'Engaging 4-to-5 step interactive guide that helps visitors clarify their needs while capturing scope.',
      },
      {
        title: 'Automated Brief Structuring & Triage',
        detail: 'Formatting of visitor inputs into a clean, readable brief for your commercial team.',
      },
      {
        title: 'Multi-Channel Handoff (CRM / Email / WhatsApp)',
        detail: 'Scoped delivery of the structured brief to the right division lead for human follow-up.',
      },
      {
        title: 'Conversion & Drop-Off Analytics',
        detail: 'Measurement of question completion rates to refine friction points over time.',
      },
    ],
    processSteps: [
      {
        title: 'Sales Discovery & Criteria Mapping',
        detail: 'We interview your sales leads to learn the 5 questions that matter most on a first call.',
      },
      {
        title: 'Interactive Flow & Summary Design',
        detail: 'We craft a helpful, non-intrusive questionnaire that rewards the visitor with an initial guide.',
      },
      {
        title: 'Routing & Handoff Implementation',
        detail: 'We wire the summary transfer into your contact forms, WhatsApp links, or scoped CRM.',
      },
      {
        title: 'Testing & Sales Team Alignment',
        detail: 'We verify every branching path and train your team on responding to pre-structured briefs.',
      },
    ],
    scopeConsiderations: [
      'Qualification tools never automatically reject a human inquiry silently; every submission is logged for human review.',
      'External CRM or enrichment API connectors are subject to technical scoping.',
      'Privacy transparency is maintained—personal details are only transmitted when the visitor chooses to submit or initiate a handoff.',
    ],
    faqs: [
      {
        q: 'Will a qualification flow reduce the number of leads we get?',
        a: 'When designed as a helpful "What should you build next?" guide rather than an interrogation, it increases engagement while dramatically improving the context attached to each inquiry.',
      },
      {
        q: 'Does an AI model automatically reject leads?',
        a: 'No. Automated scoring or categorization only helps prioritize and route the brief to the right specialist; human sales leads review all legitimate inquiries.',
      },
      {
        q: 'Can visitors copy their summary before contacting us?',
        a: 'Yes. Giving visitors a "Copy My Summary" button builds trust and helps them share the brief internally with their own stakeholders.',
      },
      {
        q: 'Can this connect to HubSpot, Salesforce, or WhatsApp?',
        a: 'Yes. We can pass the structured brief into your contact form, WhatsApp deep links, or a scoped CRM webhook.',
      },
    ],
    visualNodes: ['Interactive Qualifier', 'Brief Structuring', 'Division Routing', 'Human Sales Follow-Up'],
    relatedSlugs: ['ai-chatbots', 'crm-funnels', 'conversion-optimization'],
  },

  'ai-customer-support': {
    headline: 'Customer support triage, draft assistance, and knowledge copilot systems.',
    description:
      'Reduce support response times with grounded ticket triage, agent-facing reply drafts, and verified self-service resolution.',
    introduction: [
      'Customer support teams face a constant tension between speed and accuracy. Fully automated bots often frustrate customers with generic loops, while purely manual support struggles during volume spikes.',
      'We implement balanced AI customer support architectures: self-service assistants for straightforward documented questions, and internal agent copilots that categorize tickets, retrieve relevant policy clauses, and draft responses for human support reps to review and send.',
    ],
    whoItIsFor: [
      'E-commerce, hospitality, SaaS, and property management teams handling high volumes of daily support requests',
      'Customer service leaders wanting to cut first-response times while keeping human empathy on complex issues',
      'Operations teams onboarding new support agents who need instant access to accurate company policies',
    ],
    problemsAddressed: [
      'Support agents spending 70% of their day typing variations of the same 15 policy or order-status answers',
      'Long wait times on complex tickets because tier-1 queues are clogged with simple FAQ requests',
      'Inconsistent answers given by different support reps when policies or service terms are updated',
      'Customer frustration when a chatbot refuses to escalate to a human agent',
    ],
    deliverables: [
      {
        title: 'Support Taxonomy & Escalation Matrix',
        detail: 'Classification of ticket types into self-service safe, human-assisted draft, and immediate specialist escalation.',
      },
      {
        title: 'Grounded Help Center & Copilot Retrieval',
        detail: 'Citation-backed search index over your approved help articles, SOPs, and refund/service policies.',
      },
      {
        title: 'Agent Reply-Drafting Workflow',
        detail: 'Internal copilot that drafts a policy-accurate response with source links for the human agent to review.',
      },
      {
        title: 'Customer-Facing Triage Interface',
        detail: 'Clean support widget with instant human escalation and structured ticket intake.',
      },
      {
        title: 'Quality Assurance & Feedback Loop',
        detail: 'Analytics tracking resolution accuracy, escalation rates, and missing knowledge articles.',
      },
    ],
    processSteps: [
      {
        title: 'Historical Ticket & Policy Audit',
        detail: 'We analyze common ticket categories and identify gaps in your current support documentation.',
      },
      {
        title: 'Knowledge Structuring & Guardrail Setup',
        detail: 'We organize clean, unambiguous policy articles and configure retrieval citations.',
      },
      {
        title: 'Copilot & Triage Integration',
        detail: 'We deploy internal agent draft assistance first to verify accuracy with your support team.',
      },
      {
        title: 'Customer-Facing Rollout & Tuning',
        detail: 'We enable self-service triage for verified topics with one-click human handoff.',
      },
    ],
    scopeConsiderations: [
      'Helpdesk integrations (Zendesk, Freshdesk, Intercom, or custom portals) are scoped based on API and webhook access.',
      'Refund approvals, account cancellations, and billing disputes always require human agent review and authorization.',
      'PII scrubbing and data retention rules are configured according to your privacy policies.',
    ],
    faqs: [
      {
        q: 'Why start with an internal agent copilot before a public support bot?',
        a: 'Having the system draft replies for your human support agents lets your team verify accuracy in real life with zero risk to customer experience.',
      },
      {
        q: 'How easy is it for a customer to reach a real person?',
        a: 'We never hide the "Speak to a specialist" option. If a customer requests human help or expresses frustration, the system routes the ticket immediately with full context.',
      },
      {
        q: 'What happens when our company updates a policy?',
        a: 'Once the master policy document is updated in the knowledge index, both the customer triage tool and the internal agent copilot immediately reference the new rule.',
      },
      {
        q: 'Can it handle multilingual support tickets?',
        a: 'Yes. The copilot can translate incoming inquiries, retrieve answers from your core knowledge base, and draft responses for bilingual review.',
      },
    ],
    visualNodes: ['Ticket Triage & Tagging', 'Policy RAG Lookup', 'Human Copilot Draft', 'Verified Resolution'],
    relatedSlugs: ['knowledge-bases', 'ai-chatbots', 'whatsapp-ai'],
  },

  'knowledge-bases': {
    isCoreDivisionService: true,
    headline: 'Internal knowledge search and Retrieval-Augmented Generation (RAG).',
    description:
      'Turn scattered SOPs, proposals, manuals, and policy PDFs into a fast, citation-backed internal search system for your team.',
    introduction: [
      'Every established company accumulates thousands of pages of institutional knowledge across shared drives, PDFs, onboarding manuals, and past project proposals. Finding a specific clause or technical standard often means interrupting a senior colleague.',
      'We build private internal knowledge search systems (RAG)—indexing your approved company documents so employees can ask natural-language questions and receive concise answers backed by exact document citations and page links.',
    ],
    whoItIsFor: [
      'Consulting, legal, engineering, real estate, and healthcare organizations with extensive internal documentation',
      'Growing teams where onboarding new staff takes months because SOPs are buried across folder hierarchies',
      'Commercial teams needing fast lookup across past technical specifications, RFPs, and service manuals',
    ],
    problemsAddressed: [
      'Employees wasting hours searching folder names or asking the same operational questions in team chat',
      'Generic AI tools hallucinating answers because they lack access to your actual internal policies',
      'Outdated document versions being referenced accidentally by staff',
      'Lack of source citations making it impossible to verify whether an AI summary is trustworthy',
    ],
    deliverables: [
      {
        title: 'Document Corpus Audit & Chunking Pipeline',
        detail: 'Cleaning, parsing, and semantic chunking of PDFs, Word docs, markdown files, and knowledge wikis.',
      },
      {
        title: 'Hybrid Search & Vector Retrieval Engine',
        detail: 'Combined keyword (BM25) and semantic vector search with reranking for high retrieval precision.',
      },
      {
        title: 'Citation-Enforced Answer Interface',
        detail: 'Internal web search portal that displays direct quotes, document titles, and clickable source links.',
      },
      {
        title: 'Access Control & Document Versioning',
        detail: 'Role-based document visibility and automated re-indexing when source files are updated.',
      },
      {
        title: 'Retrieval Evaluation Benchmark',
        detail: 'Test suite of real internal questions verifying citation accuracy and "not found" behavior.',
      },
    ],
    processSteps: [
      {
        title: 'Corpus Audit & Permission Mapping',
        detail: 'We review your document formats, folder structures, and which roles can access which files.',
      },
      {
        title: 'Ingestion, Chunking & Hybrid Indexing',
        detail: 'We build the parsing pipeline so tables, headings, and clauses stay intact.',
      },
      {
        title: 'Search UI & Citation Prompting',
        detail: 'We configure the answer synthesis to answer strictly from retrieved passages with inline citations.',
      },
      {
        title: 'Accuracy Benchmarking & Team Launch',
        detail: 'We test with domain experts and train your team on maintaining the document repository.',
      },
    ],
    scopeConsiderations: [
      'Document repository connectors (SharePoint, Google Drive, Notion, S3, or local vaults) are scoped during discovery.',
      'If a question is not covered by the indexed documents, the system is explicitly programmed to state that no matching policy was found rather than guessing.',
      'Deployment can be configured on your private cloud infrastructure to satisfy data residency requirements.',
    ],
    faqs: [
      {
        q: 'What if the answer is not in our documents?',
        a: 'We configure strict grounding rules: if the retrieval engine does not find relevant passages above a confidence threshold, the system replies "No verified source found in the indexed documents" instead of guessing.',
      },
      {
        q: 'Is our company data used to train public AI models?',
        a: 'No. We use enterprise API endpoints or private deployments with zero data-training retention, and your document index stays inside your controlled database.',
      },
      {
        q: 'Can employees click through to read the original PDF or SOP?',
        a: 'Yes. Every response includes inline citations with the exact document name, section heading, and link to verify the original text.',
      },
      {
        q: 'How does it handle tables and technical specifications?',
        a: 'Instead of naive character splitting that breaks tables in half, we use layout-aware document parsing and hybrid keyword + vector search.',
      },
    ],
    visualNodes: ['Document Parsing', 'Hybrid Vector + Keyword', 'Citation Synthesis', 'Source Verification'],
    relatedSlugs: ['document-intelligence', 'ai-customer-support', 'ai-governance'],
  },

  'ai-integrations': {
    headline: 'Custom AI applications and model API integrations.',
    description:
      'Embed structured language, vision, or speech capabilities directly into your existing web applications and internal software.',
    introduction: [
      'Adding AI value to a software product rarely means slapping a generic chat bubble in the corner. The most effective AI features are embedded directly into existing workflows—such as one-click brief structuring, smart field auto-completion, semantic search filters, or automated translation previews.',
      'We architect and build custom AI applications and model API integrations—handling prompt engineering, structured JSON output schemas, streaming UX, rate limiting, and fallback providers cleanly.',
    ],
    whoItIsFor: [
      'Product and SaaS teams wanting to ship practical embedded AI features inside their existing web or mobile application',
      'Businesses needing a bespoke internal web tool built around a specialized language or vision workflow',
      'Engineering teams looking for production-grade model orchestration, caching, and cost controls',
    ],
    problemsAddressed: [
      'Brittle raw API calls that fail when an LLM returns malformed JSON or hits a provider rate limit',
      'Poor user experience where users stare at a frozen spinner for 12 seconds waiting for a response',
      'Uncontrolled token consumption and lack of per-user rate limiting or semantic caching',
      'Vendor lock-in to a single model endpoint without an abstraction layer',
    ],
    deliverables: [
      {
        title: 'AI Feature UX & Interaction Design',
        detail: 'Inline editing controls, streaming progress states, diff comparisons, and human accept/reject actions.',
      },
      {
        title: 'Model Gateway & Schema Layer',
        detail: 'Type-safe server integration enforcing structured outputs, retries, and fallback model routing.',
      },
      {
        title: 'Prompt Versioning & Evaluation Suite',
        detail: 'Version-controlled system prompts tested against golden input/output datasets.',
      },
      {
        title: 'Rate Limiting, Caching & Cost Telemetry',
        detail: 'Per-tenant quotas, input length guards, and token usage monitoring.',
      },
      {
        title: 'Production Code & Security Handover',
        detail: 'Prompt-injection mitigation checks and full source code delivery.',
      },
    ],
    processSteps: [
      {
        title: 'Feature Scoping & Model Selection',
        detail: 'We pick the right balance of model speed, reasoning depth, and unit cost for the specific task.',
      },
      {
        title: 'Prompt & Structured Schema Prototyping',
        detail: 'We validate output reliability across 50+ realistic inputs before building the UI.',
      },
      {
        title: 'Streaming Frontend & Gateway Build',
        detail: 'We implement responsive UI controls with accept/edit/discard human review actions.',
      },
      {
        title: 'Load, Security & Fallback QA',
        detail: 'We test prompt injection resistance, timeouts, and provider failover.',
      },
    ],
    scopeConsiderations: [
      'Integration with your application backend is scoped around your existing language stack and authentication system.',
      'All AI-generated drafts or field suggestions are presented to the user for confirmation before saving to production records.',
      'Ongoing model API billing remains directly under your organization’s provider accounts.',
    ],
    faqs: [
      {
        q: 'How do you guarantee the AI API returns valid data for our frontend?',
        a: 'We enforce strict JSON Schema / Zod structured outputs at the model API level and validate every payload on the server before returning it to the UI.',
      },
      {
        q: 'What happens if OpenAI or Anthropic has an outage?',
        a: 'We architect a provider abstraction layer that can automatically fail over to a secondary model endpoint or gracefully fall back to manual input.',
      },
      {
        q: 'How do you protect against prompt injection from user inputs?',
        a: 'We separate system instructions from untrusted user text, sanitize inputs, restrict output schemas, and never allow model output to execute arbitrary code or queries.',
      },
      {
        q: 'Can you build a complete standalone web application around an AI workflow?',
        a: 'Yes. Combining Moguls Digital and Moguls AI, we design and build complete custom web applications from interface to backend.',
      },
    ],
    visualNodes: ['Sanitized User Input', 'Model Gateway & Schema', 'Streaming UI Preview', 'User Accept / Edit'],
    relatedSlugs: ['web-applications', 'ai-agents', 'document-intelligence'],
  },

  'ai-analytics': {
    headline: 'AI-assisted qualitative synthesis and operational intelligence.',
    description:
      'Transform unstructured customer feedback, survey responses, call notes, and support logs into structured thematic insights.',
    introduction: [
      'Businesses generally have no shortage of quantitative charts, yet qualitative data—thousands of open-ended survey responses, sales call notes, support transcripts, and customer reviews—often goes unread because categorizing it manually takes weeks.',
      'We build structured analysis pipelines that classify, cluster, and summarize unstructured operational text into verifiable themes, linking every insight directly back to the underlying source quotes for human analysts to inspect.',
    ],
    whoItIsFor: [
      'Customer experience, product, and hospitality leaders analyzing high volumes of guest reviews, feedback forms, or support logs',
      'Commercial teams wanting to identify recurring objections, feature requests, or competitor mentions across sales notes',
      'Operations leaders needing regular synthesis of multi-branch operational reports',
    ],
    problemsAddressed: [
      'Valuable customer feedback sitting unread in CSV exports because manual tagging is too slow',
      'Biased anecdotal summaries where a single loud complaint overshadows broader patterns',
      'Black-box AI summaries that state conclusions without letting you click through to the raw records',
      'Inconsistent tagging categories across different departments or time periods',
    ],
    deliverables: [
      {
        title: 'Classification Taxonomy & Tagging Schema',
        detail: 'Clear definition of categories, sentiment dimensions, urgency levels, and entity extraction rules.',
      },
      {
        title: 'Batch & Incremental Processing Pipeline',
        detail: 'Automated workflow that ingests unstructured records and outputs structured, filterable tags.',
      },
      {
        title: 'Traceable Insight Explorer Dashboard',
        detail: 'Interactive interface where managers filter themes and click any metric to read the exact source records.',
      },
      {
        title: 'Human Calibration & Audit Workflow',
        detail: 'Interface for analysts to spot-check classifications and refine category definitions.',
      },
      {
        title: 'Data Export & Reporting Connectors',
        detail: 'Clean structured tables ready for BI tools, executive presentations, or CSV export.',
      },
    ],
    processSteps: [
      {
        title: 'Data Source & Taxonomy Definition',
        detail: 'We sample your raw records and collaborate with your domain leads to define meaningful categories.',
      },
      {
        title: 'Extraction & Classification Calibration',
        detail: 'We test model tagging against human-labeled examples until agreement meets target accuracy.',
      },
      {
        title: 'Dashboard & Drill-Down Build',
        detail: 'We build the reporting view with full drill-down to original source quotes.',
      },
      {
        title: 'Scheduled Pipeline & Team Handover',
        detail: 'We configure recurring batch runs and train your team on auditing results.',
      },
    ],
    scopeConsiderations: [
      'We use deterministic SQL/code for all numerical math and aggregations, reserving AI strictly for tagging and summarizing unstructured text.',
      'Every synthesized theme links back to its underlying source records so human decision-makers can verify context.',
      'Data anonymization steps can be included prior to processing sensitive customer records.',
    ],
    faqs: [
      {
        q: 'Do you use LLMs to calculate financial or numerical metrics?',
        a: 'Never. Language models should not do arithmetic. We use AI to classify unstructured text into structured tags, and then use standard deterministic code/SQL to count and aggregate those tags accurately.',
      },
      {
        q: 'Can we verify the raw feedback behind a summary?',
        a: 'Yes. Every chart bar or summary bullet links directly to the exact underlying reviews, tickets, or notes that were grouped into that category.',
      },
      {
        q: 'Does it work with bilingual Arabic and English feedback?',
        a: 'Yes. The classification pipeline can tag both Arabic and English records into a unified taxonomy while preserving the original quote text.',
      },
      {
        q: 'How often does the analysis run?',
        a: 'It can be configured as an on-demand upload tool, a nightly batch job, or a weekly executive digest.',
      },
    ],
    visualNodes: ['Raw Text & Feedback', 'Schema Tagging', 'Deterministic Math', 'Source Drill-Down'],
    relatedSlugs: ['analytics-reporting', 'document-intelligence', 'customer-experience'],
  },

  'document-intelligence': {
    isCoreDivisionService: true,
    headline: 'Document extraction, comparison, and structured review workflows.',
    description:
      'Extract structured fields from PDFs, invoices, forms, and proposals with confidence scoring and side-by-side human verification.',
    introduction: [
      'Across real estate, logistics, finance, legal, and corporate services in Dubai, teams spend thousands of hours reading PDFs, trade licenses, invoices, tenancy contracts, and vendor proposals just to type key fields into an internal system.',
      'We build Document Intelligence workflows that parse complex PDFs and scanned documents into structured JSON/database fields—highlighting extracted values side-by-side with the original document page so a human reviewer can verify and approve them in seconds.',
    ],
    whoItIsFor: [
      'Corporate service providers, real estate firms, logistics operators, and finance teams processing high volumes of PDFs',
      'Procurement and operations teams comparing multi-page vendor proposals, BOQs, or compliance checklists',
      'Organizations wanting to speed up client onboarding document verification without sacrificing human oversight',
    ],
    problemsAddressed: [
      'Slow manual data entry from PDF attachments that delays client onboarding or invoice processing',
      'Typos in reference numbers, dates, or monetary amounts when staff copy fields by hand',
      'Rigid legacy OCR templates that break whenever a vendor slightly changes their document layout',
      'Lack of a side-by-side verification screen for staff to confirm extracted fields quickly',
    ],
    deliverables: [
      {
        title: 'Document Schema & Field Specification',
        detail: 'Exact definition of required fields, data types, validation rules, and cross-field consistency checks.',
      },
      {
        title: 'Layout-Aware OCR & Vision-Language Extraction',
        detail: 'Pipeline capable of handling multi-page PDFs, tables, stamps, and bilingual text.',
      },
      {
        title: 'Side-by-Side Human Review Interface',
        detail: 'Split-screen UI showing the original PDF on the left and editable extracted fields on the right.',
      },
      {
        title: 'Confidence Scoring & Anomaly Flags',
        detail: 'Automatic highlighting of low-confidence fields, expired dates, or mismatched totals for reviewer attention.',
      },
      {
        title: 'Approved Export / System Sync',
        detail: 'Clean JSON, CSV, or scoped API push triggered only after human reviewer sign-off.',
      },
    ],
    processSteps: [
      {
        title: 'Sample Document & Schema Audit',
        detail: 'We inspect representative document samples (clean, scanned, multi-page) and define the target schema.',
      },
      {
        title: 'Extraction Pipeline & Validation Rules',
        detail: 'We combine OCR, vision-language models, and deterministic checksum/date validation.',
      },
      {
        title: 'Split-Screen Verification UI Build',
        detail: 'We build the human review workstation so staff can verify a document in seconds.',
      },
      {
        title: 'Accuracy Testing & Production Deployment',
        detail: 'We benchmark extraction precision and integrate approved outputs with your workflow.',
      },
    ],
    scopeConsiderations: [
      'Human review and confirmation are built into the workflow before extracted data is committed to financial, legal, or compliance systems.',
      'Handwritten notes, low-resolution scans, and bilingual Arabic/English stamps are tested during discovery to set realistic confidence thresholds.',
      'Document storage and retention can be configured to purge temporary files immediately after extraction if required.',
    ],
    faqs: [
      {
        q: 'What if a document is scanned crookedly or has a different layout?',
        a: 'Unlike coordinate-based legacy OCR that breaks when a table shifts by 10 pixels, modern vision-language extraction understands semantic layout while flagging illegible scans for human review.',
      },
      {
        q: 'Does the system push data straight into our accounting or ERP system automatically?',
        a: 'We strongly recommend our split-screen human review gate: the system does 95% of the typing and validation, and a staff member clicks "Approve" after a quick visual check.',
      },
      {
        q: 'Can it validate rules like "Trade license expiry date must be in the future"?',
        a: 'Yes. Once fields are extracted into a typed schema, deterministic validation rules automatically flag expired dates, missing signatures, or math discrepancies.',
      },
      {
        q: 'Can it handle both English and Arabic documents?',
        a: 'Yes. We configure extraction pipelines specifically tested on UAE bilingual documents, trade licenses, and contracts.',
      },
    ],
    visualNodes: ['PDF / Scan Intake', 'Vision + Schema Parse', 'Split-Screen Review', 'Approved Data Export'],
    relatedSlugs: ['knowledge-bases', 'workflow-automation', 'ai-governance'],
  },

  'ai-consulting': {
    isCoreDivisionService: true,
    headline: 'Practical AI implementation consulting grounded in commercial ROI.',
    description:
      'Cut through market hype with a clear audit of your workflows, data readiness, security requirements, and high-return pilot opportunities.',
    introduction: [
      'Leadership teams are surrounded by pressure to "adopt AI," yet many initiatives stall because they start with a trendy tool rather than an operational bottleneck. Building the wrong AI project wastes budget and erodes internal trust.',
      'Our AI Implementation Consulting practice gives executives and operations leaders an objective, vendor-neutral blueprint—evaluating where AI genuinely saves time or improves service, where simple deterministic software is better, and how to sequence a safe 90-day pilot.',
    ],
    whoItIsFor: [
      'Executives and COOs in Dubai wanting a clear, realistic AI roadmap before committing development budgets',
      'Organizations that have tried ad-hoc AI tools without seeing measurable operational improvements',
      'Companies needing to align IT security, legal compliance, and department heads around safe AI adoption',
    ],
    problemsAddressed: [
      'Investing in complex AI projects when a simpler workflow automation or UI improvement would solve the problem faster',
      'Shadow AI usage where employees paste confidential client documents into unapproved public web tools',
      'Unclear ROI metrics and lack of baseline measurements before starting an AI pilot',
      'Vendor lock-in from biased software pitches',
    ],
    deliverables: [
      {
        title: 'Departmental Workflow & Opportunity Audit',
        detail: 'Structured interviews and time-motion analysis identifying real operational bottlenecks.',
      },
      {
        title: 'AI vs. Deterministic Feasibility Matrix',
        detail: 'Honest classification of which problems need AI, which need standard automation, and which should remain manual.',
      },
      {
        title: 'Data Readiness & Privacy Architecture Review',
        detail: 'Assessment of your document quality, API availability, data residency, and security boundaries.',
      },
      {
        title: 'Prioritized 90-Day Pilot Specification',
        detail: 'Detailed technical scope, cost estimate, human review design, and success KPIs for your highest-value pilot.',
      },
      {
        title: 'Executive Briefing & Team Enablement Guide',
        detail: 'Clear presentation for leadership and practical usage guidelines for staff.',
      },
    ],
    processSteps: [
      {
        title: 'Stakeholder & Process Discovery',
        detail: 'We review how work currently flows across sales, operations, support, and knowledge management.',
      },
      {
        title: 'Data & Technical Readiness Assessment',
        detail: 'We inspect your existing software stack, document repositories, and security constraints.',
      },
      {
        title: 'Use-Case Scoring & Pilot Architecture',
        detail: 'We score candidate initiatives by commercial impact, technical feasibility, and risk.',
      },
      {
        title: 'Roadmap Delivery & Pilot Kickoff Option',
        detail: 'We deliver the complete implementation blueprint ready for internal or Moguls AI execution.',
      },
    ],
    scopeConsiderations: [
      'Delivered as a fixed-scope advisory engagement (typically 2 to 4 weeks) with zero obligation to purchase ongoing software.',
      'Recommendations explicitly prioritize human-in-the-loop safety and data privacy.',
      'Can transition directly into a scoped pilot build with Moguls AI if leadership chooses.',
    ],
    faqs: [
      {
        q: 'Will you tell us if a problem does NOT need AI?',
        a: 'Yes—and we do so frequently. Roughly half of the bottlenecks we audit are better solved with clean UI design or deterministic workflow automation rather than an LLM.',
      },
      {
        q: 'How long does an AI consulting engagement take?',
        a: 'A focused readiness audit and 90-day pilot blueprint typically takes 2 to 3 weeks from kickoff to executive presentation.',
      },
      {
        q: 'Do we need a massive data warehouse before starting with AI?',
        a: 'No. Most high-ROI initial projects—such as document extraction, internal SOP search, or inquiry triage—only require well-organized documents and clear process rules.',
      },
      {
        q: 'Can you help us establish internal AI usage guidelines for our staff?',
        a: 'Yes. We pair our consulting engagements with practical AI governance and acceptable-use policies so staff know which tools and data practices are approved.',
      },
    ],
    visualNodes: ['Workflow Bottleneck Audit', 'AI vs Rule Matrix', 'Data & Security Check', '90-Day Pilot Blueprint'],
    relatedSlugs: ['automation-roadmaps', 'ai-governance', 'workflow-automation'],
  },

  'agent-orchestration': {
    headline: 'Multi-step AI orchestration and supervisor workflows.',
    description:
      'Coordinate specialized extraction, retrieval, verification, and formatting steps inside a deterministic state machine with human checkpoints.',
    introduction: [
      'When a single monolithic prompt tries to read a long document, look up policy rules, cross-check numbers, and format a client report all at once, reliability drops sharply.',
      'We engineer multi-step orchestration pipelines—breaking complex tasks into small, specialized steps (such as Parser → Policy Retriever → Compliance Checker → Formatter) governed by a deterministic state machine and supervised by human reviewers.',
    ],
    whoItIsFor: [
      'Organizations automating complex multi-stage research, RFP preparation, or compliance review workflows',
      'Engineering teams hitting accuracy ceilings with single-prompt LLM calls',
      'Operations requiring strict separation between data extraction, rule verification, and output generation',
    ],
    problemsAddressed: [
      'Monolithic prompts that forget instructions or hallucinate details halfway through a complex task',
      'Difficulty debugging which step failed when an AI workflow produces an unsatisfactory draft',
      'Infinite loops or runaway token costs in unstructured multi-agent frameworks',
      'Lack of intermediate checkpoints where a human specialist can course-correct before the final step',
    ],
    deliverables: [
      {
        title: 'State-Machine Orchestration Graph',
        detail: 'Deterministic directed graph defining step order, retry conditions, and human pause states.',
      },
      {
        title: 'Specialized Sub-Task Prompts & Schemas',
        detail: 'Focused, narrow prompts and strict input/output schemas for each stage of the pipeline.',
      },
      {
        title: 'Automated Verifier / Critic Node',
        detail: 'Dedicated validation step that checks citations, completeness, and formatting before surfacing the draft.',
      },
      {
        title: 'Supervisor & Human Checkpoint UI',
        detail: 'Interface showing intermediate step outputs so reviewers can inspect or override any stage.',
      },
      {
        title: 'Execution Trace & Cost Guardrails',
        detail: 'Hard step limits, timeout budgets, and step-by-step observability logs.',
      },
    ],
    processSteps: [
      {
        title: 'Workflow Decomposition',
        detail: 'We break a complex human workflow into discrete, verifiable sub-tasks.',
      },
      {
        title: 'State Graph & Contract Engineering',
        detail: 'We define the typed JSON payload passed between each stage of the pipeline.',
      },
      {
        title: 'Verifier & Human Checkpoint Integration',
        detail: 'We add automated quality checks and human sign-off pauses at critical transitions.',
      },
      {
        title: 'End-to-End Trace Testing & Deployment',
        detail: 'We benchmark multi-step reliability and deploy with strict budget caps.',
      },
    ],
    scopeConsiderations: [
      'We avoid unconstrained "chatting agents" that loop unpredictably; all orchestration is built as a bounded, deterministic state graph.',
      'External data sources and downstream systems are connected subject to technical scoping.',
      'Human checkpoints are mandatory before final outputs are published or dispatched.',
    ],
    faqs: [
      {
        q: 'Why use a state machine instead of letting autonomous agents talk to each other freely?',
        a: 'Unbounded agent-to-agent chatter is slow, expensive, and prone to drifting off-topic. A deterministic state graph calling specialized AI steps is predictable, auditable, and easy to debug.',
      },
      {
        q: 'Can we use smaller, faster models for simple steps and larger models for complex reasoning?',
        a: 'Yes! That is one of the biggest advantages of orchestration—routing simple classification steps to fast, low-cost models and reserving frontier reasoning models for synthesis.',
      },
      {
        q: 'Can a human reviewer edit the output of Step 2 before Step 3 runs?',
        a: 'Yes. We design pause-and-resume checkpoints so a specialist can adjust an outline or extracted table before the final document is generated.',
      },
      {
        q: 'How do you prevent runaway API bills?',
        a: 'Every orchestration run has a hard maximum step count, token ceiling, and timeout enforced at the infrastructure level.',
      },
    ],
    visualNodes: ['1. Parse & Extract', '2. Retrieve Context', '3. Verifier Check', '4. Human Sign-Off'],
    relatedSlugs: ['ai-agents', 'workflow-automation', 'document-intelligence'],
  },

  'ai-governance': {
    headline: 'AI governance, safety guardrails, and operational oversight frameworks.',
    description:
      'Establish practical acceptable-use policies, prompt safety filters, PII redaction, and human review standards for your organization.',
    introduction: [
      'Adopting AI responsibly does not require a 200-page theoretical policy binder that no one reads. It requires practical technical guardrails, clear rules on what data can and cannot be sent to external APIs, and documented human accountability.',
      'We help organizations design and implement pragmatic AI governance—combining clear staff guidelines with technical controls like PII redaction, prompt injection filters, citation requirements, and audit logging.',
    ],
    whoItIsFor: [
      'Leadership, legal, and IT teams establishing clear boundaries for employee and customer-facing AI tools',
      'Regulated or high-trust sectors (finance, healthcare, real estate, professional services) deploying AI workflows',
      'Companies preparing customer-facing AI assistants that need rigorous red-teaming before launch',
    ],
    problemsAddressed: [
      'Employees pasting confidential client contracts or personal data into consumer AI accounts',
      'Customer-facing chatbots being tricked into off-brand statements or unauthorized commitments',
      'Lack of clear ownership over who reviews and approves AI outputs across departments',
      'Inability to answer enterprise client questionnaires about how your company handles AI and data privacy',
    ],
    deliverables: [
      {
        title: 'Internal AI Acceptable-Use Playbook',
        detail: 'Clear, practical rules for employees on approved tools, prohibited data types, and verification duties.',
      },
      {
        title: 'Technical Input/Output Guardrail Layer',
        detail: 'Automated filters for PII redaction, topic boundaries, and prompt-injection defense.',
      },
      {
        title: 'Human-in-the-Loop Accountability Matrix',
        detail: 'Definition of which workflows require 100% human sign-off vs. periodic sampling audits.',
      },
      {
        title: 'Adversarial Red-Team Evaluation Report',
        detail: 'Structured stress-testing of your AI prompts and assistants against jailbreaks and edge cases.',
      },
      {
        title: 'Audit Logging & Incident Response Protocol',
        detail: 'Procedures for monitoring outputs, revoking API keys, and rolling back behaviour immediately if needed.',
      },
    ],
    processSteps: [
      {
        title: 'Usage & Risk Surface Inventory',
        detail: 'We catalog all current and planned AI tools, data flows, and external touchpoints.',
      },
      {
        title: 'Policy & Human Oversight Design',
        detail: 'We draft concise, actionable rules for staff and define human review gates.',
      },
      {
        title: 'Technical Guardrail & Red-Team Testing',
        detail: 'We implement input/output filters and stress-test your AI workflows.',
      },
      {
        title: 'Team Training & Governance Handover',
        detail: 'We brief your leadership and operational teams on ongoing monitoring.',
      },
    ],
    scopeConsiderations: [
      'We provide technical and operational governance engineering; formal legal or regulatory certification opinion remains with your qualified legal counsel.',
      'Guardrail configurations are tailored to the specific model providers and hosting environments you use.',
      'Can be commissioned standalone or bundled with any Moguls AI implementation.',
    ],
    faqs: [
      {
        q: 'Does this replace our legal counsel?',
        a: 'No. We do not make unsupported legal claims or issue compliance certifications; instead, we implement the practical engineering guardrails, audit logs, and operational workflows your legal and IT teams require.',
      },
      {
        q: 'How do you stop a customer assistant from discussing competitors or politics?',
        a: 'We implement topic-classification guardrails and strict system instructions that politely redirect off-scope questions back to your core services.',
      },
      {
        q: 'How can we stop staff from leaking sensitive data into public AI tools?',
        a: 'The most effective solution combines a clear policy with providing staff a safe, enterprise-configured internal workspace where data training is disabled.',
      },
      {
        q: 'What is AI red-teaming?',
        a: 'Red-teaming is deliberate stress-testing where we throw ratusan tricky, adversarial, or confusing prompts at your assistant before launch to verify its guardrails hold up.',
      },
    ],
    visualNodes: ['Acceptable-Use Rules', 'PII & Input Filters', 'Red-Team Stress Test', 'Human Audit Trail'],
    relatedSlugs: ['ai-consulting', 'ai-agents', 'knowledge-bases'],
  },
};

