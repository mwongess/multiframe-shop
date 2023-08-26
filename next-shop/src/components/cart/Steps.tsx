
import { FaCreditCard, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import NavLink from "../NavLink"

const Steps = () => {
  return (
    <div className="flex justify-between px-8 py-2 bg border-b border-slate-300 mb-3 ">
      <NavLink href="/cart"><FaShoppingBag /> Cart</NavLink>
      <NavLink href="/cart/delivery-details"><FaInfoCircle />Delivery Details</NavLink>
      <NavLink href="#"><FaCreditCard /> Payment</NavLink>
    </div>
  )
}

export default Steps