import Subnav from '../components/atoms/Subnav'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import SEOLayout from '../components/SEO/SEOLayout'
import WebDesign from '../components/subpages/UiUxGallery/WebDesign'
import OverlayLayout from '../components/atoms/OverlayLayout'
import AppDesign from '../components/subpages/UiUxGallery/AppDesign'
import IconDesign from '../components/subpages/UiUxGallery/IconDesign'

const UiUxDesign = () => {
  const { setHomeActive, uiuxActivePage, overlay, menuActive } = useContext(Context)
  const { status } = overlay

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <>
      <SEOLayout />
      <GalleryPageStyle menuActive={menuActive}>
        {status && <OverlayLayout />}
        <Subnav uiux={true} />
        <div className="container">
          {uiuxActivePage === 1 && <WebDesign />}
          {uiuxActivePage === 2 && <AppDesign />}
          {uiuxActivePage === 3 && <IconDesign />}
          {uiuxActivePage === 4 && 'svg active'}
        </div>
      </GalleryPageStyle>
    </>
  )
}

export default UiUxDesign
