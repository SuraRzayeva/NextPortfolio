import { FooterStyle } from '../style/componentStyles/FooterStyle'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <FooterStyle>
      <p className="credit"> &copy; • Sura Rzayeva • {date}</p>
    </FooterStyle>
  )
}

export default Footer
