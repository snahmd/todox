import CreateForm from './CreateForm'

export default async function CreateTodo() {
  return (
    <main>
      <h3 className="text-center mb-4">Yeni Bir Yapılacak Ekle</h3>
      <CreateForm />
    </main>
  )
}