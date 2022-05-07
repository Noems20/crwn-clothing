import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// UTILS
import { signOutUser } from '../../utils/firebase/firebase.utils';

// CONTEXT
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

// COMPONENTS
import CartIcon from '../../components/CartIcon/CartIcon.component';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component';

// ICONS
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// STYLES
import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
