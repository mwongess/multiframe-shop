const News = () => {
    return (
        <div className="hidden sm:flex bg-gradient-to-r from-[#fbd0cc] to-[#fed1f5]  rounded-[30px] min-h-[40vh]  p-3 mt-4 mx-4 sm:mx-8 animate-in">
            <div className="flex justify-end items-center  bg-[url(/amiri.png)] bg-left bg-contain bg-no-repeat h-[40vh] self-end">
                <div className="flex items-center w-[50%] sm:w-[70%]">
                    <h1 className="font-bold text-xl sm:text-5xl">DISCOUNTS UP TO 50% FROM OUR STORE</h1>
                    <img className="hidden sm:block h-[30%] sm:h-[60%]" src="/hearts1.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default News