import { FormEvent, useState } from 'react'

type LoginProps = {
  onSuccess: (username: string) => void
}

function Login({ onSuccess }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    setError('')

    if (!username || !password) {
      setError('Veuillez remplir le nom d\'utilisateur et le mot de passe.')
      return
    }

    setMessage('Connexion simulée...')
    setTimeout(() => {
      onSuccess(username)
      setMessage('Connexion réussie !')
    }, 300)
  }

  return (
    <section className="page page-login">
      <h2>Portail de connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </section>
  )
}

export default Login
