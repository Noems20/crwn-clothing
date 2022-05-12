import { Link } from 'react-router-dom';

// COMPONENTS
import ProductCard from '../ProductCard/ProductCard.component';

// STYLES
import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link className="title" to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className="preview">
      {products
        // .filter((_, idx) => idx < 4)
        .slice(0, 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
