import { useContext, useEffect, useState } from 'react'
import { SingleProjectStyle } from '../../style/pageStyles/SingleProjectStyle'
import Context from '../../context/Context'
import SEOLayout from '../../components/SEO/SEOLayout'
import { DevelopmentProjects, DesignProjects } from '../../data/projects'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import Loading from '../../components/atoms/Loading'
import OverlayLayout from '../../components/atoms/OverlayLayout'
import GalleryLayout from '../../components/subpageLayouts/GalleryLayout'
import BackToTop from '../../components/atoms/BackToTop'

const SingleProject = (props) => {
  const { title, description, date, images, tools, link, url, shortInfo, descriptionDE, titleDE } = props
  const { menuActive, setHomeActive, englishActive } = useContext(Context)
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

  if (!props) {
    return <Loading />
  } else {
    return (
      <>
        <SEOLayout title={`${title} | Portfolio - Sura Rzayeva`} description={shortInfo} image={url} type="article" />
        <SingleProjectStyle menuActive={menuActive} loading={loading}>
          {loading == 1 ? <Loading /> : null}
          {overlay.status && <OverlayLayout />}
          <Link href="/projects">
            <div className="back-btn">
              <button>{englishActive ? 'Back to projects' : 'Zurück zu Projekten'}</button>
            </div>
          </Link>
          <div className="container">
            <div className="date">
              <h4>{date}</h4>
            </div>
            <div className="title">
              <h1>{englishActive ? title : titleDE}</h1>
              <div className="content">
                <div className="description">
                  {ReactHtmlParser(englishActive ? description : descriptionDE)}
                  <div className="tools">
                    <p>
                      {englishActive ? 'In this project I used:' : 'Was ich in diesem Projekt verwendet habe:'}
                      {tools.map((tool) => (
                        <span key={tool}> {tool}</span>
                      ))}
                    </p>
                  </div>
                  {link && (
                    <a href={link} target="_blank" key={link}>
                      <h4> {englishActive ? 'Click here to go to the project.' : 'Hier klicken, um zum Projekt zu gelangen.'} </h4>
                    </a>
                  )}
                </div>
                <div className="images">
                  <GalleryLayout data={images} column={3} />
                </div>
              </div>
            </div>
          </div>
          <BackToTop />
        </SingleProjectStyle>
      </>
    )
  }
}

SingleProject.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  const allProjects = [...DevelopmentProjects, ...DesignProjects]
  const selectedProject = allProjects.find((project) => project.id == id)
  const { url, title, description, date, images, tools, link, shortInfo, descriptionDE, titleDE } = selectedProject

  return {
    url,
    title,
    description,
    descriptionDE,
    date,
    images,
    tools,
    link,
    shortInfo,
    titleDE,
  }
}

export default SingleProject
