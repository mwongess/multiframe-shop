import { createContext, useContext } from "react";

export interface Iproduct {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export type Icart = Array<Iproduct>

export const ProductsContext = createContext<{products: Array<any>, cart: Array<any>,setCart: React.Dispatch<React.SetStateAction<Iproduct[]>>} | null>(null)
export const ProductsProvider = ProductsContext.Provider
export const useProducts = () => {const data = useContext(ProductsContext); return data}