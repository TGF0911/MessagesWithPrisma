import React, { useState, FormEvent } from 'react'

// import api from '../../services/api'

export const SingIn: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e : FormEvent<HTMLFormElement>) {
    e.preventDefault()


  }

  return (
    <div className="singin">
      <h1>Cadastro de Usuário</h1>

      <form onSubmit = {handleSubmit}>


        <label htmlFor="nome" >Nome:</label>
        <input 
        type="text"
        id="nome" 
        placeholder="Digite seu nome"
        value = {name}
        onChange = {e => setName(e.target.value)}
        />

        <label htmlFor="email" >Email:</label>
        <input 
        type="text" 
        id="email" 
        placeholder="Digite seu email" 
        value = {email}
        onChange = {e => setEmail(e.target.value)}
        />

        <label htmlFor="password" >Senha:</label>
        <input 
        type="password" 
        id="password" 
        placeholder="Digite sua senha"
        value = {password}
        onChange = {e => setPassword(e.target.value)}
        />

        <button type="submit" >Cadastrar</button>
      </form>
    </div>
  )
}