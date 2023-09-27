import Image from "next/legacy/image"
import { PhotoView } from "react-photo-view"


const ProductTableCell = ({instance}) => {
    
// console.log(instance)
  return (
    <PhotoView src={instance?.product_image?.find(i => i?.is_featured)?.img}> 
      <div>
        <Image src={instance?.product_image?.find(i => i?.is_featured)?.img} alt="tableimage" width={90} height={90}/>
    </div>
    </PhotoView>
  )
}

export default ProductTableCell