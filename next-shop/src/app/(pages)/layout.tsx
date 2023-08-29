"use client"

import { cart as fromCart } from '@/_data/cart';
import { products as fromData } from '@/_data/products';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Iproduct, ProductsProvider } from '@/context/productsContext';
import React, { useState } from 'react'

const ProtectedLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [products, setProducts] = useState<Array<Iproduct>>(fromData)
    const [cart, setCart] = useState<Array<Iproduct>>(fromCart)

    return (
        <ProductsProvider value={{ products, cart, setCart }}>
            <Navbar />
            <main className='2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center'>
                <div className=''>
                    {children}
                </div>
            </main>
            <Footer />
        </ProductsProvider>
    )
}

export default ProtectedLayout