import Steps from '@/components/cart/Steps'
import React from 'react'

const CartLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='px-8'>
            <Steps />
            {children}
        </div>
    )
}

export default CartLayout