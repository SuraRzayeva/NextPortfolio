import { useState, useEffect } from 'react'
import { BlogLayoutStyle } from '../../style/componentStyles/BlogLayoutStyle'
import Masonry from 'react-masonry-css'
import Loading from '../atoms/Loading'
import Link from 'next/link'
import MainButton from '../atoms/MainButton'

const BlogLayout = ({ data }) => {
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
    console.log('setting:' + count)
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(data.length)
  }, [])

  useEffect(() => {
    setAllImagesCount(data.length)
  }, [data])

  useEffect(() => {
    setAllImagesCount(data.length)
    if (count == allImagesCount) {
      setTimeout(() => {
        setLoading(0)
      }, 1100)
    }
  }, [count, allImagesCount, data, loading])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  }

  return (
    <BlogLayoutStyle loading={loading}>
      {loading == 1 ? <Loading /> : null}
      <div className="grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map((item) => (
            <Link as={`/blogs/${item.id}`} href="/blogs/[title]" key={item.id}>
              <div className="blog-box">
                <div className="image-div">
                  <img src={item.url} onLoad={increaseCount} />
                </div>
                <div className="post-description">
                  <div className="post-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <MainButton label="Read More" />
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
