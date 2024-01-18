import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, LinkTitle, Preview } from "./category-preview.styles";

type CategoryPreviewProps = {
    title: string,
    products: CategoryItem[],
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {

    return(
        <CategoryPreviewContainer>
            <h2>
                <LinkTitle to={title}>{ title.toUpperCase() }</LinkTitle>
            </h2>
            <Preview>
            {
                products
                .filter((_, indx) => indx < 4)
                .map((product ) => 
                    <ProductCard key={product.id} product={product} />
                )
            }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;