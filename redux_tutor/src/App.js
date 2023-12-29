import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/navbar";
import CartContainer from "./components/cart_container";
import Modal from "./components/modal";
import { calculateTotals, getCartItems } from "./features/cart/cart_slice";

function App() {
  const { cartItems, isLoading } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [])

  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
