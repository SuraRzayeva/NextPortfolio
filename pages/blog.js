import { BlogStyle } from '../style/pageStyles/BlogStyle'
import Subnav from '../components/Subnav'

const Blog = () => {
  return (
    <BlogStyle>
      <Subnav blog={true} />
      <div className="container">
        <div className="grid"></div>
      </div>
    </BlogStyle>
  )
}

export default Blog
