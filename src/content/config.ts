import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    empresa: z.string().default("CAEG"),
    tipo: z.string().default("Curso"),
    image: z.string().optional(), // Definido como string para evitar validaciones de assets
    botonTexto: z.string().default("ACCESO"),
    weight: z.number().default(99),
  }),
});

const indexCards = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  'docs': docs,
  'index-cards': indexCards,
};