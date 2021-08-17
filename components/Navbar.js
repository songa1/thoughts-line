import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <h1>Achille Songa Blog</h1>
                <input type="text" placeholder="Search..."/>
                <div>
                    <Link href='#'><a>Feeds</a></Link>
                    <Link href='#'><a>Mind in middle</a></Link>
                    <Image src='/AS-PNG.png' width={50} height={50}></Image>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;