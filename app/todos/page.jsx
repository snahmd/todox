import Loading from "../loading"
import TodoList from "./TodoList"
import { Suspense } from 'react'

export default function Todos() {
  return (
    <main >
        <nav>
          <div>
            <h2>Yapilacaklar</h2>
            <p><small>Aktif olan yapilacaklar</small></p>
          </div>
        </nav>
        <Suspense fallback={<Loading />}>
          <TodoList />
        </Suspense>
    </main>
  )
}
