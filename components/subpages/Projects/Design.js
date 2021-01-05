import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import ProjectLayout from '../../subpageLayouts/ProjectLayout'
import { DesignProjects } from '../../../data/projects'

const Design = () => {
  return (
    <SubpageLayout>
      <ProjectLayout data={DesignProjects} />
    </SubpageLayout>
  )
}

export default Design
