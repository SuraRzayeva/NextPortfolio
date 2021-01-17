import { FooterStyle } from '../../style/componentStyles/FooterStyle'
import { useContext } from 'react'
import Context from '../../context/Context'

const Footer = () => {
  const { homeActive, setHomeActive, preLoad } = useContext(Context)
  const date = new Date().getFullYear()

  return (
    <FooterStyle homeActive={homeActive}>
      <p className="credit" style={{ visibility: preLoad }}>
        &copy; • Sura Rzayeva • {date}
      </p>
    </FooterStyle>
  )
}

export default Footer
