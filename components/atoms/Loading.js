import { LoadingStyle } from '../../style/componentStyles/LoadingStyle'

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="catContainer">
        <div className="catHead catColor">
          <div className="catLeftEye catEye">
            <div className="leftEyelid eyelid catColor"></div>
            <div className="pupil"></div>
          </div>
          <div className="catRightEye catEye">
            <div className="rightEyelid eyelid catColor"></div>
            <div className="pupil"></div>
          </div>
        </div>
        <div className="catLeftEar catEar catColor">
          <div className="catLeftInsideEar catInsideEar"></div>
        </div>
        <div className="catRightEar catEar catColor">
          <div className="catRightInsideEar catInsideEar"></div>
        </div>
        <div className="catHair catColor"></div>
        <div className="catBody catColor">
          <div className="catFoot leftFoot catColor"></div>
          <div className="catFoot rightFoot catColor"></div>
        </div>
        <div className="catTail">
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
          <span className="catColor"></span>
        </div>
      </div>
    </LoadingStyle>
  )
}

export default Loading
