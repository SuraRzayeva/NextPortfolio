import { WebDesignStyle } from '../../style/subpageStyles/WebDesignStyle'
import { useContext } from 'react'
import Context from '../../context/Context'
import Image from 'next/image'
import { WebImages } from '../../data/Images'
import GalleryBox from '../../components/GalleryBox'

const WebDesign = () => {
  const { overlay, setOverlay } = useContext(Context)

  const showOverlay = (data) => {
    window.scrollTo(0, 0)
    setOverlay({ status: true, data: `/Galleries/WebDesign/${data}.jpg` })
  }

  return (
    <WebDesignStyle>
      <div className="grid">
        {WebImages.map((item) => (
          <GalleryBox title={item.title} url={item.url} id={item.id} callback={showOverlay} />
        ))}
      </div>
    </WebDesignStyle>
  )
}

export default WebDesign
