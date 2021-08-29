import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NotFound = () => {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3094763105861002" crossOrigin="anonymous"></script>
            <title>Page Not Found | Achille Songa Blog</title>
        </Head>
        <div className='container'>
            <div className={styles.notFound}>
                <h2>Oooops, the page you want is not found!</h2>
                <img src='/img.png'></img>
                <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
            </div>
        </div>
        </>
    )
}

export default NotFound