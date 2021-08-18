import Image from "next/image"
import Link from "next/link"

const StickySidebar = () => {
    return (
        <div className='sidebar'>
            <img src='/AS-PNG.png' className='logo'></img>
            <p>I am a full-stack web developer who lover writting and coding for the world. I put my attentio to everything that might change the world.</p>
            <ul className='side-menu'>
                <li><Link href='/projects' ><a>Projects</a></Link></li>
                <li><Link href='/about'><a>About me</a></Link></li>
                <li><Link href='/contact'><a>Contact me</a></Link></li>
            </ul>
            <button className='btn'>Become a fan</button>
            <div className='footer'>
                <div className='socials'>
                    <img src='/facebook.png' ></img>
                    <img src='/instagram.png' ></img>
                    <img src='/twitter.png' ></img>
                </div>
                <p>&copy; Copyright 2021</p>
            </div>
        </div>
    )
}

export default StickySidebar;