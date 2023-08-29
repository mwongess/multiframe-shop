import { FaCarSide, FaTrashAlt } from "react-icons/fa"
import { useProducts } from "@/context/productsContext"
import ProductImage from "./ProductImage"

const CartProduct = ({ item }: { item: any }) => {
  const { cart, setCart } = useProducts()!

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.cartId != id));

  }

 

  return (
    <div className="flex justify-between gap-3 mb-3 border-b pb-2">
      <ProductImage url={item.image} />
      <div className="w-full px-4">
        <div className="sm:flex justify-between ">
          <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, culpa?</p>
          <p className="font-bold">Ksh {item.price}</p>
        </div>
        <p className="flex items-center gap-2"><FaCarSide />2 days delivery time</p>
        <button onClick={() => removeFromCart(item.cartId)} className="flex items-center gap-2 mt-1 rounded p-2 bg-slate-200"><FaTrashAlt /> Remove</button>
      </div>
    </div>
  )
}

export default CartProduct