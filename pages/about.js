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
                <p>My name is Sura Rzayeva and I am a creator.</p>
                <p>I grew up in a very heavily artistic environment. My mother is an artist and ART was kind of like a religion in my family and I’ve been educated by my mum since I remember myself. </p>
                <p>Then, I studied Design and started working as a freelance graphic designer.</p>
                <p>Then I’ve changed my professional direction a little bit and started working in marketing and promotion for a long time. Design, however, has always been a part of my life. A very precious part.</p>
                <p>After digging deeper in marketing and failing in a couple of e-commerce business projects, I’ve decided to get a second education on marketing and learn its fundamentals and specialize in human behavior. Now I’m a student again.</p>
                <p>Currently, my passion is coding. It feels good to design with code. And it’s also fun because you can do anything you want and every day we have a new and better technological innovation to try.</p>
                <p>I think, design, development, and marketing are three very important factors in creating a successful project and my idea is to master these factors and experiment with new technologies.</p>
                <p>I deeply believe that in essence life is meaningless, but it’s ok. We need to define our meaning and stick to it. My meaning in life is to create… to improve… to reach my full potential and I love it.</p>
                <p>I hope my imagination won’t scare you.</p>
                <p>If you want to work together or learn more about my skills or just to say ‘hi’,</p>
              </div>
            ) : (
              <div className="introduction">
                <p>Mein Name ist Sura Rzayeva und ich bin Designerin.</p>
                <p>Ich bin in einem sehr künstlerischen Umfeld aufgewachsen. Meine Mutter ist Künstlerin und Kunst war eine Art Religion in meiner Familie und ich wurde von meiner Mutter erzogen, seit ich mich erinnere.</p>
                <p>Dann habe ich Design studiert und angefangen, als freiberuflicher Grafikdesigner zu arbeiten.</p>
                <p>Dann habe ich meine berufliche Ausrichtung ein wenig geändert und lange Zeit im Marketing und in der Werbung gearbeitet. Design war jedoch schon immer ein Teil meines Lebens. Ein sehr wertvoller Teil.</p>
                <p>
                  Nachdem ich mich eingehender mit Marketing befasst und einige E-Commerce-Geschäftsprojekte nicht bestanden habe, habe ich mich entschlossen, eine zweite Ausbildung zum Marketing zu absolvieren, die Grundlagen zu erlernen und mich auf menschliches Verhalten zu spezialisieren. Jetzt bin ich wieder
                  Studentin.
                </p>
                <p>Derzeit ist meine Leidenschaft das Codieren. Es fühlt sich gut an, mit Code zu entwerfen. Und es macht auch Spaß, weil Sie alles tun können, was Sie wollen, und wir jeden Tag eine neue und bessere technologische Innovation ausprobieren können.</p>
                <p>Ich denke, Design, Entwicklung und Marketing sind drei sehr wichtige Faktoren für ein erfolgreiches Projekt. Meine Idee ist es, diese Faktoren zu beherrschen und mit neuen Technologien zu experimentieren.</p>
                <p>Ich bin der festen Überzeugung, dass das Leben im Wesentlichen bedeutungslos ist, aber es ist in Ordnung. Wir müssen unsere Bedeutung definieren und dabei bleiben. Mein Sinn im Leben ist es, zu schaffen… sich zu verbessern… mein volles Potenzial zu erreichen und ich liebe es.</p>
                <p>Ich hoffe, meine Fantasie wird dich nicht erschrecken.</p>
                <p>Wenn du zusammenarbeiten oder mehr über meine Fähigkeiten erfahren oder einfach nur "Hallo" sagen möchtest, kontaktiere mich.</p>
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
