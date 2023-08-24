
import { FaCreditCard, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import NavLink from "../NavLink"

const Steps = () => {
  return (
    <div className="flex justify-between mx-12 py-4 border-b-2 border-slate-300 mb-3 ">
      <NavLink href="/cart"><FaShoppingBag /> Cart</NavLink>
      <NavLink href="/cart/details"><FaInfoCircle />Delivery Details</NavLink>
      <NavLink href="/cart/payment"><FaCreditCard /> Payment</NavLink>
    </div>
  )
}

export default Steps