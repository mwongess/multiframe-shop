"use client"

import Link from "next/link"
import { FaRegUser, FaAngleDown, FaShoppingBag, FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation'

import { useProducts } from "@/context/productsContext";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


const Navbar = () => {
    const [cartItemsCount, setCartItemsCount] = useState<number>()

    // From context
    const { cart } = useProducts()!

    useEffect(() => {
        setCartItemsCount(cart.length)
    }, [cart])

    const router = useRouter()
    return (
        <div className="sticky z-10 top-0 flex items-center px-4 sm:px-8 py-3 sm:py-2 justify-between border-b border-slate-300 bg-[#e6e8ea]">
            <div className="flex items-center gap-[2.5rem] w-[70%]">
                <h1 className="font-bold text-xl sm:text-2xl cursor-pointer select-none" onClick={() => router.push('/')}>DESIGNERSTORE</h1>
                <div className="hidden sm:flex items-center  gap-6 w-[90%]">

                    <Link className="nowrap" href="">🔥Women</Link>
                    <Link href="">🤪Men</Link>
                    <div className="w-[60%]">

                        <input className="bg-white border border-slate-300 w-full py-1 px-3 rounded-full" type="search" placeholder="Search for brands..." />
                    </div>

                </div>
            </div>
            <div className="hidden sm:flex items-center gap-6 ">
                    <Link className="flex items-center gap-2" href="https://github.com/mwongess/multiframe-shop" target="_blank"><FaGithub /> Github</Link>
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
                            <FaShoppingBag />
                            <p>Cart</p>
                            <FaAngleDown />
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <p>You have {cartItemsCount} item(s) in your cart!</p>
                        <button className="w-full rounded p-2 bg-[#fd6141] text-white" onClick={() => router.push('/cart')}>View your cart</button>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="block sm:hidden">
                <Hamburger />
            </div>
        </div>
    )
}

export default Navbar