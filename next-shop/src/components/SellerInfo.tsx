const SellerInfo = () => {
    return (
        <div>
            <h1 className="font-bold mt-4 mb-1">Seller Information</h1>
            <div className="flex gap-4">
                <div className="h-[3rem] w-[3rem] bg-[gray] p-2 rounded-full border">
                    <img className="h-full w-full" src="/amiri.png" alt="" />
                </div>
                <div>
                    <h1 className="font-bold">Designer Store</h1>
                    <p>Active 5 secs ago!</p>
                    {/* <button className="border rounded-lg w-full p-2">Visit Store</button> */}
                </div>

            </div>
        </div>
    )
}

export default SellerInfo