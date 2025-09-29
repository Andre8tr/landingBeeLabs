import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    description: z.string().optional(),
    // ✅ Agregar los campos opcionales:
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
})

export const collections = { blog }
