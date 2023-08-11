"use client";

const Readmore = ({ params }: { params: any }) => {
  return (
    <div className="flex border-white justify-center p-8 gap-8">
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
            <img className="w-full  rounded"  src="https://image.kilimall.com/kenya/shop/store/goods/6070/2023/03/1678247207784c49f20bca4f04609bcdb898322ebba7f_720.jpg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[30%] h-fit border-b border-white">
        <h1>Description</h1>
        <div>
          <p>Choose size</p>
          <div>
            <p>S</p>
            <p>M</p>
            <p>L</p>
          </div>
        </div>
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
        <div className="flex justify-between">
          <h1>Total price</h1>
          <p className="font-bold">$45.00</p>
        </div>
        <button className="bg-[#fd6141] text-white p-3">Buy Now</button>
        <button className="border border-[#fd6141] text-[#fd6141] p-3">
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default Readmore;
