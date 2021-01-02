import { AboutStyle } from '../style/pageStyles/AboutStyle'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'
import { MyImages } from '../data/Images'
import GalleryLayout from '../components/subpageLayouts/GalleryLayout'
import MainButton from '../components/atoms/MainButton'
import Link from 'next/link'
import Masonry from 'react-masonry-css'

const About = () => {
  const { menuActive, setHomeActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
  }, [])

  const breakpointColumnsObj = {
    default: 2,
    700: 1,
    500: 1,
  }

  return (
    <AboutStyle menuActive={menuActive}>
      <div className="container">
        <div className="about-text">
          <div className="profession">
            <h1>Designer</h1>
          </div>
          <div className="introduction">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <Link href="/contact">
            <div>
              <MainButton label="Contact me" />
            </div>
          </Link>
        </div>
        <div className="photos">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {MyImages.map((img) => (
              <img src={img.url} key={img.id} />
            ))}
          </Masonry>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About
