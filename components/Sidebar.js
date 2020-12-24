import { SidebarStyle } from '../style/componentStyles/SidebarStyle'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../context/Context'

const Sidebar = () => {
  const { homeActive, setHomeActive } = useContext(Context)

  return (
    <SidebarStyle homeActive={homeActive}>
      <ul>
        <Link href="">
          <li>
            <img src="/icons/github.svg" alt="github" />
          </li>
        </Link>
        <Link href="">
          <li>
            <img src="/icons/linkedin.svg" alt="linkedin" />
          </li>
        </Link>
        <Link href="">
          <li>
            <img src="/icons/instagram.svg" alt="instagram" />
          </li>
        </Link>
        <Link href="">
          <li>
            <img src="/icons/twitter.svg" alt="twitter" />
          </li>
        </Link>
        <Link href="">
          <li>
            <img src="/icons/dribble.svg" alt="dribble" />
          </li>
        </Link>
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
