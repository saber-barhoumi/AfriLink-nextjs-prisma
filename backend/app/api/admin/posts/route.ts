import { NextResponse } from 'next/server'
import { AdminController } from '../../../src/modules/admin/admin.controller'

export async function GET() {
  const posts = await AdminController.listPosts()
  return NextResponse.json(posts)
}
