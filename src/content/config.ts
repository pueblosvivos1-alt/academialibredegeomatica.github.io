import { defineCollection, z } from 'astro:content';

// 1. Definición de la colección principal de Documentos/Cursos
const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    empresa: z.string().default("CAEG"),
    tipo: z.string().default("Curso"),
    image: z.string().optional(), // <--- ESTO ES LO QUE FALTA
    botonTexto: z.string().default("ACCESO"),
    weight: z.number().default(99),
  }),
});

// 2. Definición de la colección de Tarjetas de Inicio
const indexCards = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  }),
});

// 3. Exportación de las colecciones
export const collections = {
  'docs': docs,
  'index-cards': indexCards,
};