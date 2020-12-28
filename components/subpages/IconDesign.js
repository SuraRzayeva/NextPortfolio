import { IconDesignStyle } from '../../style/subpageStyles/IconDesignStyle'
import { IconImages } from '../../data/Images'
import Gallery from './subpageComponents/Gallery'

const IconDesign = () => {
  return (
    <IconDesignStyle>
      <Gallery data={IconImages} />
    </IconDesignStyle>
  )
}

export default IconDesign
