import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// UTILS
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// REDUX
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';

// COMPONENTS
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.component';
import Category from '../Category/Category.component';

// STYLES
import './Shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
