"use client"

import Navbar from '@/components/Navbar';
import { ProductsProvider } from '@/context/productsContext';
import React, { useState } from 'react'

const ProtectedLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const products = [
        {
            id: 1,
            name: "Amiri Shirt",
            description: "Lorem, ipsum dolor ...",
            price: 1350,
            image: "/amiri-shirt.jpg",
            count: 10,
        },
        {
            id: 2,
            name: "Trapstar Hoodie",
            description: "Lorem, ipsum dolor ...",
            price: 1350,
            image: "/trapstar-hoodie1.jpg",
            count: 10,
        },

        {
            id: 3,
            name: "Amiri Hoodie",
            description: "Lorem, ipsum dolor ...",
            price: 2449,
            image: "/amiri-hoodie.png",
            count: 5,
        },
        {
            id: 4,
            name: "Vlone Tshirt",
            description: "Lorem, ipsum dolor ...",
            price: 999,
            image: "/vlone-shirt1.jpg",
            count: 20,
        },
        {
            id: 5,
            name: "Amiri",
            description: "Lorem, ipsum dolor ...",
            price: 1449,
            image: "/amiri-shirt1.jpg",
            count: 20,
        },
        {
            id: 6,
            name: "Bottega Coat",
            description: "Lorem, ipsum dolor ...",
            price: 1349,
            image: "/bottega-coat1.jpg",
            count: 5,
        },
        {
            id: 7,
            name: "Balenciaga Bag",
            description: "Lorem, ipsum dolor ...",
            price: 1449,
            image: "/balenciaga-bag1.jpg",
            count: 20,
        },
        {
            id: 8,
            name: "The NFC",
            description: "Lorem, ipsum dolor ...",
            price: 1349,
            image: "/northface-coat1.jpg",
            count: 20,
        },
        {
            id: 9,
            name: "Versace Coat",
            description: "Lorem, ipsum dolor ...",
            price: 2449,
            image: "/versace-coat1.jpg",
            count: 5,
        },
        {
            id: 10,
            name: "Louis V",
            description: "Lorem, ipsum dolor ...",
            price: 1350,
            image: "/lv-full.jpg",
            count: 10,
        },
        // Add more products here
    ]
    return (
        <ProductsProvider value={{ products }}>
            <Navbar />
            {children}
        </ProductsProvider>
    )
}

export default ProtectedLayout