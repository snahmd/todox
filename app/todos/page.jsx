import TodoList from "./TodoList"

export default function Todos() {
  return (
    <main >
        <nav>
          <div>
            <h2>Yapilacaklar</h2>
            <p><small>Aktif olan yapilacaklar</small></p>
          </div>
        </nav>
        <TodoList />
    </main>
  )
}
