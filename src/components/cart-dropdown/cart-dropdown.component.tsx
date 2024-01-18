import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";


const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();

    const goToCheckoutHandler = useCallback(() => {
        navigate("/checkout");
        dispatch(setIsCartOpen(!isCartOpen));
    }, [navigate]);
    
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                cartItems.length ? (cartItems.map(item =>
                <CartItemComponent key={item.id} cartItem={item} />
                )) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;