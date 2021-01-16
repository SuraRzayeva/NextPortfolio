import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { SvgImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const SvgDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={SvgImages} column={4} />
    </SubpageLayout>
  )
}

export default SvgDesign
