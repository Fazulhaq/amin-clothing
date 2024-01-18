import { FC } from "react";
import { CartItem } from "../../store/cart/cart.types";
import { CartItemContainer, ImageStyle, ItemDetails, SpanStyle } from "./cart-item.styles";

type CartItemProps = {
    cartItem: CartItem,
}

const CartItemComponent: FC<CartItemProps> = ({ cartItem })  => {

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

export default CartItemComponent;