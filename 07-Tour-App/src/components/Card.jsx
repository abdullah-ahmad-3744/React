import "./Card.css"
import { useState } from "react"
import NoCards from "./NoCards"
import data from "../data.json"
function Card() {
    const [remainingCards, setRemainingCards] = useState(data)


    
    function NotInterestedHandler(currentId) {
        let filteredData = remainingCards.filter((remainingCard) => {
            if (remainingCard.id !== currentId) {
                return remainingCard
            }
        })
        setRemainingCards(filteredData)
    }
    function InterestedHandler(currentId) {
        let interestedCard = remainingCards.filter ( (card) => {
            if (currentId == card.id) {
                return card                
            }
        })        
                setRemainingCards(interestedCard)     
    }
    return (
        <>
        {remainingCards.length == 0 ? <NoCards/> : " "}
            {remainingCards.map((card) => {
                return (
                    <div className="card" key={card.id}>
                        <img src={card.image} alt="" />
                        <h3>{card.price}</h3>
                        <h3>{card.city}</h3>
                        <p>{card.description}</p>
                        <div className="buttons">
                            <button onClick={() => NotInterestedHandler(card.id)}  className="not-interested">Not Interested</button>
                            <button onClick={() =>InterestedHandler(card.id)}  className="interested">Interested</button>
                        </div>
                    </div>
                )
            })}
        </>

    )
}
export default Card;