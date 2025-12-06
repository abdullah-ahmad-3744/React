import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"

function Cart() {
    const cart = useSelector((state) => state.cart)

    const [totalAmount, setTotalAmount]=  useState(0)


    useEffect ( () => {
        setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0))
    }, [cart])
    return (
        <div className="cart">
            {cart.length > 0 ?
                (
                    <div>

                        <div className="cart-item">
                            {cart.map((item, index) => {
                                return <CartItem key={item.id} item={item} itemIndex={index} />
                            })}
                        </div>


                        <div className="cart-details">
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Items : </span>{cart.length}
                            </p>
                        </div>

                        <div className="checkout-part">
                            <p>Total Amount : {totalAmount}</p>
                            <button>Checkout Now</button>
                        </div>

                    </div>) :


                (<div className="empty-cart">
                    <h1>Empty</h1>
                    <NavLink to='/'><button>Shop Now</button></NavLink>
                </div>)



            }
        </div>
    )
}
export default Cart