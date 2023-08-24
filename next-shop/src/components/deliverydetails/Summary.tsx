"use client"

import { FaMapMarkerAlt, FaRegClock, FaShoppingBag } from "react-icons/fa"
import SummaryProductList from "./SummaryProductList"
import { checkout } from "@/lib/checkout"

const Summary = () => {
  return (
    <div>
        <h1 className="font-bold text-lg">Summary</h1>
        <p className="flex items-center gap-2"><FaShoppingBag/>Designerstore</p>
        <p className="flex items-center gap-2"><FaRegClock/>Arrives in 1 to 2 days</p>
        <p className="flex items-center gap-2"><FaMapMarkerAlt/>Adress</p>
        <SummaryProductList/>
        <div className="">
            <p className="flex justify-between">Subtotal<span>Ksh 3776</span></p>
            <p className="flex justify-between">Delivery Fee<span>Ksh 123</span></p>
            <p className="flex justify-between">Total Value<span className="font-bold">Ksh 3899</span></p>
            <button className="bg-[#fd6141] text-white rounded p-3 w-full" onClick={()=> checkout({lineItems: [{price: "",quantity: 1}]})}>Checkout</button>
        </div>
    </div>
  )
}

export default Summary