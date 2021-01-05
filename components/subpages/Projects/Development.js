import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { DevelopmentProjects } from '../../../data/projects'
import ProjectLayout from '../../subpageLayouts/ProjectLayout'

const Development = () => {
  return (
    <SubpageLayout>
      <ProjectLayout data={DevelopmentProjects} />
    </SubpageLayout>
  )
}

export default Development
