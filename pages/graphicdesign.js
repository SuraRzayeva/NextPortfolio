import { GraphicDesignStyle } from '../style/pageStyles/GraphicDesignStyle'
import Subnav from '../components/Subnav'

const GraphicDesign = () => {
  return (
    <GraphicDesignStyle>
      <Subnav graphic={true} />
      <div className="container">
        <div className="grid"></div>
      </div>
    </GraphicDesignStyle>
  )
}

export default GraphicDesign
