import { ContactStyle } from '../style/pageStyles/ContactStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import MainButton from '../components/atoms/MainButton'

const Contact = () => {
  const { menuActive, setHomeActive } = useContext(Context)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const submitMessage = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
      setError(true)
    } else {
      setSuccess(true)
    }
  }

  useEffect(() => {
    if (error) {
      setError(false)
    }
  }, [name, email, message])

  useEffect(() => {
    setHomeActive(false)
  }, [])

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
        setMessage('')
        setName('')
        setEmail('')
      }, 1500)
    }
  }, [success])

  return (
    <ContactStyle menuActive={menuActive} error={error}>
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="container">
        <div className="contact-text">
          <div className="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className="form">
          {error ? (
            <div className="error-msg">
              <p>Please fill all the input fiels.</p>
            </div>
          ) : null}
          {!success ? (
            <form action="" onSubmit={submitMessage}>
              <input type="text" name="name" placeholder="Name" autoComplete="false" onChange={(cursor) => setName(cursor.target.value)} />
              <input type="email" name="email" placeholder="Email" onChange={(cursor) => setEmail(cursor.target.value)} />
              <textarea name="message" id="" cols="30" rows="8" placeholder="Message" onChange={(cursor) => setMessage(cursor.target.value)} />
              <div className="button">
                <MainButton label="Send Message" />
              </div>
            </form>
          ) : (
            <div className="success-msg">
              <p>Thank you for your mail. I will get back to you as soon as possible! </p>
            </div>
          )}
        </div>
      </div>
    </ContactStyle>
  )
}

export default Contact
