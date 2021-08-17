import Navbar from './Navbar'
import StickySidebar from './StickySidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className='content'>
                <StickySidebar/>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout