import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { WebImages } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const WebDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={WebImages} />
    </SubpageLayout>
  )
}

export default WebDesign
