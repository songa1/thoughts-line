import Head from 'next/head';
import Link from 'next/link';

const Projects = () => {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3094763105861002" crossorigin="anonymous"></script>
            <title>Projects by Achille Songa</title>
        </Head>
        <div className='container'>
            <div>
                <h2 className='empty-message'>I am someone who loves being at work always. I have some projects whether coding projects or not.</h2>
                <div className='projects'>  
                    <Link href='#'><a className='project'>
                        <img src='/AS-PNG.png'></img>
                        <h2>Achille Songa LAb</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adip, nundnbbwbuu</p>
                    </a></Link>
                    <Link href='#'><a className='project'>
                        <img src='/AS-PNG.png'></img>
                        <h2>Achille Songa LAb</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adip, nundnbbwbuu</p>
                    </a></Link>
                </div>
                <button className='btn-secondary' onClick={(e)=> window.location.href = 'https://github.com/songa1'}>More projects</button>
            </div>
        </div>
        </>
    )
}

export default Projects