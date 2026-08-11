import { NextRequest, NextResponse } from 'next/server'
import { PostsController } from '../../../../src/modules/posts/posts.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const p = await PostsController.getById(params.id)
  if (!p) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(p)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = await PostsController.update(params.id, body)
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await PostsController.remove(params.id)
  return NextResponse.json({ ok: true })
}
