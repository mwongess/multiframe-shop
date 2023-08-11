"use client"

import Link from "next/link"
import { FaRegUser, FaAngleDown, FaRegHeart, FaShoppingBag } from "react-icons/fa";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


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
                {/* Hover Card */}
                <HoverCard>
                    <HoverCardTrigger>
                    <div className="flex gap-2 items-center hover:text-[#fd6141] cursor-pointer">
                        <FaRegUser className="cursor-pointer" />
                        <p>My Account</p>
                        <FaAngleDown />
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p>Youre logged in as <span className="underline">mwongess</span></p>
                        <p>Orders</p>
                        <p>Settings</p>
                        <hr />
                        <p className="text-red-600 font-bold">Logout</p>
                    </HoverCardContent>
                </HoverCard>
                {/* <FaRegHeart className="cursor-pointer" /> */}
                <HoverCard>
                    <HoverCardTrigger>
                        <div className="flex gap-2 items-center hover:text-[#fd6141] cursor-pointer">
                            <FaShoppingBag  />
                            <p>Cart</p>
                            <FaAngleDown />
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p>You have _ items in your cart!</p>
                        <button className="w-full rounded p-2 bg-[#fbd0cc] text-white">View your cart</button>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}

export default Navbar