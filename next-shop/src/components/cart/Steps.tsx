
import { FaCreditCard, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import NavLink from "../NavLink"

const Steps = () => {
  return (
    <div className="flex justify-between px-12 py-4 ">
      <NavLink href="/cart"><FaShoppingBag /> Cart</NavLink>
      <NavLink href="/cart/details"><FaInfoCircle />Delivery Details</NavLink>
      <NavLink href="/cart/payment"><FaCreditCard /> Payment</NavLink>
    </div>
  )
}

export default Steps