import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch('http://localhost:4000/todos')

  const todos = await res.json()

  return NextResponse.json(todos, {
    status: 200
  })
}
