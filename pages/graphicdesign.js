import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import Subnav from '../components/atoms/Subnav'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import SEOLayout from '../components/SEO/SEOLayout'
import OverlayLayout from '../components/atoms/OverlayLayout'
import PosterDesign from '../components/subpages/GraphicGallery/PosterDesign'
import IllustrationDesign from '../components/subpages/GraphicGallery/IllustrationDesign'
import CharacterDesign from '../components/subpages/GraphicGallery/CharacterDesign'
import LineArtDesign from '../components/subpages/GraphicGallery/LineArtDesign'

const GraphicDesign = () => {
  const { graphicActivePage, overlay, menuActive, setHomeActive, setBlogActive } = useContext(Context)
  const { status } = overlay

  useEffect(() => {
    setHomeActive(false)
    setBlogActive(false)
  }, [])

  return (
    <>
      <SEOLayout title="Graphic Design | Portfolio - Sura Rzayeva" description="In this gallery you can see my art, which include marketing posters, illustrations, character design and line art." image="/Projects/Portfolio/2.png" />
      <GalleryPageStyle menuActive={menuActive}>
        {status && <OverlayLayout />}
        <Subnav graphic={true} />
        <div className="container">
          {graphicActivePage === 1 && <PosterDesign />}
          {graphicActivePage === 2 && <IllustrationDesign />}
          {graphicActivePage === 3 && <CharacterDesign />}
          {graphicActivePage === 4 && <LineArtDesign />}
        </div>
      </GalleryPageStyle>
    </>
  )
}

export default GraphicDesign
