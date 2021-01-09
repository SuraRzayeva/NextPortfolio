import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { IconImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const IconDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={IconImages} column={4} />
    </SubpageLayout>
  )
}

export default IconDesign
