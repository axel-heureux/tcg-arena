import { useState } from 'react'
import cards from '../cards.json'

type ShopProps = {
  username: string | null
  onStartBooster: (booster: Booster, cards: Card[]) => void
}

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

const boosters: Booster[] = [
  {
    id: 'kanto',
    name: 'Génération Classique Kanto',
    price: 120,
    description: 'Booster contenant les 151 cartes originales de la région de Kanto.',
  },
]

function Shop({ username, onStartBooster }: ShopProps) {
  const [message, setMessage] = useState('')
  const [credits, setCredits] = useState(500)

  const handleBuy = (booster: Booster) => {
    if (credits < booster.price) {
      setMessage('Crédits insuffisants pour acheter ce booster.')
      return
    }

    setCredits(credits - booster.price)
    setMessage(`Achat réussi : ${booster.name}`)

    const cardPool = [...(cards as Card[])]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    onStartBooster(booster, cardPool)
  }

  if (!username) {
    return (
      <section className="page page-shop">
        <h2>Boutique</h2>
        <p>Connecte-toi pour acheter des boosters.</p>
      </section>
    )
  }

  return (
    <section className="page page-shop">
      <div className="shop-header">
        <div>
          <h2>Boutique</h2>
          <p>Choisis un booster et achète-le pour améliorer ta collection.</p>
        </div>
        <div className="shop-info">
          <span>Joueur : {username}</span>
          <span>Crédits : {credits}</span>
        </div>
      </div>

      <div className="shop-grid">
        {boosters.map((booster) => (
          <article key={booster.id} className="shop-card">
            <h3>{booster.name}</h3>
            <p>{booster.description}</p>
            <p className="shop-price">Prix : {booster.price} crédits</p>
            <button onClick={() => handleBuy(booster)}>
              Acheter
            </button>
          </article>
        ))}
      </div>

      {message && <p className="success">{message}</p>}
    </section>
  )
}

export default Shop
