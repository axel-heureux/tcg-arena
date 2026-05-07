import cards from '../cards.json'

type Card = {
  id: number
  name: string
  types: string[]
  hp: number
  stage: string
  image: string
}

function Cards() {
  const unlockedIds = [1, 4, 7, 25, 143]
  const cardList = cards as Card[]

  return (
    <section className="page page-cards">
      <h2>Liste des cartes</h2>
      <div className="card-grid">
        {cardList.map((card) => {
          const unlocked = unlockedIds.includes(card.id)
          return (
            <article
              key={card.id}
              className={`card-item ${unlocked ? '' : 'locked'}`}
            >
              <h3>{card.name}</h3>
              <p>Type : {card.types.join(', ')}</p>
              <p>Points de vie : {card.hp}</p>
              <p>Phase : {card.stage}</p>
              <img src={card.image} alt={card.name} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Cards
