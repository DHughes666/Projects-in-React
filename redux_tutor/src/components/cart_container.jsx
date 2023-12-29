import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cart_Item";
import { clearCart } from "../features/cart/cart_slice";

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    if(amount < 1){
        return <section className="cart">
            <header>
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((cartItem) =>{
                    return <CartItem key={cartItem.id} {...cartItem}/>
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${total}</span></h4>
                </div>
                <button 
                    className="btn clear-btn" 
                    onClick={() => dispatch(clearCart())}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
};

export default CartContainer;