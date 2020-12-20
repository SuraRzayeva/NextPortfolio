import ContextWrapper from '../context/ContextWrapper'
import Menu from '../components/Menu'
import Header from '../components/Header'
import GlobalStyle from '../style/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Header />
      <Component {...pageProps} />
      <Menu />
      <GlobalStyle />
    </ContextWrapper>
  )
}

export default MyApp
