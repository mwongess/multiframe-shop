"use client"

import ProductList from "@/components/cart/ProductList"
import { useProducts } from "@/context/productsContext"
import { useEffect, useState } from "react"
import { FaLock } from "react-icons/fa"

const Cart = () => {
  const [subTotal, setSubtotal] = useState<number>(0)

  //From context 
  const {cart, setCart} = useProducts()!

  useEffect(()=>{
    if(cart[0]){
      setSubtotal(cart.reduce((total, currItem)=> total + currItem.price,0))
    }else{
      setSubtotal(0)
    }
  },[cart])


  return (
    <div className="flex gap-[4rem] px-[5rem] mt-5 ">
      <ProductList />
      <div className="w-[30%]">
        <p className="font-bold mb-2">Pricing Details</p>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Ksh {subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>Ksh 118</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Tax(15%)</p>
          <p>Ksh 234</p>
        </div>
      <button className="bg-[#fd6141] rounded p-3  w-full flex items-center justify-center gap-3 text-white"><FaLock/>Place Order</button>
      </div>
    </div>
  )
}

export default Cart