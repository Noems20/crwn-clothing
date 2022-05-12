import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// CONTEXT
import { CartContext } from '../../contexts/cart.context';

// COMPONENTS
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

// STYLES
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropdown.styles.js';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
