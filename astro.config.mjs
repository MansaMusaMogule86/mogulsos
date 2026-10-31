import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
 site: process.env.PUBLIC_SITE_URL || 'https://mansasmoguls.com',
 output: 'static',
 adapter: vercel(),
 integrations: [react(), mdx(), sitemap()],
 vite: { plugins: [tailwindcss()] },
 build: { assets: '_assets' }
});
