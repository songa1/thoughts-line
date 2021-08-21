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
            {/* <div className="navbar"> */}
                <h1>Achille Songa Blog</h1>
                <input type="text" placeholder="Search..."/>
                <div>
                    <Link href='/'><a>Feeds</a></Link>
                    {!user?<Link href='/login'><a>Login</a></Link>:
                    <button onClick={logout} className='btn'>Logout</button>}
                    {/* <Image src='/AS-PNG.png' width={50} height={50}></Image> */}
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;