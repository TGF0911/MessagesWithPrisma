import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

export const Logon: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleLogon(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const res = await api.get('/sessions')
      localStorage.setItem('Username', res.data.nome)
      history.push('/profile')

    } catch (err) {
      alert('Falha ao logar. Tente novamente')
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit= {handleLogon}>
        <label htmlFor="email">Email:</label>
        <input />

      </form>

    </div>
  )
}