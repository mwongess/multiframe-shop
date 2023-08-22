import ProductImage from "./ProductImage"

const CartProduct = () => {
  return (
    <div className="flex gap-3 mb-3 border"> 
      <ProductImage url="/lv-full.jpg" />
      <div>
        <div>
          <p >Lorem ipsum dolor sit.</p>
          <p>Ksh 200</p>
        </div>
        <p>Delivery in 2 days</p>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default CartProduct