import Steps from '@/components/cart/Steps'
import React from 'react'

const CartLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Steps />
            {children}
        </div>
    )
}

export default CartLayout