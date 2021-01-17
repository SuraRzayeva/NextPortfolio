import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ContextWrapper from '../context/ContextWrapper'
import Menu from '../components/atoms/Menu'
import Header from '../components/atoms/Header'
import GlobalStyle from '../style/GlobalStyle'
import Sidebar from '../components/atoms/Sidebar'
import Footer from '../components/atoms/Footer'
import Cursor from '../components/atoms/Cursor'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const [overlay, setOverlay] = useState({
    status: false,
    data: '',
    orientation: '',
  })

  const [preLoad, setPreLoad] = useState('hidden')

  useEffect(() => {
    window.addEventListener('load', () => {
      setPreLoad('visible')
    })
  }, [])

  return (
    <ContextWrapper overlay={overlay} setOverlay={setOverlay} preLoad={preLoad} setPreLoad={setPreLoad}>
      <Header />
      <Cursor />
      <Component {...pageProps} />
      <Sidebar />
      <Footer />
      <Menu />
      <GlobalStyle overlay={overlay.status} />
    </ContextWrapper>
  )
}

export default MyApp
