import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import { CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";


const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
        setIsCartOpen(!isCartOpen);
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                cartItems.length ? (cartItems.map(item => 
                <CartItem key={item.id} cartItem={item}/>
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