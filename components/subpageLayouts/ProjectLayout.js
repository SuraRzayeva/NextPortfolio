import { useState, useEffect, useContext } from 'react'
import { ProjectLayoutStyle } from '../../style/componentStyles/ProjectLayoutStyle'
import Masonry from 'react-masonry-css'
import Loading from '../atoms/Loading'
import Link from 'next/link'
import Context from '../../context/Context'
import MainButton from '../atoms/MainButton'

const BlogLayout = ({ data }) => {
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)
  const { englishActive } = useContext(Context)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
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
    <ProjectLayoutStyle loading={loading}>
      {loading == 1 ? <Loading full={false} /> : null}
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
                    <h4>{englishActive ? item.title : item.titleDE}</h4>
                    <p>{englishActive ? item.shortInfo : item.shortInfoDE}</p>
                    <div className="tools">
                      {englishActive ? 'I used:' : 'Was ich benutzt habe:'}
                      {item.tools.map((item) => (
                        <span key={item}> {item}</span>
                      ))}
                    </div>
                    <MainButton label={englishActive ? 'Read More' : 'Mehr Lesen'} />
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
