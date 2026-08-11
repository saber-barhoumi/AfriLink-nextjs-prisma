import { NextRequest, NextResponse } from 'next/server'
import { CommentsController } from '../../../../../../src/modules/comments/comments.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const comments = await CommentsController.listByPost(params.id)
  return NextResponse.json(comments)
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const comment = await CommentsController.createForPost(params.id, body)
  return NextResponse.json(comment)
}
