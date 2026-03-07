import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    weight: z.number().optional(),
    // HE BORRADO LA LÍNEA DE IMAGE AQUÍ
  }),
});

const indexCards = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
    // HE BORRADO LA LÍNEA DE IMAGE AQUÍ
  }),
});

export const collections = { 
  'docs': docs, 
  'index-cards': indexCards 
};