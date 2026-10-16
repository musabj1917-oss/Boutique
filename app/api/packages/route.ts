import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [], message: 'Package listing placeholder. Connect this handler to PostgreSQL/Prisma/Drizzle.' })
}

export async function POST(request: Request) {
  const payload = await request.json()
  return NextResponse.json({ ok: true, message: 'Package created. Connect this handler to your database.', payload }, { status: 201 })
}
