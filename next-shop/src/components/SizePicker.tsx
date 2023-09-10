import Size from "./Size"

const SizePicker = () => {
  const sizes = ["S", "M", "L", "XL"]

  return (
    <div className="my-4">
      <h1 className="font-bold mb-3">Choose Size</h1>
      <div className="flex gap-5">
        {
          sizes.map((size,index) => (
            <Size key={index} size={size} />
          ))
        }
      </div>
    </div>
  )
}

export default SizePicker