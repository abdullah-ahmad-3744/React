import './Tours.css'
import Card from "./Card";


function Tours ({tours, RemoveTour}) {
    return (
        <div className="tours-container">
            <div className="heading">
                <h1>Plan With Us</h1>
            </div>


            <div className="cards">
                {tours.map ( (tour) => {
                    return <Card {...tour}  RemoveTour = {RemoveTour}/>
                })}
            </div>


        </div>
    )
}
export default Tours;