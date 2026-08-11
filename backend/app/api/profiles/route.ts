import { NextRequest, NextResponse } from 'next/server'
import { ProfilesController } from '../../../src/modules/profiles/profiles.controller'

export async function GET() {
  const profiles = await ProfilesController.list()
  return NextResponse.json(profiles)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const profile = await ProfilesController.create(body)
  return NextResponse.json(profile)
}
