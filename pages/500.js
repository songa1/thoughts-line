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
            <title>Page Not Found | Achille Songa Blog</title>
        </Head>
        <div className='container'>
            <div className={styles.notFound}>
                <h2>500 - Server-side error occurred</h2>
                <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
            </div>
        </div>
        </>
    )
}

export default NotFound