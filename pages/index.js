import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import { IndexStyle } from '../style/pageStyles/IndexStyle'

export default function Home() {
  const { menuActive, setMenuActive, englishActive, setHomeActive, homeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(true) // to stylize the credit and other homepage related design
    menuActive && setMenuActive(false) // to close the menu when getting back to the homepage clicking on the logo
  }, [])

  const toggleMenu = () => {
    setMenuActive((prev) => !prev)
  }

  return (
    <IndexStyle menuActive={menuActive}>
      <div className="hero">
        <h1 className="hero-text">{englishActive ? "Let's create" : 'Lass uns'}</h1>
        <h1 className="hero-text">{englishActive ? 'something' : 'etwas tolles'}</h1>
        <h1 className="hero-text">
          {englishActive ? 'cool' : 'schaffen'}
          <span>.</span>
        </h1>
      </div>
      <div className="line-block">
        <div className="start-here">
          <button onClick={toggleMenu}>{englishActive ? 'Start here' : "Los geht's"}</button>
        </div>
        <div className="line"></div>
      </div>
    </IndexStyle>
  )
}
