"use client";

import AboutItem from "@/components/AboutItem";
import Description from "@/components/Description";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import ShippingInfo from "@/components/ShippingInfo";
import SizePicker from "@/components/SizePicker";
import { FaShoppingBag } from "react-icons/fa";

const Readmore = ({ params }: { params: any }) => {
  return (
    <div className="flex border-white justify-center p-8 gap-8 bg-white min-h-screen">
      <div className="w-[40%]">
        <img
          className="w-full object-cover"
          src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp"
          alt="img"
        />
        <div className="grid grid-cols-4 gap-4  mt-3">
          <div className="">
            <img className="w-full rounded" src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          </div>
          <div>
            <img className="w-full  rounded" src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          </div>
          <div>
            <img className="w-full rounded" src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          </div>
          <div>
            <img className="w-full  rounded" src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[30%] h-fit">
        <div className=" border-b bg-white">
          <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <SizePicker />
        </div>
        <AboutItem />
        
        <h1 className="mt-4 font-bold">Description</h1>
        <Description />
        <ShippingInfo/>
      </div>

      <div className="flex flex-col bg-[#fefefe] p-3 gap-3 w-[30%] h-fit">
        <p className="font-bold">Order</p>
        <div className="flex items-center gap-2">
          <img className="w-[3rem] h-[3rem]" src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          <div>
            <p>Selected Sum</p>
            <h1 className="font-bold">XL(XL)</h1>
          </div>
        </div>
        <QuantityAdjuster />
        <div className="flex justify-between">
          <h1>Total price</h1>
          <p className="font-bold">$45.00</p>
        </div>
        <button className="bg-[#fd6141] text-white p-3">Buy Now</button>
        <button className="flex justify-center items-center gap-3 border border-[#fd6141] text-[#fd6141] p-3">
          <FaShoppingBag />
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default Readmore;
