// REDUX
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

// COMPONENTS
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';
import Spinner from '../../components/Spinner/Spinner.component';

// STYLES

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={categoriesMap[title]}
            />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
