"use client";

import Product from "@/components/Product";
import { useProducts } from "@/context/productsContext";
import { useEffect } from "react";

const Products = () => {
 const {products } = useProducts()!
 
 useEffect(()=>{
  console.log(products);
  
 },[])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 sm:p-8 ">
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
