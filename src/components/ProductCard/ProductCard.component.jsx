import './ProductCard.styles.scss';
import { useContext } from 'react';

// CONTEXT
import { CartContext } from '../../contexts/cart.context';

// COMPONENTS
import Button from '../Button/Button.component';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductCart = () => addItemToCart(product);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
