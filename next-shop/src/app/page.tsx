import Product from "./components/Product";

export default function Home() {
  const products = [
    {
      name: "Product 1",
      description: "This is the first product description.",
      price: 19.99,
      image: "https://example.com/product1.jpg",
      count: 10,
    },
    {
      name: "Product 2",
      description: "This is the second product description.",
      price: 29.99,
      image: "https://example.com/product2.jpg",
      count: 5,
    },
    {
      name: "Product 3",
      description: "This is the third product description.",
      price: 9.99,
      image: "https://example.com/product3.jpg",
      count: 20,
    },
  ];

  return (
    <>
      {products.map(() => (
       <Product/>
      ))}
    </>
  );
}
