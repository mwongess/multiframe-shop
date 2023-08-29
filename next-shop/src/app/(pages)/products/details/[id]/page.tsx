"use client";

import AboutItem from "@/components/AboutItem";
import Description from "@/components/Description";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import SellerInfo from "@/components/SellerInfo";
import ShippingInfo from "@/components/ShippingInfo";
import SizePicker from "@/components/SizePicker";
import { Iproduct, useProducts } from "@/context/productsContext";
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import DetailsLoadingSkeleton from "@/components/DetailsLoadingSkeleton";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast";
import Products from "../../page";

const Readmore = ({ params }: { params: any }) => {
  const [clickedProduct, setClickedProduct] = useState<Iproduct | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState<number>()

  const { toast } = useToast()

  const { products, cart, setCart } = useProducts()!

  useEffect(() => {
    setClickedProduct(
      products.find((product) => product.id == params.id)
    )

  }, [])

  useEffect(() => {
    if (clickedProduct?.price) {
      setTotalPrice(quantity * clickedProduct.price)
    }
  }, [quantity])

  // Add to cart
  const addToBag = () => {
    setCart(prevItems => [...prevItems,{cartId: Date.now(), ...clickedProduct!}])
    toast({
      title: `${clickedProduct?.name} added to cart!`,
      // description: `${clickedProduct?.description}`,
      action: (<ToastAction altText="Remove from cart!">Undo</ToastAction>)
    })
  }

  return (
    <>
      {
        !clickedProduct?.image && <DetailsLoadingSkeleton />
      }
      {clickedProduct?.image && <div className="flex flex-col sm:flex-row  border-white justify-center p-8 gap-8 min-h-screen">
        <div className="sm:w-[40%]">
          <div className="w-full h-[350px] sm:h-[500px] relative block">
            <Image
              src={clickedProduct.image}
              quality={100}
              fill
              priority
              alt="img"
            // objectFit="fill"
            />
          </div>
          <div className="grid grid-cols-4 gap-4  mt-3 h-[80px]  sm:h-[100px]">
            <div className="relative">
              <Image className="w-full  rounded" src={clickedProduct.image} quality={100} objectFit="fill" fill alt="" />
            </div>
            <div className="relative">
              <Image className="w-full  rounded" src={clickedProduct.image} quality={100} fill alt="" />
            </div>
            <div className="relative">
              <Image className="w-full  rounded" src={clickedProduct.image} quality={100} fill alt="" />
            </div>
            <div className="relative">
              <Image className="w-full  rounded" src={clickedProduct.image} quality={100} fill alt="" />
            </div>
          </div>
        </div>
        <div className="sm:w-[30%] h-fit">
          <div className=" border-b ">
            <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <SizePicker />
          </div>
          <AboutItem />

          <h1 className="mt-4 font-bold">Description</h1>
          <Description />
          <ShippingInfo />
          <SellerInfo />
        </div>

        <div className="flex flex-col  sm:p-3 gap-3 sm:w-[30%] h-fit">
          <p className="font-bold">Order</p>
          <div className="flex items-center gap-2">
            <div className="relative w-[3rem] h-[3rem]">

              <Image src={clickedProduct.image} fill alt="" />
            </div>
            <div>
              <p>Selected Sum</p>
              <h1 className="font-bold">XL(XL)</h1>
            </div>
          </div>
          <QuantityAdjuster stock={5} quantity={quantity} setQuantity={setQuantity} />
          <div className="flex justify-between">
            <h1>Total price</h1>
            <p className="font-bold">$ {totalPrice || clickedProduct.price}</p>
          </div>
          <button className="bg-[#fd6141] text-white p-3">Buy Now</button>
          <button onClick={addToBag} className="flex justify-center items-center gap-3 border border-[#fd6141] text-[#fd6141] p-3">
            <FaShoppingBag />
            Add To Bag
          </button>
        </div>
      </div>
      
      }
      <Products/>
    </>
  );
};

export default Readmore;
