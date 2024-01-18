import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { FC } from "react";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles";

type ProductProps = {
    product: CategoryItem,
}

const ProductCard: FC<ProductProps> = ({product}) => {
    const {name, price , imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name as="span">{name}</Name>
                <Price as="span">{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
                Add to Card
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard;