
"use client"

import { useState } from "react"

export default function CreateForm() {
  

  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [durum, setDurum] = useState('normal')
  const [isLoading, setIsLoading] = useState(false)

  

  return (
    <form className="w-1/2">
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