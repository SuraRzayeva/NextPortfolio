import { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import SEOLayout from '../../components/SEO/SEOLayout'
import { BlogPostStyle } from '../../style/pageStyles/BlogPostStyle'
import ReactHtmlParser from 'react-html-parser'
import Loading from '../../components/atoms/Loading'
import { PhilosophicalPosts } from '../../data/blogPosts'
import { ProfessionalPosts } from '../../data/blogPosts'
import Link from 'next/link'

const BlogPost = ({ title, date, article, description, images, url }) => {
  const { menuActive, setHomeActive } = useContext(Context)
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)
  const syntaxcorrection = 'onLoad'

  const increaseCount = () => {
    setCount((prev) => prev + 1)
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(images.length)
  }, [])

  useEffect(() => {
    setAllImagesCount(images.length)
  }, [images])

  useEffect(() => {
    setAllImagesCount(images.length)
    if (count == allImagesCount) {
      setTimeout(() => {
        setLoading(0)
      }, 1100)
    }
  }, [count, allImagesCount, images, loading])

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <>
      <SEOLayout title={`${title} | Portfolio - Sura Rzayeva`} description={description} image={url} />
      <BlogPostStyle menuActive={menuActive} loading={loading}>
        {loading == 1 ? <Loading full={false} /> : null}
        <Link href="/blog">
          <div className="back-btn">
            <button>Back to blogs</button>
          </div>
        </Link>
        <div className="container">
          <div className="date">
            <h4>{date}</h4>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="content">{ReactHtmlParser(article)}</div>
        </div>
      </BlogPostStyle>
    </>
  )
}

BlogPost.getInitialProps = async (ctx) => {
  const { id } = ctx.query

  const allBlogPosts = [...PhilosophicalPosts, ...ProfessionalPosts]
  const selectedPost = allBlogPosts.find((post) => post.id == id)
  const { title, date, article, description, images, url } = selectedPost

  return {
    title,
    date,
    article,
    description,
    images,
    url,
  }
}

export default BlogPost
