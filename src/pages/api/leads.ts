// Placeholder only. Never accept production leads until captcha, server-side validation,
// consent, rate limiting, abuse controls and GHL integration are implemented.
export const prerender = false;
export function POST() { return new Response(JSON.stringify({error:'Lead capture is not configured'}), {status:503, headers:{'Content-Type':'application/json'}}); }
