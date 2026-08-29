import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
	schema: z.object({
		role: z.string(),
		company: z.string(),
		start: z.coerce.date(),
		end: z.coerce.date().optional(),
		current: z.boolean().default(false),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const caseStudies = defineCollection({
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		year: z.coerce.number().int(),
		client: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { experience, caseStudies };