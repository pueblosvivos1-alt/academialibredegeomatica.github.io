import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    // Cambiamos .default por .optional() para que no ensucie las categorías
    empresa: z.string().optional(), 
    tipo: z.string().optional(),
    image: z.string().optional(),
    botonTexto: z.string().optional(),
    // 🚀 EL CAMPO FALTANTE:
    url_destino: z.string().optional(), 
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