import { z } from 'zod'

export const createPostSchema = z.object({
  authorId: z.string(),
  content: z.string().min(1),
  attachments: z.array(z.string()).optional(),
})

export const updatePostSchema = z.object({
  content: z.string().optional(),
})
