import { defineCollection, z } from 'astro:content';

// 1. Definición de la colección de Documentos/Cursos
const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(),
    botonTexto: z.string().optional(),
    // Cambiado a z.string() para que Astro no intente procesar la imagen como archivo
    image: z.string().optional(), 
    weight: z.number().optional(),
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

// 3. Exportación de colecciones
export const collections = { 
  'docs': docs, 
  'index-cards': indexCards 
};