import { NextRequest } from 'next/server'

export function requireAuth(req: NextRequest) {
  // Minimal placeholder: in real app integrate NextAuth session
  const auth = req.headers.get('authorization')
  if (!auth) throw new Error('Unauthorized')
  return { userId: auth.replace('Bearer ', '') }
}
