import { ContactStyle } from '../style/pageStyles/ContactStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import SEOLayout from '../components/SEO/SEOLayout'
import MainButton from '../components/atoms/MainButton'

const Contact = () => {
  const { menuActive, setHomeActive, setBlogActive, englishActive } = useContext(Context)
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
    setBlogActive(false)
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
    <>
      <SEOLayout title="Contact me | Portfolio - Sura Rzayeva" description="I'll be very happy to hear from you. Send me a message! Or you can also follow me on Instagram, Codepen and Twitter!" />
      <ContactStyle menuActive={menuActive} error={error}>
        <div className="title">
          <h1>{englishActive ? 'Contact' : 'Kontakt'}</h1>
        </div>
        <div className="container">
          <div className="contact-text">
            <div className="text">
              <p>
                {englishActive
                  ? "Do you have an idea and need help in developing it further? Do you need a brand design or a webpage? Or just a UI/UX design? Or a logo? Or just a poster. Do you want an animation of yourself or a line-art portrait of someone you love? They can be great gifts, you know... Contact me, I'd be delighted to work with you."
                  : 'Hast du eine Idee und brauchst Hilfe bei der Weiterentwicklung? Benötigst du ein Markendesign oder eine Webseite? Oder nur ein UI / UX-Design? Oder ein Logo? Oder nur ein Poster. Möchtest du eine Animation von dich selbst oder ein Strichbild von jemandem, den du liebst? Es kann eine großartige Geschenke sein, weißt du? ... Kontaktiere mich, ich würde mich freuen, mit dir zusammenzuarbeiten.'}
              </p>
              <p>
                {englishActive
                  ? "Did you like my characters and want to use them... Or you just want to write me, say 'hello' and tell me what you think about my art... or about my crazy blog posts...(?)"
                  : "Hat dir meine Figur gefallen und du wolltest sie benutzen ... Oder du willst mir einfach schreiben, 'Hallo' sagen und mir sagen, was du über meine Kunst denkst ... oder über meine verrückten Blog-Beiträge ... (?)"}
              </p>
              <p>{englishActive ? "I'll be very happy to hear from you. Send me a message! Or you can also follow me on Instagram, Codepen and Twitter!" : 'Ich werde mich sehr freuen, von dir zu hören. Schick mir eine Nachricht! Oder du kannst mir auch auf Instagram, Codepen und Twitter folgen!'}</p>
              <ul>
                <li>
                  <span>Email: </span>sura.rzayeva@gmail.com
                </li>
                <li>
                  <span>Tel: </span> +49 178 4036246
                </li>
                <li>
                  <span>{englishActive ? 'Address' : 'Addresse'}</span> {englishActive ? 'Berlin, Germany' : 'Berlin, Deutschland'}
                </li>
              </ul>
            </div>
          </div>
          <div className="form">
            {error ? (
              <div className="error-msg">
                <p>{englishActive ? 'Please fill all the input fiels.' : 'Bitte alle Felder ausfüllen'}</p>
              </div>
            ) : null}
            {!success ? (
              <form action="" onSubmit={submitMessage}>
                <input type="text" name="name" placeholder={englishActive ? 'Full Name' : 'Vollname'} autoComplete="false" onChange={(cursor) => setName(cursor.target.value)} />
                <input type="email" name="email" placeholder="Email" onChange={(cursor) => setEmail(cursor.target.value)} />
                <textarea name="message" id="" cols="30" rows="8" placeholder={englishActive ? 'Message' : 'Nachricht'} onChange={(cursor) => setMessage(cursor.target.value)} />
                <div className="button">
                  <MainButton label={englishActive ? 'Send message' : 'Nachricht senden'} />
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
    </>
  )
}

export default Contact
