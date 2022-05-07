import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// CONTEXT
import { CartContext } from '../../contexts/cart.context';

// COMPONENTS
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

// STYLES
import './CartDropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
