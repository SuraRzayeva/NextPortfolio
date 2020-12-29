import { OverlayStyle } from '../../style/componentStyles/OverlayStyle'
import { useContext, useEffect } from 'react'
import Context from '../../context/Context'

const OverlayLayout = () => {
  const { overlay, setOverlay } = useContext(Context)
  const { data } = overlay

  return (
    <OverlayStyle onClick={() => setOverlay(false)}>
      <div className="wrapper">
        <div className="container">
          <img src={data} alt="" />
        </div>
      </div>
    </OverlayStyle>
  )
}

export default OverlayLayout
