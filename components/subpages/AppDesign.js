import { AppDesignStyle } from '../../style/subpageStyles/AppDesignStyle'
import { AppImages } from '../../data/Images'
import Gallery from './subpageComponents/Gallery'

const AppDesign = () => {
  return (
    <AppDesignStyle>
      <Gallery data={AppImages} />
    </AppDesignStyle>
  )
}

export default AppDesign
