import { useState } from "react"
import { cards } from "../assets/data/cards"
import Card from "./Card"

const Cards2 = () => {

    const [selectedCardId, setSelectedCardId] = useState()

	let readMoreContent = <p>Please choose content</p>

	const showContent = (cardId) => {
		setSelectedCardId(cardId)
	}

	const selectedCard = cards.find(c => c.id === selectedCardId)
	if (selectedCard) {
		readMoreContent = selectedCard.content
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
            <div className='content'>
                {readMoreContent && readMoreContent}
                {!readMoreContent && 'No content'}
            </div>
        </>
    )
}

export default Cards2