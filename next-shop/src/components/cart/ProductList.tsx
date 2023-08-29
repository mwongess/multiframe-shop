import { useProducts } from "@/context/productsContext"
import CartProduct from "./CartProduct"

const ProductList = () => {
  const {cart} = useProducts()!

  return (
    <div className="w-full sm:w-[70%]">
      {
        cart.map((item,index)=> (
          <div key={index}>
            <CartProduct item={item}/>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList