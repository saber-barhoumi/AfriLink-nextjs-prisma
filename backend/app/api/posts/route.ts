import { NextRequest, NextResponse } from 'next/server'
import { PostsController } from '../../../src/modules/posts/posts.controller'

export async function GET(req: NextRequest) {
  const q = Object.fromEntries(req.nextUrl.searchParams.entries())
  const posts = await PostsController.list(q)
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const post = await PostsController.create(body)
  return NextResponse.json(post)
}
