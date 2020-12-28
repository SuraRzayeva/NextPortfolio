import { WebDesignStyle } from '../../style/subpageStyles/WebDesignStyle'
import { WebImages } from '../../data/Images'
import Gallery from './subpageComponents/Gallery'

const WebDesign = () => {
  return (
    <WebDesignStyle>
      <Gallery data={WebImages} />
    </WebDesignStyle>
  )
}

export default WebDesign
