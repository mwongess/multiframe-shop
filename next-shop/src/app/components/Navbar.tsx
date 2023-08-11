import Link from "next/link"
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex items-center px-8 py-4 border-b border-white justify-between">
            <div className="flex items-center gap-[2.5rem]">
                <h1 className="font-bold text-2xl">DESIGNERSTORE</h1>
                <div className="flex items-center  gap-6">
                    <Link href="">🔥Women</Link>
                    <Link href="">🤪Men</Link>
                    <input className="bg-transparent p-3 rounded-lg" type="search" placeholder="Search for brands..." />

                </div>
            </div>
            <div className="flex items-center gap-6 ">
                <div className="flex items-center gap-2">
                    <p>mwongess</p>
                    <FaRegUser />

                </div>
                <FaRegHeart />
                <FaShoppingBag />
            </div>
        </div>
    )
}

export default Navbar