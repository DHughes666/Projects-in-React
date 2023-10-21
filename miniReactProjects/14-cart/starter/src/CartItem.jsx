import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './context'

const CartItem = ({ id, img, title, price, amount }) => {
  const {remove} = useGlobalContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => console.log('increase')}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => console.log('decrease')}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  )
}

export default CartItem
