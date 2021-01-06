import { useContext, useEffect, useState } from 'react'
import { SingleProjectStyle } from '../../style/pageStyles/SingleProjectStyle'
import { useRouter } from 'next/router'
import Context from '../../context/Context'
import { DevelopmentProjects, DesignProjects } from '../../data/projects'
import Link from 'next/link'
import Loading from '../../components/atoms/Loading'

const SingleProject = (props) => {
  const { url, title, description, date, images, tools, link } = props
  const { menuActive, setHomeActive } = useContext(Context)
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)
  const [mainLoading, setMainLoading] = useState(false)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(images.length + 1)
    if (!props) {
      setMainLoading(true)
    }
  }, [])

  useEffect(() => {
    setAllImagesCount(images.length + 1)
  }, [images])

  useEffect(() => {
    setAllImagesCount(images.length + 1)
    if (count == allImagesCount) {
      setLoading(0)
    }
  }, [count, allImagesCount, images, loading])

  console.log()
  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <SingleProjectStyle menuActive={menuActive} loading={loading}>
      {loading == 1 ? <Loading /> : null}
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
          <div className="p">{description}</div>
          <div className="tools">
            <h4>
              In this projects I used:{' '}
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
              {link && (
                <a href={link} target="_blank" key={link}>
                  <h4> Click here to go to the project. </h4>
                </a>
              )}
              {images.map((img) => (
                <img src={img} />
              ))}
            </h4>
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
