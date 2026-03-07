import { defineCollection, z } from 'astro:content';

// Colección para los Cursos
const docs = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    empresa: z.string().default("CAEG"),
    tipo: z.string().default("Curso corto"),
    botonTexto: z.string().default("ACCESO"),
    image: z.any().optional(), // Cambiado a 'any' para evitar bloqueos
    weight: z.number().optional(),
  }),
});

// Colección para la Página de Inicio
const indexCards = defineCollection({
  schema: ({ image }) => z.object({
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