import { OverlayStyle } from '../../style/componentStyles/OverlayStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context'
import Loading from './Loading'

const OverlayLayout = () => {
  const { overlay, setOverlay } = useContext(Context)
  const { data, overlayWidth } = overlay
  const [loading, setLoading] = useState(1)

  useEffect(() => {
    setLoading(1)
  }, [])

  const showPhoto = () => {
    setTimeout(() => {
      setLoading(0)
    }, 1100)
  }

  return (
    <OverlayStyle onClick={() => setOverlay(false)} loading={loading} overlayWidth={overlayWidth}>
      <div className="absolute-div">{loading == 1 ? <Loading lightColor={true} /> : null}</div>
      <div className="wrapper">
        <div className="container">
          <img src={data} alt="" onLoad={showPhoto} />
        </div>
      </div>
    </OverlayStyle>
  )
}

export default OverlayLayout
