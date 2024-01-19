import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import { Arrow, CheckoutItemContainer, ImageContainer, RemoveButton, SpanArea, Value } from "./checkout-item.styles";

type CheckoutItemProps = {
    cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
    const {name, price, imageUrl, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const incrementItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const decrementItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <SpanArea>{name}</SpanArea>
            <SpanArea>
                <Arrow onClick={decrementItemHandler}>
                    &#10094;
                </Arrow>
                <Value>
                    {quantity}
                </Value>
                <Arrow onClick={incrementItemHandler}>
                    &#10095;
                </Arrow>
            </SpanArea>
            <SpanArea>{price}</SpanArea>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
});

export default CheckoutItem;