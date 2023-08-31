"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { FaGithub, FaHamburger, FaHome, FaShoppingBag, FaTruck, FaUserCheck } from "react-icons/fa"
import Link from "next/link"

const Hamburger = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <p className="text-xl">
                    <FaHamburger />
                </p>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>Latest Clothes Store !</SheetTitle>
                <div className="grid gap-4 py-4">
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href="/"><FaHome /> Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href="/cart"><FaShoppingBag /> Cart</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href=""><FaTruck /> Orders</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href="https://github.com/mwongess/multiframe-shop" target="_blank"><FaGithub /> Github</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href=""><FaUserCheck /> Account</Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Hamburger
