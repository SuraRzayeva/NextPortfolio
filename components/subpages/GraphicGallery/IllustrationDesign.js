import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { Illustrations } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const IllustrationDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={Illustrations} column={4} />
    </SubpageLayout>
  )
}

export default IllustrationDesign
