import { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import { BlogPostStyle } from '../../style/pageStyles/BlogPostStyle'
import ReactHtmlParser from 'react-html-parser'
import { PhilosophicalPosts } from '../../data/blogPosts'
import { ProfessionalPosts } from '../../data/blogPosts'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BlogPost = ({ title, date, article }) => {
  const { menuActive, setHomeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <BlogPostStyle menuActive={menuActive}>
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
  )
}

BlogPost.getInitialProps = async (ctx) => {
  const { id } = ctx.query

  const allBlogPosts = [...PhilosophicalPosts, ...ProfessionalPosts]
  const selectedPost = allBlogPosts.find((post) => post.id == id)
  const { title, date, article } = selectedPost

  return {
    title,
    date,
    article,
  }
}

export default BlogPost
