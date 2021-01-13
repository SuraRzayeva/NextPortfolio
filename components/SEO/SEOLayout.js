import Head from 'next/head'
import { useRouter } from 'next/router'

const SEOLayout = (props) => {
  const { title = 'Portfolio | Sura Rzayeva', description = 'Professional Portfolio of Sura Rzayeva - Designer, Developer and Marketing Specialist, based in Germany, Berlin.', type = 'website', canonicalPath, image = '/AboutMe/4.jpg' } = props
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/svg" href="/icons/cat.svg" key="favicon" />
      <meta name="description" key="description" content={description} />
      <meta name="title" key="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:locale" key="og:locale" content="en_EU" />
      <meta property="og:url" key="og:url" content={`https://surarzayeva.com${router.asPath}`} />
      <meta property="og:type" key="og:type" content={type} />
      <meta property="og:image" key="og:image" content={image} />
      <link rel="canonical" key="canonical" href={`https://surarzayeva.com${canonicalPath ? canonicalPath : router.asPath}`} />
    </Head>
  )
}

export default SEOLayout
