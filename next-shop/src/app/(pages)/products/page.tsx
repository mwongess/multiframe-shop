"use client";

import Product from "@/components/Product";

const Products = () => {
  const products = [
    {
      name: "Amiri Shirt",
      description: "Lorem, ipsum dolor ...",
      price: 1350,
      image: "/amiri-shirt.jpg",
      count: 10,
    },
    {
      name: "Trapstar Hoodie",
      description: "Lorem, ipsum dolor ...",
      price: 1350,
      image: "/trapstar-hoodie1.jpg",
      count: 10,
    },

    {
      name: "Amiri Hoodie",
      description: "Lorem, ipsum dolor ...",
      price: 2449,
      image: "/amiri-hoodie.png",
      count: 5,
    },
    {
      name: "Vlone Tshirt",
      description: "Lorem, ipsum dolor ...",
      price: 999,
      image: "/vlone-shirt1.jpg",
      count: 20,
    },
    {
      name: "Amiri",
      description: "Lorem, ipsum dolor ...",
      price: 1449,
      image: "/amiri-shirt1.jpg",
      count: 20,
    },
    {
      name: "Bottega Coat",
      description: "Lorem, ipsum dolor ...",
      price: 1349,
      image: "/bottega-coat1.jpg",
      count: 5,
    },
    {
      name: "Balenciaga Bag",
      description: "Lorem, ipsum dolor ...",
      price: 1449,
      image: "/balenciaga-bag1.jpg",
      count: 20,
    },
    {
      name: "The NFC",
      description: "Lorem, ipsum dolor ...",
      price: 1349,
      image: "/northface-coat1.jpg",
      count: 20,
    },
    {
      name: "Versace Coat",
      description: "Lorem, ipsum dolor ...",
      price: 2449,
      image: "/versace-coat1.jpg",
      count: 5,
    },
    {
      name: "Louis V",
      description: "Lorem, ipsum dolor ...",
      price: 1350,
      image: "/lv-full.jpg",
      count: 10,
    },
    // Add more products here
  ];

  return (
    <div className="sm:grid grid-cols-5 gap-3  p-8 ">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
