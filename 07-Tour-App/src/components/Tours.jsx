import './Tours.css'
import Card from "./Card";

function Tours ({tours, RemoveTour}) {
    return (
        <div className="tours-container">
            <div className="cards">
                {tours.map((tour) => {
                    return <Card key={tour.id} {...tour} RemoveTour={RemoveTour} />
                })}
            </div>
        </div>
    )
}
export default Tours;
