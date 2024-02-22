import '../styles/imageViewer.scss'
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from 'react';

const ImageViewerContainer = ({imgData, setImageViwer}) => {
    const [imgindex, setIndexImg] = useState(0)
    const imgSlideLeft = () => {
        if(imgindex === 0){
            setIndexImg(imgData.length)
            return
        }
        setIndexImg((prev) => (
            prev - 1
        ))
    }
    const imgSlideRight = () => {
        if(imgindex === imgData.length-1){
            setIndexImg(0)
            return
        }
        setIndexImg((prev) => (
            prev + 1
        ))
    }

  return (
    <div className="imageViewerMainContainer">
    <IoClose className='closeSvg' onClick={() => setImageViwer(false)} />
    <div className="imageViewerContainer">
        <FaChevronLeft onClick={imgSlideLeft} />
        <img src={imgData[imgindex]} alt="" />
        <FaChevronRight onClick={imgSlideRight} />
    </div>
</div>
  )
}

export default ImageViewerContainer