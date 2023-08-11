"use client";

import Link from "next/link";

const Product = ({
    product,
}: {
    product: { image: string; name: string; description: string; price: number };
}) => {
    return (
        <Link href="/readmore/1" className="bg-[#fefefe] rounded-lg cursor-pointer">
            <img
                className="w-full object-cover rounded-t-lg"
                src="https://i.pinimg.com/236x/bd/a0/d9/bda0d91b36730d90758aff879446d3ca.jpg"
                alt="img"
            />
            <div className="p-3">
                <h1>{product.name}</h1>
                <p className="font-bold">{product.description}</p>
                <div className="flex justify-between">
                    <p className="text-[#fd6141] font-bold text-lg">Ksh {product.price}</p>


                </div>
            </div>
        </Link>
    );
};

export default Product;
