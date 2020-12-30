import { useContext, useEffect } from 'react'
import Subnav from '../components/atoms/Subnav'
import Context from '../context/Context'
import Philosophical from '../components/subpages/Blogs/Philosophical'
import Professional from '../components/subpages/Blogs/Professional'
import { GalleryPageStyle } from '../style/pageStyles/GalleryPageStyle'

const Blog = () => {
  const { blogActivePage, menuActive, setHomeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <GalleryPageStyle menuActive={menuActive}>
      <Subnav blog={true} />
      <div className="container">
        {blogActivePage === 1 && <Professional />}
        {blogActivePage === 2 && <Philosophical />}
      </div>
    </GalleryPageStyle>
  )
}

export default Blog
