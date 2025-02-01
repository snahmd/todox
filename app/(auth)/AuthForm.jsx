"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [parola, setParola] = useState('')

  return (
    <form>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />
      </label>
      <label>
        <span>Parola:</span>
        <input 
          type="password" 
          onChange={(e) => setParola(e.target.value)}
          value={parola}
          required 
        />
      </label>
      <button className="bg-secondary text-black">Gönder</button>
    </form>
  )
}
