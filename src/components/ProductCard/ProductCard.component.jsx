import './ProductCard.styles.scss';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

// COMPONENTS
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component';

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductCart = () => dispatch(addItemToCart(cartItems, product));

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
