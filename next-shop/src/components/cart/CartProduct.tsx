import { FaCarSide, FaTrashAlt } from "react-icons/fa"
import ProductImage from "./ProductImage"
import { Iproduct, useProducts } from "@/context/productsContext"

const CartProduct = ({item}: {item: Iproduct}) => {
  const {cart, setCart} = useProducts()!

  const removeFromCart = (id:number) =>{
    // const itemIndex = cart.findIndex(item => item.id == id)
    // setCart(cart.splice(1,itemIndex))
    setCart(cart.filter((item)=>item.id != id));
    
  }

  return (
    <div className="flex gap-3 mb-3 border-b pb-2"> 
      <ProductImage url={item.image} />
      <div className="w-full">
        <div className="flex justify-between">
          <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, culpa?</p>
          <p>{item.price}</p>
        </div>
        <p className="flex items-center gap-2"><FaCarSide/>2 days delivery time</p>
        <button onClick={()=> removeFromCart(item.id)} className="flex items-center gap-2 mt-1 rounded p-2 bg-slate-200"><FaTrashAlt/> Remove</button>
      </div>
    </div>
  )
}

export default CartProduct