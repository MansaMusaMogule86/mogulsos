export const prerender = false;
export function POST() {return new Response(JSON.stringify({error:'Newsletter is not configured'}), {status:503,headers:{'Content-Type':'application/json'}});}
