import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo} from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to="/" onClick={disableDropDownHandler}>
            <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
            <NavLink to="/shop" onClick={disableDropDownHandler}>
              SHOP
            </NavLink>
            {currentUser ? (
            <NavLink as="span" onClick={signOutOnClickHandler}>
              SIGN OUT
            </NavLink>
              ):(
            <NavLink to="/auth" onClick={disableDropDownHandler}>
              SIGN IN
            </NavLink>
            )}
            <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;