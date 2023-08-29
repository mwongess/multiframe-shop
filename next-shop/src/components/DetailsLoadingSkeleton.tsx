import React from 'react'

const DetailsLoadingSkeleton = () => {
    return (
        <div className="flex flex-col sm:flex-row border-white justify-center p-8 gap-8 min-h-screen">
            <div className="sm:w-[40%]">
                {/* Loading skeleton for the main image */}
                <div className="w-full h-[350px] sm:h-[500px] bg-gray-300 animate-pulse" />

                {/* Loading skeleton for the grid of images */}
                <div className="grid grid-cols-4 gap-4 mt-3 h-[80px] sm:h-[100px]">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-full rounded bg-gray-300 animate-pulse"
                        />
                    ))}
                </div>
            </div>

            <div className="sm:w-[30%] h-fit">
                {/* Loading skeleton for title */}
                <h1 className="font-bold text-transparent bg-gray-300 rounded">Title</h1>
                {/* Rest of the loading skeletons */}
                <h1 className="font-bold text-transparent w-[6rem] bg-gray-300 rounded mt-[1rem]">Title</h1>
                <h1 className="font-bold text-transparent w-[4rem] bg-gray-300 rounded mt-[1rem]">Title</h1>
            </div>

            <div className="flex flex-col sm:p-3 gap-3 sm:w-[30%] h-fit">
                <p className="font-bold bg-gray-300 animate-pulse w-[4rem] h-[1.5rem] rounded"></p>
                <div className='flex gap-2'>
                    <div className='bg-gray-300 animate-pulse rounded w-1/2 h-[4rem]'></div>
                    <div>
                        <p className='bg-gray-300 animate-pulse rounded w-[4rem] h-[1rem]'></p>
                        <p className='bg-gray-300 animate-pulse rounded w-[4rem] mt-[1rem] h-[2rem]'></p>
                    </div>
                </div>
                <div className='flex gap-2 justify-between '>
                    <p className='bg-gray-300 animate-pulse rounded w-1/2 h-[2rem]'></p>
                    <p className='bg-gray-300 animate-pulse rounded w-1/2 h-[1rem]'></p>
                </div>
                <div className='flex gap-2 justify-between '>
                    <p className='bg-gray-300 animate-pulse rounded w-1/2 h-[1rem]'></p>
                    <p className='bg-gray-300 animate-pulse rounded w-1/2 h-[1rem]'></p>
                </div>
                <button className=' bg-gray-300 animate-pulse rounded h-[3rem]'></button>
                <button className=' bg-gray-300 animate-pulse rounded h-[3rem]'></button>
            </div>
        </div>

    )
}

export default DetailsLoadingSkeleton