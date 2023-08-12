const QuantityAdjuster = () => {
  return (
    <div className="flex justify-between">
        <div className="flex justify-around p-2 border rounded-lg w-[50%]">
            <p className="cursor-pointer font-bold">-</p>
            <p className="cursor-pointer font-bold">1</p>
            <p className="cursor-pointer font-bold">+</p>
        </div>
        <p>Stock: <span className="font-bold">459</span></p>
    </div>
  )
}

export default QuantityAdjuster