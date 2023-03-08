import { createContext, useContext, useState } from "react";

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({
        categories: [],
        items: []
    });
    const [productSelected, setProductSelected] = useState({});

    return (
        <ProductsContext.Provider value={{ products, setProducts, productSelected, setProductSelected }}>
            {children}
        </ProductsContext.Provider>
    )
};

export const useProductsContext = () => useContext(ProductsContext);