import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutOnClickHandler = () => {
    dispatch(signOutStart());
    dispatch(setIsCartOpen(false));
  }
  const disableDropDownHandler = () => {
    dispatch(setIsCartOpen(false));
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