"use client"

const Product = ({product}: {product: {imgPath: string, name: string, description:string, price: string}}) => {
    return (
        <div className="border ">
            <div>
                <img className="w-full" src="https://image.kilimall.com/kenya/shop/store/goods/7766/2023/07/1688179988947cb6fa02e754646e3be898bc3d3c60a33_240.jpg.webp" alt="img" />
            </div>
            <h1>Trouser</h1>
            <p >Short Description</p>
            <div className="flex justify-between">
                <p className="">Price</p>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Product;
