import { MainButtonStyle } from '../../style/componentStyles/MainButtonStyle'

const MainButton = ({ label, callback }) => {
  return <MainButtonStyle onClick={callback}>{label}</MainButtonStyle>
}

export default MainButton
