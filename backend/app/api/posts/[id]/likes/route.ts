import { NextRequest, NextResponse } from 'next/server'
import { LikesController } from '../../../../../../src/modules/likes/likes.controller'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const result = await LikesController.toggleForPost(params.id, await req.json())
  return NextResponse.json(result)
}
