import { useState } from 'react'
import ContextWrapper from '../context/ContextWrapper'
import Menu from '../components/atoms/Menu'
import Header from '../components/atoms/Header'
import GlobalStyle from '../style/GlobalStyle'
import Sidebar from '../components/atoms/Sidebar'
import Footer from '../components/atoms/Footer'

function MyApp({ Component, pageProps }) {
  const [overlay, setOverlay] = useState({
    status: false,
    data: '',
  })

  return (
    <ContextWrapper overlay={overlay} setOverlay={setOverlay}>
      <Header />
      <Component {...pageProps} />
      <Sidebar />
      <Footer />
      <Menu />
      <GlobalStyle overlay={overlay.status} />
    </ContextWrapper>
  )
}

export default MyApp
