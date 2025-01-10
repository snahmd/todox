import Link from 'next/link'
import React from 'react'

async function fetchTodos() {
  const res = await fetch('http://localhost:4000/todos', {
    next:{
      revalidate:15  
    }
  })
  return res.json()
}

export default async function TodoList() {
    const todos = await fetchTodos()
  return (
    <>
        {todos.map((todo) => (
            <div key={todo.id} className={`card my-5 ${todo.durum}`}>
                <Link href={`/todos/${todo.id}`}>
                <h3>{todo.baslik}</h3>
                <p>{todo.aciklama.slice(0,200)}...</p>
                <div className={`pill ${todo.durum} ${todo.durum=="acil" ? "hareket" : ""}`}>
		              {todo.durum}
                </div>
                </Link>
            </div>
        ))}
        {todos.length === 0 && <p className='text-center'>Henüz hiç todo eklenmemiş.</p>}
    </>
  )
}
