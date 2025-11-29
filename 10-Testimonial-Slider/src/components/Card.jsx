import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card ({reviews}) {
    return (
        <div className="card-container">
            {reviews.map ( (review) => {
                return(
                    <div className="card" key={review.id}>


                        <div className="image">
                            <img src= {review.image} alt="" />
                        </div>

                        <div className="name">
                            <p>{review.name}</p>
                        </div>

                        <div className="post">
                            <p>{review.job}</p>
                        </div>

                        <div className="left-quote-icon">
                            <FaQuoteLeft />
                        </div>

                        <div className="review-text">
                            <p>{review.text}</p>
                        </div>

                        <div className="left-quote-icon">
                            <FaQuoteRight />
                        </div>

                        <div className="buttons">
                            <button> " - " </button>
                            <button>" + "</button>
                        </div>
                        <div className="surprise-me">
                            <button>Surprise Me</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Card