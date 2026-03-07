const docs = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    empresa: z.string().optional(),
    tipo: z.string().optional(), // Cambiado de "tipo de curso" a "tipo"
    image: image().optional(),
    botonTexto: z.string().optional(),
    weight: z.number().optional(),
  }),
});