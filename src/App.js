import { Routes, Route } from 'react-router-dom';

// ROUTES
import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/SignIn/SignIn.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* The nested routes are relative to the parent route */}
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Store</h1>} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
