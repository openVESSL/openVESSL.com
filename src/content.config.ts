import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    vesselPart: z.string(),
    subtitle: z.string().optional(),
    tagline: z.string(),
    status: z.enum(['shipped', 'in-development']),
    repoUrl: z.string().url(),
    icon: z.string(),
    partNo: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { products };
