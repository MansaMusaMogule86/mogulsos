export const prerender = false;
export function GET() { return new Response(JSON.stringify({status: 'ok', service: 'mansas-moguls'}), {headers: {'Content-Type': 'application/json'}}); }
