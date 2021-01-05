import { useContext, useEffect } from 'react'
import { SingleProjectStyle } from '../../style/pageStyles/SingleProjectStyle'
import { useRouter } from 'next/router'
import Context from '../../context/Context'
import { DevelopmentProjects, DesignProjects } from '../../data/projects'
import Link from 'next/link'

const SingleProject = ({ url, title, description, date, images, tools, link }) => {
  const { menuActive, setHomeActive } = useContext(Context)

  console.log()
  useEffect(() => {
    setHomeActive(false)
  }, [])

  if (!url || !title || !description) {
    return <h3>Loading...</h3>
  }

  return (
    <SingleProjectStyle menuActive={menuActive}>
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
            </h4>
          </div>
        </div>
      </div>
    </SingleProjectStyle>
  )
}

SingleProject.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      loading: true,
    }
  }

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
