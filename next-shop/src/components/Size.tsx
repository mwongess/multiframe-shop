const Size = ({ size }: { size: string }) => {
    return (
        <div className="w-[2rem] text-center border-2 rounded-lg cursor-pointer font-bold">
            {size}
        </div>
    )
}

export default Size