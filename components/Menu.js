import { useContext } from 'react'
import { MenuStyle } from '../style/componentStyles/MenuStyle'
import Context from '../context/Context'
import Link from 'next/link'

const Menu = () => {
  const { menuActive, setMenuActive } = useContext(Context)

  const closeMenu = () => {
    if (menu) {
      setMenuActive(false)
    }
  }

  return (
    <MenuStyle menuActive={menuActive} onClick={() => setMenuActive((prev) => !prev)}>
      <div className="boxes">
        <Link onClick={closeMenu} href="/web">
          <div className="box box-1">{menuActive ? <h1> UI/UX Design </h1> : null}</div>
        </Link>

        <div className="box box-2">
          {menuActive ? (
            <Link onClick={closeMenu} href="app">
              <h1> Graphic Design </h1>
            </Link>
          ) : null}
        </div>

        <Link onClick={closeMenu} href="/projects">
          <div className="box box-3">{menuActive ? <h1> Projects </h1> : null}</div>
        </Link>

        <Link onClick={closeMenu} href="/illustrations">
          <div className="box box-4">{menuActive ? <h1> Blog </h1> : null}</div>
        </Link>

        <Link onClick={closeMenu} href="/blog">
          <div className="box box-5">{menuActive ? <h1> About Me </h1> : null}</div>
        </Link>

        <Link onClick={closeMenu} href="/contact">
          <div className="box box-6">{menuActive ? <h1> Contact </h1> : null}</div>
        </Link>
      </div>
    </MenuStyle>
  )
}

export default Menu
