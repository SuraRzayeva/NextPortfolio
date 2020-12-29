import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { PosterImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const PosterDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={PosterImages} />
    </SubpageLayout>
  )
}

export default PosterDesign
