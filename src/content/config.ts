import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  // El schema es el "contrato" que le dice a Astro qué datos esperar
  schema: ({ image }) => z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(), // Cambiado de "tipo de curso" a "tipo" para que coincida con tu .md
    botonTexto: z.string().optional(),
    image: image().optional(),
    weight: z.number().optional(),
  }),
});

export const collections = {
  'docs': docs,
};