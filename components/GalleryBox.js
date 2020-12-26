import { GalleryBoxStyle } from '../style/componentStyles/GalleryBoxStyle'
import Image from 'next/image'

const GalleryBox = ({ url, title, id, callback }) => {
  return (
    <GalleryBoxStyle className={`item item-${id}`} onClick={() => callback(id)}>
      <Image src={url} layout="fill" />
      <div className="overlay">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="zoom">
          <img src="/icons/loupe.svg" alt="" />
        </div>
      </div>
    </GalleryBoxStyle>
  )
}

export default GalleryBox
