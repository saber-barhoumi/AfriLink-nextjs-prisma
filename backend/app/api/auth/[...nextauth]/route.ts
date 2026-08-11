import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'NextAuth placeholder - configure NextAuth in src/modules/auth' })
}
