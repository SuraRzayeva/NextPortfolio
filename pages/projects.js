import { ProjectsStyle } from '../style/pageStyles/ProjectsStyle'
import Subnav from '../components/atoms/Subnav'

const Projects = () => {
  return (
    <ProjectsStyle>
      <Subnav projects={true} />
    </ProjectsStyle>
  )
}

export default Projects
