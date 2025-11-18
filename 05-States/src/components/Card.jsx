import "./Card.css"
import { useState } from "react"

function Card () {
    const [heading, setHeading] = useState("Card")
   const [description, setDesciption] = useState("This is the default description of the Card...")


    function HeadingHandler () {
       let user_input = prompt("Enter Card Heading")        
        setHeading(user_input)
        console.log("Heading Updated");
    }

    function DescriptionHandler() {
        let description = prompt("Enter Card Description")
        setDesciption(description)
    }
    
    return (
        <div className="card-container">
            <h2>{heading}</h2>
            <h3>Description</h3>
            <p>{description}</p>
            <div className="buttons">
                <button onClick={HeadingHandler}>Update Heading</button>
            <button onClick={DescriptionHandler}>Description Handler</button>
            </div>
        </div>
    )
}
export default Card