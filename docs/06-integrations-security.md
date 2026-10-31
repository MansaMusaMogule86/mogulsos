# CRM and Integration Design

GoHighLevel v1: central lead pipeline. Fields: name, email, phone, company,
service division, service, budget band (optional), timeframe, description,
UTM attribution, consent source/time. Do not collect unnecessary sensitive data.

Flow: client form -> captcha + validation -> rate limits -> server endpoint ->
GHL API -> confirmation and optional notification. Implement retries and idempotency.
No secret in browser bundles. Log only safe metadata, keep PII out of analytics.

Optional integrations only after requirements: appointment booking, email delivery,
WhatsApp opt-in, consent manager, analytics, Sentry and a gated AI concierge.
Database: none for core brochure/portfolio site; optional Supabase only if workflow requires durable state.
Never ship placeholder API endpoints as working features.
