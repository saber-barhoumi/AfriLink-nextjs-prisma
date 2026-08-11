import { NextRequest, NextResponse } from 'next/server'
import { ConnectionsController } from '../../../src/modules/connections/connections.controller'

export async function GET() {
  const list = await ConnectionsController.list()
  return NextResponse.json(list)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const c = await ConnectionsController.request(body)
  return NextResponse.json(c)
}
