import { defineCollection, z } from 'astro:content';

// Colección para los Cursos (Carpeta /content/docs/)
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

// Colección para la Página de Inicio (Carpeta /content/indexCards/)
// ESTO ES LO QUE FALTABA Y CAUSABA EL ERROR DE "indexCards does not exist"
const indexCards = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: image().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  'docs': docs,
  'indexCards': indexCards, 
};