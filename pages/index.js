import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import { IndexStyle } from '../style/pageStyles/IndexStyle'
import Cat from '../components/atoms/Cat'
import MainButton from '../components/atoms/MainButton'
import Loading from '../components/atoms/Loading'
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
        <h1 className="hero-text">{englishActive ? 'Ready for' : 'Bereit'}</h1>
        <h1 className="hero-text">{englishActive ? 'something' : 'für etwas'}</h1>
        <h1 className="hero-text">
          {englishActive ? 'cool' : 'Tolles'}
          <span>?</span>
        </h1>
      </div>
      <div className="line-block">
        {/* <div className="start-here" onClick={toggleMenu}>
          <MainButton label="Start here" />
        </div> */}
        <div className="line" onClick={toggleMenu}>
          <Cat />
        </div>
      </div>
    </IndexStyle>
  )
}
