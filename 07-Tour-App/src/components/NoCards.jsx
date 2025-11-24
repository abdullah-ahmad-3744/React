import "./NoCards.css"
import data from "../data.json"
import { useState } from "react";
function NoCards() {
    const [freshTours, setFreshTourse] = useState([])



    function RefereshHandler(currentId) {
        let freshedTours = data.map((tour) => {
            freshTours.push(tour)
            return tour
        })
        console.log("Updated value:- ",freshedTours);
        setFreshTourse(freshedTours)
        console.log("Page Refereshed");
    }

    return (
        <div className="empty-card-container">
            {freshTours.length == 0 ?
                (
                <>
                <h1>No Tours Left</h1>
                <button onClick={RefereshHandler}>Referesh</button>
                </>) :
                (
                <>
                {freshTours.map((card) => {
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
            })
            }
                </>
            )
            }
        </div>
    )
}
export default NoCards