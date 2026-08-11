import { NextRequest, NextResponse } from 'next/server'
import { ProfilesController } from '../../../../src/modules/profiles/profiles.controller'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const p = await ProfilesController.getById(params.id)
  if (!p) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(p)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = await ProfilesController.update(params.id, body)
  return NextResponse.json(updated)
}
