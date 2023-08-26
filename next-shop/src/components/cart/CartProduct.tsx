import { FaCarSide, FaTrashAlt } from "react-icons/fa"
import ProductImage from "./ProductImage"

const CartProduct = () => {
  return (
    <div className="flex gap-3 mb-3 border-b pb-2"> 
      <ProductImage url="/lv-full.jpg" />
      <div className="w-full">
        <div className="flex justify-between">
          <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, culpa?</p>
          <p>Ksh 200</p>
        </div>
        <p className="flex items-center gap-2"><FaCarSide/>2 days delivery time</p>
        <button className="flex items-center gap-2 mt-1 rounded p-2 bg-slate-200"><FaTrashAlt/> Remove</button>
      </div>
    </div>
  )
}

export default CartProduct