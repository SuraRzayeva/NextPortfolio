import { useContext, useState } from 'react'
import Context from '../../context/Context'
import { HeaderStyle } from '../../style/componentStyles/HeaderStyle'
import Link from 'next/link'

const Header = () => {
  const { menuActive, setMenuActive, englishActive, setEnglishActive, blogActive, homeActive, preLoad } = useContext(Context)

  const toggleMenu = () => {
    setMenuActive((prev) => !prev)
  }

  const toggleLanguage = () => {
    setEnglishActive((prev) => !prev)
  }

  return (
    <HeaderStyle homeActive={homeActive}>
      <Link href="/">
        <div className="logo-section" style={{ visibility: preLoad }}>
          <h1 className="title">Sura Rzayeva</h1>
          <p className="profession">
            <span className="line-break">|</span> Developer <br className="line-break" />| Designer <br className="line-break" />| 3D Creator
          </p>
        </div>
      </Link>
      <div className="nav-section" style={{ visibility: preLoad }}>
        {!blogActive && (
          <button className="lang" onClick={toggleLanguage}>
            <h4>{englishActive ? 'de' : 'en'}</h4>
          </button>
        )}
        <div className="burger-menu" onClick={toggleMenu} style={{ visibility: preLoad }}>
          <div className={`line line1 ${menuActive ? 'line1x' : null}`}></div>
          <div className={`line line2 ${menuActive ? 'line2x' : null}`}></div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
