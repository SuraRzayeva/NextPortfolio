import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import Subnav from '../components/atoms/Subnav'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import OverlayLayout from '../components/atoms/OverlayLayout'
import PosterDesign from '../components/subpages/GraphicGallery/PosterDesign'

const GraphicDesign = () => {
  const { graphicActivePage, overlay, menuActive, setHomeActive } = useContext(Context)
  const { status } = overlay

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <GalleryPageStyle menuActive={menuActive}>
      {status && <OverlayLayout />}
      <Subnav graphic={true} />
      <div className="container">
        {graphicActivePage === 1 && <PosterDesign />}
        {graphicActivePage === 2 && 'heyyo'}
        {graphicActivePage === 3 && 'huuuuu'}
        {graphicActivePage === 4 && 'svg active'}
      </div>
    </GalleryPageStyle>
  )
}

export default GraphicDesign
