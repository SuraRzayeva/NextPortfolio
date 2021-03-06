import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { PhilosophicalPosts } from '../../../data/blogPosts'
import BlogLayout from '../../subpageLayouts/BlogLayout'

const Philosophical = () => {
  return (
    <SubpageLayout>
      <BlogLayout data={PhilosophicalPosts} />
    </SubpageLayout>
  )
}

export default Philosophical
