import { NextRequest, NextResponse } from 'next/server'
import { ConnectionsController } from '../../../../src/modules/connections/connections.controller'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = await ConnectionsController.update(params.id, body)
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await ConnectionsController.remove(params.id)
  return NextResponse.json({ ok: true })
}
