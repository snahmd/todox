import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch('http://localhost:4000/todos')

  const todos = await res.json()

  return NextResponse.json(todos, {
    status: 200
  })
}


export async function POST(request) {
  const todo = await request.json()

  const res = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(todo)
  })

  const yeniTodo = await res.json()

  return NextResponse.json(yeniTodo, {
    status: 201
  })
}