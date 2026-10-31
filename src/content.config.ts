import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/README.md'],
    base: './src/content/insights',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(false),
    pubDate: z.coerce.date(),
    readingTime: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    author: z.string().default('Mansas Moguls Editorial'),
  }),
});

const caseStudies = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/README.md'],
    base: './src/content/case-studies',
  }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    division: z.enum(['digital', 'ai', 'growth', 'creative', 'strategy']),
    industry: z.string(),
    summary: z.string(),
    challenge: z.string(),
    solution: z.string(),
    deliverables: z.array(z.string()).default([]),
    desktopPreviewImage: z.string().optional(),
    mobilePreviewImage: z.string().optional(),
    liveUrl: z.string().url().optional(),
    embedUrl: z.string().url().optional(),
    approved: z.boolean().default(false),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { insights, caseStudies };
