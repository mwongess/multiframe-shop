
import { FaCreditCard, FaInfoCircle, FaShoppingBag } from "react-icons/fa"
import NavLink from "../NavLink"

const Steps = () => {
  return (
    <div className="flex justify-between border-b border-white">
      <div className="text-center">
        <p>1</p>
        <NavLink  href=""><FaShoppingBag /> Cart</NavLink>
      </div>
      <div className="text-center">
        <p>2</p>
        <NavLink href="/cart/details"><FaInfoCircle />Delivery Details</NavLink>
      </div>
      <div className="text-center">
        <p>3</p>
        <NavLink href="/cart/payment"><FaCreditCard /> Payment</NavLink>
      </div>
    </div>
  )
}

export default Steps