import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { Illustrations } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const IllustrationDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={Illustrations} />
    </SubpageLayout>
  )
}

export default IllustrationDesign
