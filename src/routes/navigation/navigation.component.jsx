import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo} from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const signOutOnClickHandler = () => {
    signOutUser();
    setIsCartOpen(false);
  }
  const disableDropDownHandler = () => {
    setIsCartOpen(false);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/" onClick={disableDropDownHandler}>
            <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop" onClick={disableDropDownHandler}>
            SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutOnClickHandler}>
                SIGN OUT
              </span>
              ):(
              <Link className="nav-link" to="/auth" onClick={disableDropDownHandler}>
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