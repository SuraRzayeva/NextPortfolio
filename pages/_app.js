import ContextWrapper from '../context/ContextWrapper'
import Menu from '../components/Menu'
import Header from '../components/Header'
import GlobalStyle from '../style/GlobalStyle'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Header />
      <Component {...pageProps} />
      <Sidebar />
      <Footer />
      <Menu />
      <GlobalStyle />
    </ContextWrapper>
  )
}

export default MyApp
