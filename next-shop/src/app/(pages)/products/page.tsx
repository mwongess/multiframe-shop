"use client";

import Product from "@/components/Product";

const Products = () => {
  const products = [
    {
      name: "Product 1",
      description: "This is the first ...",
      price: 19.99,
      image: "https://example.com/product1.jpg",
      count: 10,
    },
    {
      name: "Product 2",
      description: "This is the second ...",
      price: 29.99,
      image: "https://example.com/product2.jpg",
      count: 5,
    },
    {
      name: "Product 3",
      description: "This is the third...",
      price: 9.99,
      image: "https://example.com/product3.jpg",
      count: 20,
    },
    {
      name: "Product 4",
      description: "This is the third ...",
      price: 9.99,
      image: "https://example.com/product3.jpg",
      count: 20,
    },
    {
      name: "Product 2",
      description: "This is the second ...",
      price: 29.99,
      image: "https://example.com/product2.jpg",
      count: 5,
    },
    {
      name: "Product 3",
      description: "This is the third ...",
      price: 9.99,
      image: "https://example.com/product3.jpg",
      count: 20,
    },
    {
      name: "Product 4",
      description: "This is the third ...",
      price: 9.99,
      image: "https://example.com/product3.jpg",
      count: 20,
    },
    // Add more products here
  ];

  return (
    <div className="sm:grid grid-cols-5 gap-3  p-8 ">
      {products.map((product) => (
       <Product product={product}/>
      ))}
    </div>
  );
};

export default Products;
