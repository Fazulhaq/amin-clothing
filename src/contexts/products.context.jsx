import { createContext, useState, useEffect} from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {

    useEffect(() => {
        addCollectionAndDocuments("categories", SHOP_DATA);
    },[])

    const [products, setProducts] = useState([]);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}