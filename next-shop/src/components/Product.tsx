"use client";

import Link from "next/link";

const Product = ({
    product,
}: {
    product: { image: string; name: string; description: string; price: number };
}) => {
    return (
        <Link href="/readmore/1" className="bg-[#fefefe] rounded-lg cursor-pointer h-fit transform transition-transform hover:scale-110 hover:animate-pulse">
            <div className="bg-white overflow-hidden">
                <img
                    className="w-full h-[200px] top-0 left-0 rounded-t-lg object-cover"
                    src={product.image}
                    alt="img"
                />
            </div>
            <div className="p-3 h-[30%]">
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
