import { SubnavStyle } from '../../style/componentStyles/SubnavStyle'
import { useContext } from 'react'
import Context from '../../context/Context'

const Subnav = ({ uiux, graphic, blog, projects }) => {
  const { uiuxActivePage, setUiuxActivePage, graphicActivePage, setGraphicActivePage, blogActivePage, setBlogActivePage, projectsActivePage, setProjectsActivePage, englishActive } = useContext(Context)

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
            {englishActive ? 'Iconography' : 'Ikonographie'}
          </li>
          <li className="svg" onClick={() => setUiuxActivePage(4)}>
            SVG <span>Animation</span>
          </li>
        </ul>
      ) : null}
      {graphic ? (
        <ul>
          <li className="marketing" onClick={() => setGraphicActivePage(1)}>
            {englishActive ? 'Posters' : 'Poster'}
          </li>
          <li className="character" onClick={() => setGraphicActivePage(3)}>
            {englishActive ? 'Creatures' : 'Geschöpfe'}
          </li>
          <li className="lineart" onClick={() => setGraphicActivePage(4)}>
            {englishActive ? 'Lines' : 'Linien'}
          </li>
          <li className="illustration" onClick={() => setGraphicActivePage(2)}>
            {englishActive ? 'Illustrations' : 'Illustrationen'}
          </li>
        </ul>
      ) : null}
      {blog ? (
        <ul>
          <li className="all-posts" onClick={() => setBlogActivePage(0)}>
            {englishActive ? 'All' : 'Alle'}
          </li>
          <li className="professional" onClick={() => setBlogActivePage(1)}>
            {englishActive ? 'Professional' : 'Professionell'}
          </li>
          <li className="philosophical" onClick={() => setBlogActivePage(2)}>
            {englishActive ? 'Philosophical' : 'Philosophisch'}
          </li>
        </ul>
      ) : null}
      {projects ? (
        <ul>
          <li className="development" onClick={() => setProjectsActivePage(1)}>
            {englishActive ? 'Development' : 'Entwicklung'}
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
