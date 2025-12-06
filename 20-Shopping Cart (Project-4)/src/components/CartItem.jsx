import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/CartSlice";
import { toast } from "react-toastify";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function RemoveFromCartHandler() {
    dispatch(removeFromCart(item.id));
    toast.success("Item removed from cart");
  }

  return (
    <div className="cart-item">
      <div className="image">
        <img src={item.image} alt="" />
      </div>

      <div className="item-details">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>

      <div className="item-price">
        <p>{item.price}</p>
      </div>

      <div className="delete-button">
        <button onClick={RemoveFromCartHandler}> <MdDelete /> </button>
      </div>
    </div>
  );
}

export default CartItem;
