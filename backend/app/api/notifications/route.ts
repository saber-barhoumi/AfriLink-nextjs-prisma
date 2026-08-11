import { NextResponse } from 'next/server'
import { NotificationsController } from '../../../src/modules/notifications/notifications.controller'

export async function GET() {
  const items = await NotificationsController.list()
  return NextResponse.json(items)
}
