import { useContext } from 'react'
import Context from '../context/Context'
import { IndexStyle } from '../style/pageStyles/IndexStyle'

export default function Home() {
  const { menuActive, setMenuActive, englishActive } = useContext(Context)

  const openMenu = () => {
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
          <button onClick={openMenu}>{englishActive ? 'Start here' : "Los geht's"}</button>
        </div>
        <div className="line">
          <div className="circle" onClick={openMenu}></div>
        </div>
      </div>
    </IndexStyle>
  )
}
