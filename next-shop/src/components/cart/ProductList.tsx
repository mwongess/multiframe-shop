import { useProducts } from "@/context/productsContext"
import CartProduct from "./CartProduct"

const ProductList = () => {
  const {cart} = useProducts()!

  return (
    <div className="w-[70%]">
      {
        cart.map((item)=> (
          <CartProduct item={item}/>
        ))
      }
    </div>
  )
}

export default ProductList