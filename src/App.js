import { Routes, Route } from 'react-router-dom';

// ROUTES
import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/Authentication/Authentication.component';
import Checkout from './routes/Checkout/Checkout.component';
import Shop from './routes/Shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* The nested routes are relative to the parent route */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
