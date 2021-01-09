import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { PosterImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const PosterDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={PosterImages} column={3} />
    </SubpageLayout>
  )
}

export default PosterDesign
