import { NextResponse } from 'next/server'
import { AdminController } from '../../../src/modules/admin/admin.controller'

export async function GET() {
  const users = await AdminController.listUsers()
  return NextResponse.json(users)
}
