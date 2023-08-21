import ProductImage from "./ProductImage"

const CartProduct = () => {
  return (
    <div>
      <ProductImage/>
      <div>
        <p>Lorem ipsum dolor sit.</p>
        <p>Delivery in 2 days</p>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default CartProduct