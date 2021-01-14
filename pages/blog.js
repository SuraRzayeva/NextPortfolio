import { useContext, useEffect } from 'react'
import Subnav from '../components/atoms/Subnav'
import Context from '../context/Context'
import SEOLayout from '../components/SEO/SEOLayout'
import Philosophical from '../components/subpages/Blogs/Philosophical'
import Professional from '../components/subpages/Blogs/Professional'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'
import AllPosts from '../components/subpages/Blogs/AllPosts'

const Blog = () => {
  const { blogActivePage, menuActive, setHomeActive, setBlogActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
    setBlogActive(true)
  }, [])

  return (
    <>
      <SEOLayout
        title="Blog | Portfolio - Sura Rzayeva"
        description="In this blog you can find my articles about design, coding, science, psychology and philosophy. I give you information about the latest hot topic in design and development industry and sometimes question our reality and existence. Enjoy!"
        image="/Projects/Portfolio/3.png"
      />
      <GalleryPageStyle menuActive={menuActive}>
        <Subnav blog={true} />
        <div className="container">
          {blogActivePage === 0 && <AllPosts />}
          {blogActivePage === 1 && <Professional />}
          {blogActivePage === 2 && <Philosophical />}
        </div>
      </GalleryPageStyle>
    </>
  )
}

export default Blog
