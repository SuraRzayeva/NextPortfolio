import { ContactStyle } from '../style/pageStyles/ContactStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const Contact = () => {
  const { menuActive, setHomeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <ContactStyle menuActive={menuActive}>
      <h1>Hello there</h1>
    </ContactStyle>
  )
}

export default Contact
