// REDUX
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

// CONTEXT

// COMPONENTS
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

// STYLES

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
