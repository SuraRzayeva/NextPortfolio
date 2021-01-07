import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { ProfessionalPosts, PhilosophicalPosts } from '../../../data/blogPosts'
import BlogLayout from '../../subpageLayouts/BlogLayout'

const AllPosts = () => {
  const allBlogPosts = [...ProfessionalPosts, ...PhilosophicalPosts]
  return (
    <SubpageLayout>
      <BlogLayout data={allBlogPosts} />
    </SubpageLayout>
  )
}

export default AllPosts
