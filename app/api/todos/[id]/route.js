import { NextResponse } from "next/server"

export async function GET(_, { params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/todos/${id}`)
  const todo = await res.json()

  if (!res.ok) {
    return NextResponse.json({error: 'Yapılacak Bulunamadı'}, {
      status: 404
    })
  }

  return NextResponse.json(todo, {
    status: 200
  })
}