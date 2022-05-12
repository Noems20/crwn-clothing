import { useContext } from 'react';

// CONTEXT
import { CategoriesContext } from '../../contexts/categories.context';

// COMPONENTS
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

// STYLES

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
