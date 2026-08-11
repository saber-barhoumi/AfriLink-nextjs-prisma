import { NextRequest, NextResponse } from 'next/server'
import { AuthController } from '../../../src/modules/auth/auth.controller'

export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
    const result = await AuthController.login(body)
    return NextResponse.json(result)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
