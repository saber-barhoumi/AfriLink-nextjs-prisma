import { NextResponse } from 'next/server'
import { AdminController } from '../../../src/modules/admin/admin.controller'

export async function GET() {
  const stats = await AdminController.stats()
  return NextResponse.json(stats)
}
