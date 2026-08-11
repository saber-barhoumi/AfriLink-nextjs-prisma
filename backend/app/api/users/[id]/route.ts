import { NextRequest, NextResponse } from 'next/server'
import { UsersController } from '../../../../src/modules/users/users.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const user = await UsersController.getById(params.id)
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(user)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  try {
    const updated = await UsersController.update(params.id, body)
    return NextResponse.json(updated)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await UsersController.remove(params.id)
  return NextResponse.json({ ok: true })
}
