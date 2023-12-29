import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/navbar";
import CartContainer from "./components/cart_container";
import { calculateTotals } from "./features/cart/cart_slice";

function App() {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
