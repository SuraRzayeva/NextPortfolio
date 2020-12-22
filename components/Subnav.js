import { SubnavStyle } from '../style/componentStyles/SubnavStyle'

const Subnav = ({ uiux, graphic, blog, projects }) => {
  return (
    <SubnavStyle>
      {uiux ? (
        <ul>
          <li>Web Design</li>
          <li>App Design</li>
          <li>Iconography</li>
          <li>SVG Animations</li>
        </ul>
      ) : null}
      {graphic ? (
        <ul>
          <li>Marketing Design</li>
          <li>Illustrations</li>
          <li>Character Design</li>
          <li>Line Art</li>
        </ul>
      ) : null}
      {blog ? (
        <ul>
          <li>Professional</li>
          <li>Philosophical</li>
        </ul>
      ) : null}
      {projects ? (
        <ul>
          <li>Development</li>
          <li>Design</li>
        </ul>
      ) : null}
    </SubnavStyle>
  )
}

export default Subnav
