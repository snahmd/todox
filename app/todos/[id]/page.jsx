import { notFound } from "next/navigation"

export const dynamicParams = true 

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/todos')
  
    const todos = await res.json()
   
    return todos.map((todo) => ({
      id: todo.id
    }))
  }
  

async function getTodo(id) {
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
        next:{
            revalidate:15
        }
    })
    if (!res.ok) {
        notFound()
      }
    return res.json()
}

export default async function TodoDetay({params}) {
    const todo = await getTodo(params.id)
  return (
    <main>
        <nav>
            <h2>Yapilacak Detayi</h2>
        </nav>
        <div className={`card my-5 ${todo.durum}`}>
            <h3>{todo.baslik}</h3>
            <small>Olusturan: {todo.kullanici_email}</small>
            <p>{todo.aciklama}</p>
            <div className={`pill ${todo.durum}`}>{todo.durum}</div>
        </div>
    </main>
  )
}
