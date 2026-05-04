import { useEffect, useState } from 'react'

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

type BoosterOpenProps = {
  booster: Booster
  cards: Card[]
  onClose: () => void
}

function BoosterOpen({ booster, cards, onClose }: BoosterOpenProps) {
  const [isOpening, setIsOpening] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpening(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="page page-booster">
      <div className="booster-open-shell">
        <div className="booster-pack-large">
          <span>{booster.name}</span>
        </div>
        <div className="booster-status">
          {isOpening ? 'Ouverture en cours...' : 'Cartes révélées !'}
        </div>

        {!isOpening && (
          <div className="booster-cards">
            {cards.map((card) => (
              <div key={card.id} className="booster-card">
                <img src={card.image} alt={card.name} />
                <h4>{card.name}</h4>
                <p>{card.types.join(', ')}</p>
              </div>
            ))}
          </div>
        )}

        <button className="close-booster" onClick={onClose}>
          Fermer
        </button>
      </div>
    </section>
  )
}

export default BoosterOpen
