import { useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from "../redux/slice/CartSlice";
import { toast } from 'react-toastify';




function Product ({post}) {
const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function AddToCartHandler() {
        dispatch(addToCart(post))
        toast.success("Item added to Cart")
    }

    function RemoveFromCartHandler () {
        dispatch(removeFromCart(post.id))
        toast.success("Item removed from Cart")
    }


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
                {cart.some((p) => p.id === post.id)  ?
                (<><button  onClick={RemoveFromCartHandler}>Remove from Cart</button></>) :
                (<><button  onClick={AddToCartHandler}>Add To Cart</button></>)
                }
            </div>
        </div>
    )
}
export default Product