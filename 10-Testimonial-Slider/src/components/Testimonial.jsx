import "./Testimonial.css"
import Card from "./Card"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import { useState } from "react"
function Testimonial({ reviews }) {
    const [index, setIndex] = useState(0)
    

    function leftShiftHandler () {
        if (index <= 0 ) {
            setIndex(reviews.length-1)
        } else if (reviews.length > 0) {
            setIndex(index - 1) 
        }
    }

    function rightShiftHandler () {
        if (index >=  reviews.length-1) {
            setIndex(0)
        } else if  (index > 0 || index <= reviews.length-1) {
            setIndex(index + 1)
        }

    }

    function surpriseHandler () {
        let random_number = Math.round (Math.random() * 14)
        setIndex(random_number)
        console.log("random number= ", random_number);
        
        console.log("Surprise Clicked:- ")

    }
    return (
        <div className="testimonial-container">
            <Card review={reviews[index]} />


            <div className="buttons">
                <button  onClick={leftShiftHandler}> < FiChevronLeft /></button>
                <button  onClick={rightShiftHandler}> < FiChevronRight/></button>
            </div>
            <div className="surprise-me">
                <button onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    )
}
export default Testimonial