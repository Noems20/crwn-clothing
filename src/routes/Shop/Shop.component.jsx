import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// UTILS

// REDUX
import { useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from '../../store/categories/categories.action';

// COMPONENTS
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.component';
import Category from '../Category/Category.component';

// STYLES
import './Shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
