"use client"

import { cart as fromCart } from '@/_data/cart';
import { products as fromData} from '@/_data/products';
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
            {children}
        </ProductsProvider>
    )
}

export default ProtectedLayout