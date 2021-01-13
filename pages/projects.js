import Subnav from '../components/atoms/Subnav'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import Design from '../components/subpages/Projects/Design'
import Development from '../components/subpages/Projects/Development'
import SEOLayout from '../components/SEO/SEOLayout'

const Projects = () => {
  const { setHomeActive, projectsActivePage, menuActive, overlay, setBlogActive } = useContext(Context)
  const { status } = overlay
  useEffect(() => {
    setHomeActive(false)
    setBlogActive(false)
  }, [])

  return (
    <>
      <SEOLayout title="Projects | Portfolio - Sura Rzayeva" description="Here you can check my innovative web development and design projects which express my style and speciality." />
      <GalleryPageStyle menuActive={menuActive}>
        <Subnav projects={true} />
        <div className="container">
          {projectsActivePage === 1 && <Development />}
          {projectsActivePage === 2 && <Design />}
        </div>
      </GalleryPageStyle>
    </>
  )
}

export default Projects
