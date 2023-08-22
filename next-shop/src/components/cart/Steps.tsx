
import { FaCreditCard, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import NavLink from "../NavLink"

const Steps = () => {
  return (
    <div className="flex justify-between  border-white px-12 py-4 border-b">
      <NavLink href=""><FaShoppingBag /> Cart</NavLink>
      <NavLink href="/cart/details"><FaInfoCircle />Delivery Details</NavLink>
      <NavLink href="/cart/payment"><FaCreditCard /> Payment</NavLink>
    </div>
  )
}

export default Steps