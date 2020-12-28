import { GalleryLayoutStyle } from '../../../style/componentStyles/GalleryLayoutStyle'
import { useContext } from 'react'
import Context from '../../../context/Context'
import Masonry from 'react-masonry-css'

const Gallery = ({ data }) => {
  const { overlay, setOverlay } = useContext(Context)

  const showOverlay = (data) => {
    window.scrollTo(0, 0)
    setOverlay({ status: true, data: `/Galleries/WebDesign/${data}.jpg` })
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  }

  return (
    <GalleryLayoutStyle>
      <div className="grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map((item) => (
            <div className="gallery-box" key={item.id} onClick={() => showOverlay(item.id)}>
              <img src={item.url} />
              <div className="overlay">
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="zoom">
                  <img src="/icons/loupe.svg" alt="" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </GalleryLayoutStyle>
  )
}

export default Gallery
