import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { LineArts } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const LineArtDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={LineArts} column={4} />
    </SubpageLayout>
  )
}

export default LineArtDesign
