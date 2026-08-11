import { NextRequest, NextResponse } from 'next/server'
import { CommentsController } from '../../../src/modules/comments/comments.controller'

export async function GET() {
  const c = await CommentsController.list()
  return NextResponse.json(c)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const comment = await CommentsController.create(body)
  return NextResponse.json(comment)
}
