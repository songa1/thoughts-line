import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3094763105861002" crossorigin="anonymous"></script>
            <title>About Achille Songa</title>
        </Head>
        <div className='container'>
            <h2 className='empty-message'>I am Achille Songa&apos; I am a software engineer&apos; and I love teaching. Music is my comfort zone&apos; and I am interested in everything about growth and development.</h2>
            <div className='about'>
                <div className='background'>
                    <img src='/songa.png' className='image'></img>
                    <p className='empty-message'><quote>I was born in 2002&apos; and I started a school in 2007. Since then my life became learning. Since then&apos; I spend many years in a class and sometimes I didn&lsquo;t give myself time to rest. But now I understand that as we work, we also need to have time to relax.</quote></p>
                </div>
                <p>When I was a student in ordinary level&apos; I used to write stories&apos; poems and songs. But I didn&lsquo;t give much value to that. I thought it was something useless. Everything changed when I went in Advanced Level. That&lsquo;s when I started learning something new in my life.</p>
                <p>That&lsquo;s where I started learning about computers. That was in 2017. I was a student at <a href='https://iprckigali.rp.ac.rw'>Integrated Polytechnic Regional College of Kigali (IPRC Kigali)</a> and my whole life changed that time.</p>
                <p>I forgot all about writting that I was doing in O&lsquo;L and started focusing on Networking&apos; until in 2018, when I created my first blog (Cheerful and Admirable Life). I was a different field&apos; but writing about life gave me peace and fulfillement.</p>
                <p>Since then&apos; I have created different blogs and youtube channels all talking about life and teaching. But when COVID-19 broke out in my country in 2020&apos; I had took another way of self-employing before I could join the college/university.</p>
                <p>In October 2020&apos; I joined <a href="http://andela.com">Andela Technical Leadership Program (ATLP)</a>, to start learning about Software Engineering. It took me 9 months of continuous training and apprenticeship. This time really changed my life for good. After this program&apos; I was already in University in IPRC Kigali&apos; pursuing Information Technology. Now my life was all related about Computers and Coding&apos; but I still love writing&apos; and that&lsquo;s why I created this blog. I will be sharing what I learnt through all of that journey I shared and what I am still learning since we learn everyday.</p>
                <div className='button-group'>
                    <Link href='/skills'><a className='btn'>Skills</a></Link>
                    <Link href='/projects'><a className='btn-secondary'>Projects</a></Link>
                    <Link href='/contact'><a className='btn-end'>Contact me</a></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default About