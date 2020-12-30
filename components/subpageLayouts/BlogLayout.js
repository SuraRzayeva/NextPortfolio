import { BlogLayoutStyle } from '../../style/componentStyles/BlogLayoutStyle'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

const BlogLayout = ({ data }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  }

  return (
    <BlogLayoutStyle>
      <div className="grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map((item) => (
            <Link as={`/blogs/${item.id}`} href="/blogs/[title]" key={item.id}>
              <div className="blog-box">
                <div className="image-div">
                  <img src={item.url} />
                </div>
                <div className="post-description">
                  <div className="post-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button className="cta">Read more</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
    </BlogLayoutStyle>
  )
}

export default BlogLayout
