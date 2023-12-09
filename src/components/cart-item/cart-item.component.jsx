import { CartItemContainer, ItemDetails, SpanStyle, ImageStyle } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <ImageStyle src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <SpanStyle>{name}</SpanStyle>
                <SpanStyle>
                    { quantity } x ${price}
                </SpanStyle>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;