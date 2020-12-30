import { useContext } from 'react'
import { MenuStyle } from '../../style/componentStyles/MenuStyle'
import Context from '../../context/Context'
import Link from 'next/link'

const Menu = () => {
  const { menuActive, setMenuActive, englishActive } = useContext(Context)

  const closeMenu = () => {
    if (menuActive) {
      setMenuActive(false)
    }
  }

  return (
    <MenuStyle menuActive={menuActive} onClick={() => setMenuActive(false)}>
      <div className="boxes">
        <Link onClick={closeMenu} href="/uiuxdesign">
          <div className="box box-1">{menuActive ? <h1> UI/UX Design </h1> : null}</div>
        </Link>

        <Link href="/graphicdesign">
          <div onClick={closeMenu} className="box box-2">
            {menuActive ? <h1> {englishActive ? 'Graphic Design' : 'Grafik Design'} </h1> : null}
          </div>
        </Link>

        <Link href="/projects">
          <div onClick={closeMenu} className="box box-3">
            {menuActive ? <h1> {englishActive ? 'Projects' : 'Proyekte'} </h1> : null}
          </div>
        </Link>

        <Link href="/blog">
          <div onClick={closeMenu} className="box box-4">
            {menuActive ? <h1> Blog </h1> : null}
          </div>
        </Link>

        <Link href="/about">
          <div onClick={closeMenu} className="box box-5">
            {menuActive ? <h1> {englishActive ? 'About me' : 'Über mich'} </h1> : null}
          </div>
        </Link>

        <Link href="/contact">
          <div onClick={closeMenu} className="box box-6">
            {menuActive ? <h1> {englishActive ? 'Contact' : 'Kontakt'} </h1> : null}
          </div>
        </Link>
      </div>
    </MenuStyle>
  )
}

export default Menu
