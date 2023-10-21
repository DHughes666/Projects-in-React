import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const {amount} = useGlobalContext()

  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
