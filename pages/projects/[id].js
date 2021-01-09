import { useContext, useEffect, useState } from 'react'
import { SingleProjectStyle } from '../../style/pageStyles/SingleProjectStyle'
import Context from '../../context/Context'
import { DevelopmentProjects, DesignProjects } from '../../data/projects'
import Link from 'next/link'
import Loading from '../../components/atoms/Loading'
import OverlayLayout from '../../components/atoms/OverlayLayout'
import GalleryLayout from '../../components/subpageLayouts/GalleryLayout'

const SingleProject = (props) => {
  const { title, description, date, images, tools, link } = props
  const { menuActive, setHomeActive } = useContext(Context)
  const { overlay, setOverlay } = useContext(Context)
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
  }

  const showOverlay = (data) => {
    window.scrollTo(0, 0)
    setOverlay({ status: true, data: data })
    console.log('overlay where')
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(images.length)
  }, [])

  useEffect(() => {
    setAllImagesCount(images.length)
  }, [props])

  useEffect(() => {
    setAllImagesCount(images.length)
    if (count == allImagesCount) {
      setTimeout(() => {
        setLoading(0)
      }, 1100)
    }
  }, [count, allImagesCount, props, loading])

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <SingleProjectStyle menuActive={menuActive} loading={loading}>
      {loading == 1 ? <Loading /> : null}
      {overlay.status && <OverlayLayout />}
      <Link href="/projects">
        <div className="back-btn">
          <button>Back to projects</button>
        </div>
      </Link>
      <div className="container">
        <div className="date">
          <h4>{date}</h4>
        </div>
        <div className="title">
          <h1>{title}</h1>
          <div className="content">
            <div className="description">
              <p>{description}</p>
              <div className="tools">
                <p>
                  In this projects I used:
                  {tools.map((tool) => (
                    <span key={tool}> {tool}</span>
                  ))}
                </p>
              </div>
              {link && (
                <a href={link} target="_blank" key={link}>
                  <h4> Click here to go to the project. </h4>
                </a>
              )}
            </div>
            <div className="images">
              <GalleryLayout data={images} column={3} />
            </div>
          </div>
        </div>
      </div>
    </SingleProjectStyle>
  )
}

SingleProject.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const allProjects = [...DevelopmentProjects, ...DesignProjects]
  const selectedProject = allProjects.find((project) => project.id == id)
  const { url, title, description, date, images, tools, link } = selectedProject

  return {
    url,
    title,
    description,
    date,
    images,
    tools,
    link,
  }
}

export default SingleProject
