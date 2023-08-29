"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { FaHamburger } from "react-icons/fa"

const Hamburger = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <p className="text-xl">
                    <FaHamburger />
                </p>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>The Designer Store !</SheetTitle>
                <div className="grid gap-4 py-4">
                    <SheetClose asChild>
                        <Link href="/">Home</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/cart">Cart</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="">Orders</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="">Account</Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Hamburger
