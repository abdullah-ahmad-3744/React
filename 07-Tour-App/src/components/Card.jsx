import { useState } from "react";
import "./Card.css"
function Card({id, image, city , price , description, RemoveTour}) {
    const [readMore, setReadMore] = useState(false);
     const info =  readMore ? description : `${description.substring(0, 200)}....`


    function ReadMoreHandler() {
        setReadMore(!readMore)
    }
    return (
        <div className="card">
            <img src={image} alt=""  className="image"/>
            <div className="tour-details">
                <h3 className="tour-price">{price}</h3>
                <h3 className="tour-city">{city}</h3>
            </div>
            <div className="tour-description">
                <p>{info}</p>
                <span className="read-more" onClick={ReadMoreHandler}>
                    {readMore ? "Show Less" : "Read More"}
                </span>
            </div>
            <div className="buttons">
                <button onClick={() => RemoveTour(id)}>Not Interested</button>
            </div>
        </div>
    )
}
export default Card;