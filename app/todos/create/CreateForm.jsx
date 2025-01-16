
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateForm() {
 

  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [durum, setDurum] = useState('normal')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const yeniTodo = { baslik, aciklama, durum, user_email: 'luffy@gmail.com' }

    const res = await fetch('http://localhost:4000/todos', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(yeniTodo)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/todos')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Başlık:</span>
        <input
          required 
          type="text"
          onChange={(e) => setBaslik(e.target.value)}
          value={baslik}
        />
      </label>
      <label>
        <span>Açıklama:</span>
        <textarea
          required
          onChange={(e) => setAciklama(e.target.value)}
          value={aciklama}
        />
      </label>
      <label>
        <span>Durum:</span>
        <select 
          onChange={(e) => setDurum(e.target.value)}
          value={durum}
        >
          <option value="normal">Normal</option>
          <option value="acil">Acil</option>
        </select>
      </label>
      <button 
        className="bg-secondary text-black" 
        disabled={isLoading}
      >
      {isLoading && <span>Ekleniyor...</span>}
      {!isLoading && <span>Yapılacak Ekle</span>}
    </button>
    </form>
  )
}