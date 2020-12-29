import { useContext } from 'react'
import { BlogStyle } from '../style/pageStyles/BlogStyle'
import Subnav from '../components/atoms/Subnav'
import Context from '../context/Context'
import Philosophical from '../components/subpages/Blogs/Philosophical'
import Professional from '../components/subpages/Blogs/Professional'

const Blog = () => {
  const { blogActivePage, menuActive } = useContext(Context)

  return (
    <BlogStyle menuActive={menuActive}>
      <Subnav blog={true} />
      <div className="container">
        {blogActivePage === 1 && <Professional />}
        {blogActivePage === 2 && <Philosophical />}
      </div>
    </BlogStyle>
  )
}

export default Blog
