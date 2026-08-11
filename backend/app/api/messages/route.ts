import { NextRequest, NextResponse } from 'next/server'
import { MessagesController } from '../../../src/modules/messages/messages.controller'

export async function GET() {
  const messages = await MessagesController.list()
  return NextResponse.json(messages)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const m = await MessagesController.send(body)
  return NextResponse.json(m)
}
