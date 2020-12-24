import Subnav from '../components/Subnav'
import { UiuxdesignStyle } from '../style/pageStyles/UiuxdesignStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import WebDesign from '../components/subpages/WebDesign'
import OverlayLayout from '../components/OverlayLayout'

const UiUxDesign = () => {
  const { homeActive, setHomeActive, uiuxActivePage, overlay, setOverlay } = useContext(Context)
  const { status } = overlay

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <UiuxdesignStyle>
      {status && <OverlayLayout />}
      <Subnav uiux={true} />
      <div className="container">
        {uiuxActivePage === 1 && <WebDesign />}
        <div className="div">{uiuxActivePage === 2 && 'app active'}</div>
        <div className="div">{uiuxActivePage === 3 && 'icon active'}</div>
        <div className="div">{uiuxActivePage === 4 && 'svg active'}</div>
      </div>
    </UiuxdesignStyle>
  )
}

export default UiUxDesign
