import Subnav from '../components/Subnav'
import { UiuxdesignStyle } from '../style/pageStyles/UiuxdesignStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const UiUxDesign = () => {
  const { homeActive, setHomeActive, uiuxActivePage } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <UiuxdesignStyle>
      <Subnav uiux={true} />
      <div className="container">
        <div className="grid">{uiuxActivePage === 1 && 'hello babe web active'}</div>
        <div className="div">{uiuxActivePage === 2 && 'app active'}</div>
        <div className="div">{uiuxActivePage === 3 && 'icon active'}</div>
        <div className="div">{uiuxActivePage === 4 && 'svg active'}</div>
      </div>
    </UiuxdesignStyle>
  )
}

export default UiUxDesign
