import Subnav from '../components/Subnav'
import { UiuxdesignStyle } from '../style/pageStyles/UiuxdesignStyle'

const UiUxDesign = () => {
  return (
    <UiuxdesignStyle>
      <Subnav uiux={true} />
      <div className="container">
        <div className="grid">{/* Here will be subpages depending on the active submenu */}</div>
      </div>
    </UiuxdesignStyle>
  )
}

export default UiUxDesign
