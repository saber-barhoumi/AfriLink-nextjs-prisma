import { ZodSchema } from 'zod'

export function validate(schema: ZodSchema, data: any) {
  const result = schema.safeParse(data)
  if (!result.success) {
    const err = result.error.format()
    throw new Error(JSON.stringify(err))
  }
  return result.data
}
