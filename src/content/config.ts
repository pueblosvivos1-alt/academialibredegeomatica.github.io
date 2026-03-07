import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    image: image().optional(),
    weight: z.number().optional(),
  }),
});

export const collections = {
  'docs': docs,
};