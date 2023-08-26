import { createContext, useContext } from "react";

export const ProductsContext = createContext<{products: Array<any>}>({products : []})
export const ProductsProvider = ProductsContext.Provider
export const useProducts = () => {const data = useContext(ProductsContext); return data}