import { ErrorPageStyle } from '../style/pageStyles/ErrorPageStyle'
import SEOLayout from '../components/SEO/SEOLayout'
const ErrorPage = () => {
  return (
    <>
      <SEOLayout title="404 | Page not found." description="Ups... Looks like this page doesn't exist. Please, use the menu button to navigate to existing pages." />
      <ErrorPageStyle>
        <div className="container">
          <div className="404">
            <h1>404</h1>
          </div>
          <div className="line"></div>
          <div className="text">
            <p>Ups... looks like you're lost.</p>
          </div>
        </div>
      </ErrorPageStyle>
    </>
  )
}

export default ErrorPage
