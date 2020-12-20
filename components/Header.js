import { useContext } from 'react'
import Context from '../context/Context'
import { HeaderStyle } from '../style/componentStyles/HeaderStyle'

const Header = () => {
  const { menuActive, setMenuActive, englishActive, setEnglishActive } = useContext(Context)

  const toggleMenu = () => {
    setMenuActive((prev) => !prev)
  }

  const toggleLanguage = () => {
    setEnglishActive((prev) => !prev)
  }

  return (
    <HeaderStyle>
      <div className="logo-section">
        <h1 className="title">Sura Rzayeva</h1>
        <p className="profession">
          <span className="line-break">|</span> Designer <br className="line-break" />| Developer <br className="line-break" />| Marketer
        </p>
      </div>
      <div className="nav-section">
        <button className="lang" onClick={toggleLanguage}>
          <h4>{englishActive ? 'de' : 'en'}</h4>
        </button>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
