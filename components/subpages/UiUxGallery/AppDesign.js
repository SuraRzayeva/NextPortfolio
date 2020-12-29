import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { AppImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const AppDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={AppImages} />
    </SubpageLayout>
  )
}

export default AppDesign
