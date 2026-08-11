import { NextRequest, NextResponse } from 'next/server'
import { MessagesController } from '../../../../src/modules/messages/messages.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const m = await MessagesController.getById(params.id)
  if (!m) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(m)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await MessagesController.remove(params.id)
  return NextResponse.json({ ok: true })
}
