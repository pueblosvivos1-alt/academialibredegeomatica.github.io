import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  // Quitamos la desestructuración de { image } para que no intente procesar nada
  schema: z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    image: z.any().optional(), // Aceptamos cualquier cosa (texto o ruta)
    weight: z.number().optional(),
  }),
});

const indexCards = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.any().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  'docs': docs,
  'indexCards': indexCards,
};