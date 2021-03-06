import { SubpageLayout } from '../../../style/subpageStyles/SubpageLayout'
import { Characters } from '../../../data/Images'
import GalleryLayout from '../../subpageLayouts/GalleryLayout'

const CharacterDesign = () => {
  return (
    <SubpageLayout>
      <GalleryLayout data={Characters} column={4} />
    </SubpageLayout>
  )
}

export default CharacterDesign
