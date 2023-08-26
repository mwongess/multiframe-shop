"use client"

import { Dispatch, SetStateAction } from "react"

const QuantityAdjuster: React.FC<{ stock: number; quantity: number, setQuantity: Dispatch<SetStateAction<number>> }> = ({ stock, quantity, setQuantity }) => {

  const adjustQuantity = (operator: any) => {
    if (operator === "-") {
      if (quantity <= 1) {
        return
      }
      setQuantity(prevValue => prevValue - 1)
    } else {
      if (quantity >= stock) {
        return
      }
      setQuantity(prevValue => prevValue + 1)
    }
  }
  return (
    <div className="flex justify-between">
      <div className="flex justify-around p-2 border rounded-lg w-[50%]">
        <p className="cursor-pointer font-bold" onClick={() => adjustQuantity("-")}>-</p>
        <p className="cursor-pointer font-bold">{quantity}</p>
        <p className="cursor-pointer font-bold" onClick={() => adjustQuantity("+")}>+</p>
      </div>
      <p>Stock: <span className="font-bold">{stock}</span></p>
    </div>
  )
}

export default QuantityAdjuster