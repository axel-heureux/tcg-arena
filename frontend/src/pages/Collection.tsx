import cards from '../cards.json'

type Card = {
  id: number
  name: string
  types: string[]
  hp: number
  stage: string
  image: string
}

const collectionIds = [1, 4, 7, 25, 143]

function Collection() {
  const cardList = (cards as Card[]).filter((card) => collectionIds.includes(card.id))

  return (
    <section className="page page-collection">
      <h2>Ma collection</h2>
      <p>Voici quelques cartes de ta collection personnelle.</p>
      <div className="card-grid">
        {cardList.map((card) => (
          <article key={card.id} className="card-item">
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <p>Type : {card.types.join(', ')}</p>
            <p>HP : {card.hp}</p>
            <p>Phase : {card.stage}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Collection
