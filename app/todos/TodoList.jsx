import React from 'react'

async function fetchTodos() {
  const res = await fetch('http://localhost:4000/todos')
  const data =  await res.json()
  return data
}

export default async function TodoList() {
    const todos = await fetchTodos()
  return (
    <>
        {todos.map((todo) => (
            <div key={todo.id} className={`card my-5 ${todo.durum}`}>
                <h3>{todo.baslik}</h3>
                <p>{todo.aciklama.slice(0,200)}...</p>
                <div className={`pill ${todo.durum}`}>
                    {todo.durum}
                </div>
            </div>
        ))}
        {todos.length === 0 && <p className='text-center'>Henüz hiç todo eklenmemiş.</p>}
    </>
  )
}
