import { SubnavStyle } from '../../style/componentStyles/SubnavStyle'
import { useContext } from 'react'
import Context from '../../context/Context'

const Subnav = ({ uiux, graphic, blog, projects }) => {
  const { uiuxActivePage, setUiuxActivePage, graphicActivePage, setGraphicActivePage, blogActivePage, setBlogActivePage, projectsActivePage, setProjectsActivePage } = useContext(Context)

  return (
    <SubnavStyle uiuxActivePage={uiuxActivePage} graphicActivePage={graphicActivePage} blogActivePage={blogActivePage} projectsActivePage={projectsActivePage}>
      {uiux ? (
        <ul>
          <li className="web" onClick={() => setUiuxActivePage(1)}>
            Web <span>Design</span>
          </li>
          <li className="app" onClick={() => setUiuxActivePage(2)}>
            App <span>Design</span>
          </li>
          <li className="icon" onClick={() => setUiuxActivePage(3)}>
            Iconography
          </li>
          {/* <li className="svg" onClick={() => setUiuxActivePage(4)}>
            SVG <span>Animations</span>
          </li> */}
        </ul>
      ) : null}
      {graphic ? (
        <ul>
          <li className="marketing" onClick={() => setGraphicActivePage(1)}>
            Posters
          </li>
          <li className="illustration" onClick={() => setGraphicActivePage(2)}>
            Illustrations
          </li>
          <li className="character" onClick={() => setGraphicActivePage(3)}>
            Characters
          </li>
          <li className="lineart" onClick={() => setGraphicActivePage(4)}>
            Lines
          </li>
        </ul>
      ) : null}
      {blog ? (
        <ul>
          <li className="all-posts" onClick={() => setBlogActivePage(0)}>
            All
          </li>
          <li className="professional" onClick={() => setBlogActivePage(1)}>
            Professional
          </li>
          <li className="philosophical" onClick={() => setBlogActivePage(2)}>
            Philosophical
          </li>
        </ul>
      ) : null}
      {projects ? (
        <ul>
          <li className="development" onClick={() => setProjectsActivePage(1)}>
            Development
          </li>
          <li className="design" onClick={() => setProjectsActivePage(2)}>
            Design
          </li>
        </ul>
      ) : null}
    </SubnavStyle>
  )
}

export default Subnav
