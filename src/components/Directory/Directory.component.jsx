import categories from '../../categories.json';

// COMPONENTS
import DirectoryItem from '../DirectoryItem/DirectoryItem.component';

// STYLES
import './Directory.styles.scss';

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
