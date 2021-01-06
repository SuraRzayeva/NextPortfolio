import { useState, useEffect } from 'react'
import { ProjectLayoutStyle } from '../../style/componentStyles/ProjectLayoutStyle'
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
      setLoading(0)
    }
  }, [count, allImagesCount, data, loading])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  }

  return (
    <ProjectLayoutStyle loading={loading}>
      <div className="grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {data.map((item) => (
            <Link as={`/projects/${item.id}`} href="/projects/[title]" key={item.id}>
              <div className="blog-box">
                <div className="image-div">
                  <img src={item.url} onLoad={increaseCount} />
                </div>
                <div className="post-description">
                  <div className="post-info">
                    <h4>{item.title}</h4>
                    <p>{item.shortInfo}</p>
                    <div className="tools">
                      I used:
                      {item.tools.map((item) => (
                        <span> {item}</span>
                      ))}
                    </div>
                    <MainButton label="Read More" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Masonry>
      </div>
    </ProjectLayoutStyle>
  )
}

export default BlogLayout
