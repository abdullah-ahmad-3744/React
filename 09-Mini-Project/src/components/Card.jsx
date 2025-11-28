import './Card.css'
import {FcLike} from 'react-icons/fc'
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';




function Card ({course}) {
    const [isLiked, setIsLiked] = useState(false)

    function LikeHandler() {
        setIsLiked(!isLiked)
    }
    return (
        <div className="card-container">

            <div className="image">
                <img src={course.image.url} alt="" />
            </div>

            <div className="icon">
                <button onClick={LikeHandler}>
                    {isLiked ? (<><FcLike fontSize = "1.75rem"/></>) : (<><AiOutlineHeart fontSize = "1.75rem"/></>)}
                </button>
            </div>


            <div className="card-title">
                <h4>{course.title}</h4>
            </div>

            <div className="card-description">
                <p>{course.description}</p>
            </div>
        </div>
    )
}
export default Card  