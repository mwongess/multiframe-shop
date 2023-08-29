import Products from "@/app/(pages)/products/page"

const Fallback = () => {
    return (
        <div className="p-4 sm:px-8">
            <div className="flex flex-col justify-center items-center">
                <img className="w-96" src="https://image.kilimall.com/kenya/new_wap/cart/cart_default_bg@2x.png.webp" alt="" />
                <h1 className="text-3xl">Your Cart is Empty!</h1>
            </div>
            <Products />
        </div>
    )
}

export default Fallback