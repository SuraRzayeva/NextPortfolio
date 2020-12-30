import { AboutStyle } from '../style/pageStyles/AboutStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const About = () => {
  const { menuActive, setHomeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <AboutStyle menuActive={menuActive}>
      <h1>Hello there</h1>
    </AboutStyle>
  )
}

export default About
