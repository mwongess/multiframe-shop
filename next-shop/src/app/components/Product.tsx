"use client";

import Link from "next/link";

const Product = ({
    product,
}: {
    product: { image: string; name: string; description: string; price: number };
}) => {
    return (
        <Link href="/readmore/1" className="bg-[#fefefe] rounded-lg cursor-pointer">
            <div className=" ">
                <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/167824720799437190b023c91422f83bddcc292a43925_240.jpg.webp"
                    alt="img"
                />
            </div>
            <div className="p-3">
                <h1>{product.name}</h1>
                <p className="font-bold">{product.description}</p>
                <div className="flex justify-between">
                    <p className="text-[#fd6141] font-bold text-lg">${product.price}</p>


                </div>
            </div>
        </Link>
    );
};

export default Product;
