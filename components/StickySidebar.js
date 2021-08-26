import Link from "next/link"
import Modal from "./Modal";
import { useEffect, useState } from "react";

const StickySidebar = () => {
    const [isShown, setIsShown] = useState(false);
    const showModal = () => {
        setIsShown(true);
    };
    return (
        <>
        <div className='sidebar'>
            <img src='/AS-PNG.png' className='logo'></img>
            <p className='headline'>Software Engineer | Music Lover</p>
            <div className='side-menu'>
                <Link href='/projects' ><a>Projects</a></Link>
                <Link href='/skills'><a>Skills</a></Link>
                <Link href='/experience'><a>Experience</a></Link>
                <Link href='/about'><a>About me</a></Link>
                <Link href='/contact'><a>Contact me</a></Link>
            </div>
            <button className='btn' onClick={showModal}>Become a fan</button>
            <div className='footer'>
                <div className='socials'>
                    <img src='/facebook.png' ></img>
                    <img src='/instagram.png' ></img>
                    <img src='/twitter.png' ></img>
                </div>
                <p>&copy; Copyright Achille Songa 2021</p>
            </div>
        </div>
        <Modal isShown={isShown} setIsShown={setIsShown}/>
        </>
    )
}

export default StickySidebar;