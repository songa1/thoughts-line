import Image from "next/image"
import Link from "next/link"
import { useAuth } from '../utils/auth/firebaseAuth';
import firebase from 'firebase/app'
import 'firebase/auth'

const Navbar = () => {
    const {user} = useAuth();

    const logout = async(e) => {
        await firebase.auth().signOut();
    }
    return (
        <nav>
            <h1>Achille Songa Blog</h1>
            {/* <input type="text" placeholder="Search..."/> */}
            <div><button className='menu-sm btn'>Menu</button></div>
            <div className='menu'>
                <Link href='/'><a>Feeds</a></Link>
                <Link href='/'><a>Coding</a></Link>
                {!user?<Link href='/login'><a className='btn'>Login</a></Link>:
                <button onClick={logout} className='btn'>Logout</button>}
                {/* <Image src='/AS-PNG.png' width={50} height={50}></Image> */}
            </div>
        </nav>
    )
}

export default Navbar;