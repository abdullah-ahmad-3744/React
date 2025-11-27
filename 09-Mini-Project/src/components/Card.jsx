import './Card.css'
// import FcLike from 'react-icons/fc'
function Card ({course}) {
    return (
        <div className="card-container">

            <div className="image">
                <img src={course.image.url} alt="" />
            </div>

            <div className="icon">
                <button>
                    {/* <FcLike fontSize = "1.75rem"/> */}
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