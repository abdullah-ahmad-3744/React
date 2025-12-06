import { useState } from 'react'
import './Product.css'
function Product ({post}) {
    const [selected, setSelected] = useState(false)
    console.log(' ')
    return (
        <div className="product">


            <div className="card-title">
                <p>{post.title}</p>
            </div>

            <div className="description">
                <p>{post.description}</p>
            </div>

            <div className="card-image">
                <img src={post.image} alt=""  />
            </div>

            <div className="price">
                <p>{post.price}</p>
            </div>

            <div className="buttons">
                {selected ? 
                (<><button>Remove from Cart</button></>) : 
                (<><button>Add To Cart</button></>)}
            </div>
        </div>
    )
}
export default Product