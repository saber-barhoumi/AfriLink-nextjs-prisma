import { NextRequest, NextResponse } from 'next/server'
import { UsersController } from '../../../src/modules/users/users.controller'

export async function GET(req: NextRequest) {
  const q = Object.fromEntries(req.nextUrl.searchParams.entries())
  const users = await UsersController.list(q)
  return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
    const user = await UsersController.create(body)
    return NextResponse.json(user)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
