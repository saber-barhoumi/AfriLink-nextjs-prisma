import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_URL: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  REDIS_URL: z.string().optional(),
})

export const env = envSchema.parse(process.env)

export default env
