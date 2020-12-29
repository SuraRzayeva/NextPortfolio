import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { ProfessionalPosts } from '../../../data/blogPosts'
import BlogLayout from '../../subpageLayouts/BlogLayout'

const Professional = () => {
  return (
    <SubpageLayout>
      <BlogLayout data={ProfessionalPosts} />
    </SubpageLayout>
  )
}

export default Professional
