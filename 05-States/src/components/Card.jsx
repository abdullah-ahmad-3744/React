import "./Card.css"
import { useState } from "react"

function Card () {
    const [heading, setHeading] = useState("Card")




    function HeadingHandler () {
        setHeading("New Heading")
        console.log("Heading Updated");
        
    }


    
    return (
        <div className="card-container">
            <h2>{heading}</h2>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, porro.</p>
            <button onClick={HeadingHandler}>Update Heading</button>
        </div>
    )
}
export default Card