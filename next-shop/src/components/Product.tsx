"use client";

import { Iproduct } from "@/context/productsContext";
import Image from "next/image";
import Link from "next/link";

const Product = ({
    product,
}: {
    product: Iproduct;
}) => {
    return (
            <Link href={`/products/details/${product.id}`} className="bg-[#fefefe] rounded-lg cursor-pointer h-fit transform transition-transform hover:scale-110 ">
                <div className="bg-white relative h-[200px] overflow-hidden hover:animate-pulse rounded-lg">
                    <Image src={product.image} objectFit="cover" fill priority alt={product.name} />
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
