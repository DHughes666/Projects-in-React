import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { clearCart } from "../features/cart/cart_slice";
import { removeItem, increase, decrease } from "../features/cart/cart_slice";

const CartItem = (cartItem) => {
    // const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const {id, img, title, price, amount} = cartItem
    return (
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button 
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(id))}
                    >
                        remove
                    </button>
            </div>
            <div>
                <button className="amount-btn" 
                    onClick={() => dispatch(increase(id))}
                >
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn"
                    onClick={() => dispatch(decrease(id))}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
};

export default CartItem;