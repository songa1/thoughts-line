import '../styles/globals.css'
import Layout from '../components/Layout'
import initFirebase from '../utils/firebase'

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
