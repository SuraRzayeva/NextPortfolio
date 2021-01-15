import { useContext, useState } from 'react'
import Context from '../../context/Context'
import { HeaderStyle } from '../../style/componentStyles/HeaderStyle'
import Link from 'next/link'

const Header = () => {
  const { menuActive, setMenuActive, englishActive, setEnglishActive, blogActive, homeActive } = useContext(Context)

  const toggleMenu = () => {
    setMenuActive((prev) => !prev)
  }

  const toggleLanguage = () => {
    setEnglishActive((prev) => !prev)
  }

  return (
    <HeaderStyle homeActive={homeActive}>
      <Link href="/">
        <div className="logo-section">
          <h1 className="title">Sura Rzayeva</h1>
          <p className="profession">
            <span className="line-break">|</span> Designer <br className="line-break" />| Developer <br className="line-break" />| Marketer
          </p>
        </div>
      </Link>
      <div className="nav-section">
        {!blogActive && (
          <button className="lang" onClick={toggleLanguage}>
            <h4>{englishActive ? 'de' : 'en'}</h4>
          </button>
        )}
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line line1 ${menuActive ? 'line1x' : null}`}></div>
          <div className={`line line2 ${menuActive ? 'line2x' : null}`}></div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
