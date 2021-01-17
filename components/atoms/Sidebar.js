import { SidebarStyle } from '../../style/componentStyles/SidebarStyle'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../context/Context'

const Sidebar = () => {
  const { homeActive, setHomeActive, preLoad } = useContext(Context)

  return (
    <SidebarStyle homeActive={homeActive}>
      <ul>
        <a href="https://github.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/github.svg" alt="github" style={{ visibility: preLoad }} />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/surarzayeva/" target="_blank">
          <li>
            <img src="/icons/linkedin.svg" alt="linkedin" style={{ visibility: preLoad }} />
          </li>
        </a>
        <a href="https://www.instagram.com/surarzayeva/" target="_blank">
          <li>
            <img src="/icons/instagram.svg" alt="instagram" style={{ visibility: preLoad }} />
          </li>
        </a>
        <a href="https://twitter.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/twitter.svg" alt="twitter" style={{ visibility: preLoad }} />
          </li>
        </a>
        <a href="https://dribbble.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/dribble.svg" alt="dribble" style={{ visibility: preLoad }} />
          </li>
        </a>
        <a href="https://codepen.io/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/codepen.svg" alt="codepen" style={{ visibility: preLoad }} />
          </li>
        </a>
        <Link href="/contact">
          <li>
            <img src="/icons/envelope.svg" alt="contact" style={{ visibility: preLoad }} />
          </li>
        </Link>
      </ul>
    </SidebarStyle>
  )
}

export default Sidebar
