import { ContactStyle } from '../style/pageStyles/ContactStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import MainButton from '../components/atoms/MainButton'

const Contact = () => {
  const { menuActive, setHomeActive } = useContext(Context)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitMessage = (e) => {
    e.preventDefault()
    console.log(name, email, message)
  }

  useEffect(() => {
    setHomeActive(false)
  }, [])

  return (
    <ContactStyle menuActive={menuActive}>
      <div className="container">
        <div className="contact-text">
          <div className="text">
            <h1>Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className="form">
          <form action="" onSubmit={submitMessage}>
            <input type="text" name="name" placeholder="Name" autoComplete="false" onChange={(cursor) => setName(cursor.target.value)} />
            <input type="email" name="email" placeholder="Email" onChange={(cursor) => setEmail(cursor.target.value)} />
            <textarea name="message" id="" cols="30" rows="8" placeholder="Message" onChange={(cursor) => setMessage(cursor.target.value)} />
            <div className="button">
              <MainButton label="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </ContactStyle>
  )
}

export default Contact
