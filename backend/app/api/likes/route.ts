import { NextRequest, NextResponse } from 'next/server'
import { LikesController } from '../../src/modules/likes/likes.controller'

export async function GET() {
  const all = await LikesController.list()
  return NextResponse.json(all)
}
