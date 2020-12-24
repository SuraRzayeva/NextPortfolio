import { WebDesignStyle } from '../../style/subpageStyles/WebDesignStyle'
import { useContext } from 'react'
import Context from '../../context/Context'

const WebDesign = () => {
  const { overlay, setOverlay } = useContext(Context)

  const showOverlay = (data) => {
    setOverlay({ status: true, data: `/Galleries/WebDesign/${data}.jpg` })
  }

  return (
    <WebDesignStyle>
      <div className="grid">
        <div className="item item-1" onClick={() => showOverlay(1)}>
          1. Orange
        </div>
        <div className="item item-2" onClick={() => showOverlay(1)}>
          2. Green
        </div>
        <div className="item item-3" onClick={() => showOverlay(2)}>
          3. Violet
        </div>
        <div className="item item-4" onClick={() => showOverlay(3)}>
          4. Pink
        </div>
        <div className="item item-5" onClick={() => showOverlay(4)}>
          5. Blue
        </div>
        <div className="item item-6" onClick={() => showOverlay(5)}>
          6. Brown
        </div>
        <div className="item item-7" onClick={() => showOverlay(6)}>
          7. Brown
        </div>
      </div>
    </WebDesignStyle>
  )
}

export default WebDesign
