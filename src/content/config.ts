import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    image: z.string().optional(), // <--- Cambiado de 'image()' a 'z.string()'
    weight: z.number().optional(),
  }),
});

const indexCards = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(), // <--- También aquí como string
    link: z.string().optional(),
  }),
});

export const collections = { 'docs': docs, 'indexCards': indexCards };