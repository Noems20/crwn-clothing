import categories from '../../categories.json';

// COMPONENTS
import Directory from '../../components/Directory/Directory.component';

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
