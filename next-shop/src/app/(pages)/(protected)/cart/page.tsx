"use client"

import ProductList from "@/components/cart/ProductList"
import { FaLock } from "react-icons/fa"

const Cart = () => {
  return (
    <div className="flex justify-between px-8">
      <ProductList />
      <div>
        <p>Pricing Details</p>
        <div className="flex">
          <p>Subtotal</p>
          <p>Ksh 589</p>
        </div>
        <div className="flex">
          <p>Shipping Fee</p>
          <p>Ksh 118</p>
        </div>
        <div className="flex">
          <p>Tax(15%)</p>
          <p>Ksh 234</p>
        </div>
      <button className="flex items-center gap-3"><FaLock/>Place Order</button>
      </div>
    </div>
  )
}

export default Cart