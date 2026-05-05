import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './login'
import Cards from './pages/Cards'
import Collection from './pages/Collection'
import Shop from './pages/Shop'
import Profile from './pages/Profile'
import BoosterOpen from './pages/BoosterOpen'

type Booster = {
  id: string
  name: string
  price: number
  description: string
}

type Card = {
  id: number
  name: string
  types: string[]
  hp: number
  stage: string
  image: string
}

type Page = 'home' | 'login' | 'cards' | 'collection' | 'shop' | 'profile' | 'booster'

type BoosterSession = {
  booster: Booster
  cards: Card[]
}

function App() {
  const [page, setPage] = useState<Page>('home')
  const [username, setUsername] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string>('')
  const [boosterSession, setBoosterSession] = useState<BoosterSession | null>(null)

  const handleLoginSuccess = (name: string) => {
    setUsername(name)
    setAvatarUrl('')
    setPage('profile')
  }

  const handleProfileUpdate = (name: string, avatar: string) => {
    setUsername(name)
    setAvatarUrl(avatar)
  }

  const handleLogout = () => {
    setUsername(null)
    setPage('home')
  }

  const handleStartBooster = (booster: Booster, cards: Card[]) => {
    setBoosterSession({ booster, cards })
    setPage('booster')
  }

  const handleCloseBooster = () => {
    setBoosterSession(null)
    setPage('shop')
  }

  return (
    <div className="app-shell">
      {page !== 'booster' && (
        <header className="app-header">
          <div>
            <h1>TCG Arena</h1>
            <p>Un espace simple pour l’accueil, la connexion, les cartes et le profil.</p>
          </div>
          <nav>
            <button onClick={() => setPage('home')}>Accueil</button>
            {!username && <button onClick={() => setPage('login')}>Login</button>}
            <button onClick={() => setPage('cards')}>Cartes</button>
            <button onClick={() => setPage('collection')}>Ma collection</button>
            <button onClick={() => setPage('shop')}>Boutique</button>
            <button onClick={() => setPage('profile')} disabled={!username}>
              Profil
            </button>
          </nav>
        </header>
      )}

      <main className="app-main">
        {page === 'home' && <Home />}
        {page === 'login' && !username && <Login onSuccess={handleLoginSuccess} />}
        {page === 'cards' && <Cards />}
        {page === 'collection' && <Collection />}
        {page === 'shop' && <Shop username={username} onStartBooster={handleStartBooster} />}
        {page === 'profile' && (
          <Profile username={username} avatarUrl={avatarUrl} onUpdateProfile={handleProfileUpdate} onLogout={handleLogout} />
        )}
        {page === 'booster' && boosterSession && (
          <BoosterOpen booster={boosterSession.booster} cards={boosterSession.cards} onClose={handleCloseBooster} />
        )}
      </main>
    </div>
  )
}

export default App
