import "./Card.css"

function Card (props) {
    const title = props.title
    const description = props.description
    return (
        <div className="card">
            <h1>{title}</h1>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    )
}
export default Card