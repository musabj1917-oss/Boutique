import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json()
  return NextResponse.json({ ok: true, message: 'Inquiry received. Connect this handler to PostgreSQL/Prisma/Drizzle.', payload }, { status: 201 })
}

export async function GET() {
  return NextResponse.json({ items: [], message: 'Inquiry listing placeholder.' })
}
