import { NextRequest, NextResponse } from 'next/server'
import { NotificationsController } from '../../../../src/modules/notifications/notifications.controller'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json()
  const updated = await NotificationsController.update(params.id, body)
  return NextResponse.json(updated)
}
