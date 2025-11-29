import Card from "./Card"
function Testimonial ({reviews}) {
    return ( 
        <div className="testimonial-container">
            <Card  reviews ={reviews}/>
        </div>
    )
}
export default Testimonial