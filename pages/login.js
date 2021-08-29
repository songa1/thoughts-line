import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link'
import loginStyles from '../styles/Login.module.css';
import { useAuth } from '../utils/auth/firebaseAuth';
import firebase from 'firebase/app'
import 'firebase/auth'
import Loader from '../components/Loader';


const Login = () => {
    const {user} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const loginHandler = async(e) => {
        e.preventDefault();
        setLoading(true)
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, password).then(()=>{
            setLoading(fale)
        })
        .catch(err => setLoading(false))
    }

    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="google-site-verification" content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3094763105861002" crossorigin="anonymous"></script>
            <title>Login to Achille Songa Blog</title>
        </Head>
        <div className='container'>
            {loading && <Loader/>}
            {!user && !loading ?<form className={loginStyles.form}>
                <h2>Welcome Achille, login!</h2>
                <div>
                    <label forHtml='email'>Email</label>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label forHtml='password'>Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button className="btn" onClick={loginHandler}>Login</button>
            </form>:loading? <p className="empty-message">Logging in...</p>:<p className="empty-message">You are logged in<br></br><Link href='/'><a style={{color: '#333', textDecoration: 'underline'}}>Continue</a></Link></p>}
        </div>
        </>
    )
}

export default Login