// Private key only on server. Guardrails, content scope and abuse prevention required.
export const prerender = false;
export function POST() {return new Response(JSON.stringify({error:'AI concierge is not enabled'}), {status:503,headers:{'Content-Type':'application/json'}});}
