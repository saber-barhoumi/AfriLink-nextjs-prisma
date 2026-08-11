import { NextRequest, NextResponse } from 'next/server'
import { CommentsController } from '../../../../src/modules/comments/comments.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const c = await CommentsController.getById(params.id)
  if (!c) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(c)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await CommentsController.remove(params.id)
  return NextResponse.json({ ok: true })
}
