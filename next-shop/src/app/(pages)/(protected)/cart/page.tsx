"use client"

import ProductList from "@/components/cart/ProductList"

const Cart = () => {
  return (
    <div className="flex justify-between">
      <ProductList />
      <div>
        <p>Pricing Details</p>
        <div>
          <p>Subtotal</p>
          <p></p>
        </div>
        <div>
          <p>Shipping Fee</p>
          <p></p>
        </div>
        <div>
          <p>Tax(15%)</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Cart