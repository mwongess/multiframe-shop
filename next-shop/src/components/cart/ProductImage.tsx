import Image from "next/image"

const ProductImage = ({url}: {url: string}) => {
  return (
    <Image  width={100} height={50} src={url} quality={100}	 alt="" />
  )
}

export default ProductImage