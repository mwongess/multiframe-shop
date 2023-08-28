import { useProducts } from "@/context/productsContext"
import SummaryProduct from "./SummaryProduct"

const SummaryProductList = () => {
  const { cart } = useProducts()!
  const items2checkout = [...cart]

  return (
    <div className="my-3 w-96">
      {items2checkout.map((item, index) => (
        <div key={index}>
          <SummaryProduct item={item} />
        </div>
      ))}
    </div>
  )
}

export default SummaryProductList