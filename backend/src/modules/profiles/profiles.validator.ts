import { z } from 'zod'

export const profileCreateSchema = z.object({
  userId: z.string(),
  headline: z.string().optional(),
  bio: z.string().optional(),
})
