import Subnav from '../components/atoms/Subnav'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import Design from '../components/subpages/Projects/Design'
import Development from '../components/subpages/Projects/Development'
import OverlayLayout from '../components/atoms/OverlayLayout'

const Projects = () => {
  const { setHomeActive, projectsActivePage, menuActive, overlay } = useContext(Context)
  const { status } = overlay
  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <GalleryPageStyle menuActive={menuActive}>
      <Subnav projects={true} />
      <div className="container">
        {projectsActivePage === 1 && <Development />}
        {projectsActivePage === 2 && <Design />}
      </div>
    </GalleryPageStyle>
  )
}

export default Projects
