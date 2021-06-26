import { useEffect, useState, useContext } from 'react'
import { AboutStyle } from '../style/pageStyles/AboutStyle'
import Context from '../context/Context'
import SEOLayout from '../components/SEO/SEOLayout'
import { MyImages } from '../data/Images'
import Loading from '../components/atoms/Loading'
import MainButton from '../components/atoms/MainButton'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

const About = () => {
  const { menuActive, setHomeActive, setBlogActive, englishActive } = useContext(Context)
  const [loading, setLoading] = useState(1)
  const [count, setCount] = useState(0)
  const [allImagesCount, setAllImagesCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
    console.log('setting:' + count)
  }

  useEffect(() => {
    setLoading(1)
    setAllImagesCount(MyImages.length)
  }, [])

  useEffect(() => {
    setAllImagesCount(MyImages.length)
  }, [MyImages])

  useEffect(() => {
    setAllImagesCount(MyImages.length)
    if (count == allImagesCount) {
      setTimeout(() => {
        setLoading(0)
      }, 1100)
    }
  }, [count, allImagesCount, MyImages, loading])

  useEffect(() => {
    setHomeActive(false)
    setBlogActive(false)
  }, [])

  const breakpointColumnsObj = {
    default: 2,
    700: 1,
    500: 1,
  }

  return (
    <>
      <SEOLayout title="About me | Portfolio - Sura Rzayeva" image={MyImages[0].url} description="" />
      <AboutStyle menuActive={menuActive} loading={loading}>
        {loading == 1 ? <Loading full={true} /> : null}
        <div className="container">
          <div className="about-text">
            <div className="profession">
              <h1>Designer</h1>
            </div>
            {englishActive ? (
              <div className="introduction">
                <p>Hey, thank for visiting my webpage.</p>
                <p>I'm a developer with a background in graphic and UI/UX Design, and a degree in business. </p>
                <p>I grew up in a very heavily artistic environment. My mother is an artist and ART was kind of like a religion in my family and I’ve been educated by my mum since I remember myself.</p>
                <p>Then, I studied Design and started working as a freelance graphic designer.</p>
                <p>Then I’ve changed my professional direction a little bit and started working in marketing and promotion for a long time. Design, however, has always been a part of my life. A very precious part.</p>
                <p>After trying and failing in a couple of business projects, I’ve decided to get a second education on business, get specialized on the fundamentals and work on digital algorithms that can draw attention to businesses.</p>
                <p>I think, design and development are very important factors in creating a successful business, brand identity with a strong story and my idea is to master these factors and experiment with new technologies.</p>
                <p>I don't believe in objective meaning in life. I think we need to define our meaning and stick to it. My meaning in life is to create… to improve… to reach my full potential and I love it.</p>
                <p>I hope my imagination won’t scare you.</p>
                <p>If you want to work together or learn more about me or just to say ‘hi’,</p>
              </div>
            ) : (
              <div className="introduction">
                <p>Hey, danke für meine Website besuchen.</p>
                <p>Ich bin ein Entwickler mit einem Hintergrund in Grafik- und UI/UX-Design mit einem Abschluss in Betriebswirtschaft.</p>
                <p>Ich bin in einem sehr künstlerischen Umfeld aufgewachsen. Meine Mutter ist Künstlerin und Kunst war eine Art Religion in meiner Familie und ich wurde von meiner Mutter erzogen, seit ich mich erinnere.</p>
                <p>Dann habe ich Design studiert und angefangen, als freiberuflicher Grafikdesigner zu arbeiten.</p>
                <p>Dann habe ich meine berufliche Ausrichtung ein wenig geändert und lange Zeit im Marketing und in der Werbung gearbeitet. Design war jedoch schon immer ein Teil meines Lebens. Ein sehr wertvoller Teil.</p>
                <p>Nachdem ich in einigen Business-Projekten versucht und gescheitert bin, habe ich mich entschieden, eine zweite Ausbildung in Business zu machen, mich auf die Grundlagen zu spezialisieren und an digitalen Algorithmen zu arbeiten, die auf Unternehmen aufmerksam machen können.</p>

                <p>Ich denke, Design und Entwicklung sind sehr wichtige Faktoren bei der Schaffung eines erfolgreichen Unternehmens, einer Markenidentität mit einer starken Geschichte und meine Idee ist es, diese Faktoren zu beherrschen und mit neuen Technologien zu experimentieren.</p>
                <p>Ich glaube nicht an den objektiven Sinn des Lebens. Ich denke, wir müssen unsere Bedeutung definieren und daran festhalten. Mein Sinn im Leben ist es zu erschaffen... zu verbessern... mein volles Potenzial auszuschöpfen und ich liebe es.</p>
                <p>Ich hoffe, meine Fantasie wird dich nicht erschrecken.</p>
                <p>Wenn du zusammenarbeiten oder mehr über meine Fähigkeiten erfahren oder einfach nur "Hallo" sagen möchtest,</p>
              </div>
            )}
            <Link href="/contact">
              <div>
                <MainButton label={englishActive ? 'Contact me' : 'Kontaktiere mich'} />
              </div>
            </Link>
          </div>
          <div className="photos">
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
              {MyImages.map((img) => (
                <img src={img.url} key={img.id} onLoad={increaseCount} />
              ))}
            </Masonry>
          </div>
        </div>
      </AboutStyle>
    </>
  )
}

export default About
