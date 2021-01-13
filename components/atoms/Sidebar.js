import { SidebarStyle } from '../../style/componentStyles/SidebarStyle'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../../context/Context'

const Sidebar = () => {
  const { homeActive, setHomeActive } = useContext(Context)

  return (
    <SidebarStyle homeActive={homeActive}>
      <ul>
        <a href="https://github.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/github.svg" alt="github" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/surarzayeva/" target="_blank">
          <li>
            <img src="/icons/linkedin.svg" alt="linkedin" />
          </li>
        </a>
        <a href="https://www.instagram.com/surarzayeva/" target="_blank">
          <li>
            <img src="/icons/instagram.svg" alt="instagram" />
          </li>
        </a>
        <a href="https://twitter.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/twitter.svg" alt="twitter" />
          </li>
        </a>
        <a href="https://dribbble.com/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/dribble.svg" alt="dribble" />
          </li>
        </a>
        <a href="https://codepen.io/SuraRzayeva" target="_blank">
          <li>
            <img src="/icons/codepen.svg" alt="codepen" />
          </li>
        </a>
        <Link href="/contact">
          <li>
            <img src="/icons/envelope.svg" alt="contact" />
          </li>
        </Link>
      </ul>
    </SidebarStyle>
  )
}

export default Sidebar
