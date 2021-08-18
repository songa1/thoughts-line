import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.notFound}>
                <h2>Oooops, the page you want is not found!</h2>
                <img src='/img.png'></img>
                <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
            </div>
        </div>
    )
}

export default NotFound