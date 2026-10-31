export function canonicalUrl(site: string, path: string) {return new URL(path, site).toString();}
