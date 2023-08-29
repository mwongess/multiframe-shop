"use client"

import Fallback from "@/components/cart/Fallback"
import ProductList from "@/components/cart/ProductList"
import { useProducts } from "@/context/productsContext"
import { useEffect, useState } from "react"
import { FaLock } from "react-icons/fa"
import Products from "../../products/page"

const Cart = () => {
  const [subTotal, setSubtotal] = useState<number>(0)

  //From context 
  const { cart, setCart } = useProducts()!

  useEffect(() => {
    if (cart[0]) {
      setSubtotal(cart.reduce((total, currItem) => total + currItem.price, 0))
    } else {
      setSubtotal(0)
    }
  }, [cart])

  if (!cart[0]) {
    return <Fallback />
  }

  return (
    <>
      <div className="sm:flex gap-[4rem] px-4 sm:px-8 mt-5">
        <ProductList />
        <div className="w-full sm:w-[30%]">
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
          <button className="bg-[#fd6141] rounded p-3  w-full flex items-center justify-center gap-3 text-white"><FaLock />Place Order</button>
        </div>
      </div>
      <Products />
    </>
  )
}

export default Cart