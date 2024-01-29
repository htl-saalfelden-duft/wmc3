import { useState } from "react"
import { cards } from "../assets/data/cards"
import Card from "./Card"

const Cards = () => {
    const [selectedCardId, setSelectedCardId] = useState()

    let readMoreContent = <p>Please choose content</p>
  
    const showContent = (cardId) => {
      setSelectedCardId(cardId)
    }
  
    const selectedCard = cards.find(c => c.id === selectedCardId)
    if (selectedCard) {
      readMoreContent = <div className="content">{selectedCard.content}</div>
    }

    return (
        <>
            <div className="card-container">
                {cards.map((card) =>
                    <Card
                        key={card.id}
                        title={card.title}
                        img={card.img}
                        showContent={() => showContent(card.id)}
                        isSelected={card.id === selectedCardId}
                    >{card.content}</Card>
                )}
            </div>
            <div className='content-container'>
                {readMoreContent && readMoreContent}
                {!readMoreContent && 'No content'}
            </div>
        </>
    )
}

export default Cards