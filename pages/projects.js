import Subnav from '../components/atoms/Subnav'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const Projects = () => {
  const { setHomeActive, projectsActivePage, menuActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <GalleryPageStyle menuActive={menuActive}>
      <Subnav projects={true} />
    </GalleryPageStyle>
  )
}

export default Projects
