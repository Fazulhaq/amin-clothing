import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItemContainer, ImageContainer, SpanArea, RemoveButton, Arrow, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const {name, price, imageUrl, quantity} = cartItem;
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const incrementItemHandler = () => addItemToCart(cartItem);
    const decrementItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
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
}

export default CheckoutItem;