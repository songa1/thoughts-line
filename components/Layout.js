import Navbar from './Navbar'
import StickySidebar from './StickySidebar'
import {AuthProvider} from '../utils/auth/firebaseAuth';

const Layout = ({children}) => {
    return (
        <AuthProvider>
            <Navbar/>
            <div className='content'>
                <StickySidebar/>
                <div>
                    {children}
                </div>
            </div>
        </AuthProvider>
    )
}

export default Layout