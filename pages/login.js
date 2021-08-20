import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import loginStyles from '../styles/Login.module.css';
import { useAuth } from '../utils/auth/firebaseAuth';
import firebase from 'firebase/app'
import 'firebase/auth'


const Login = () => {
    const {user} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const loginHandler = async(e) => {
        e.preventDefault();
        setLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            setLoading(fale)
        })
        .catch(err => setLoading(false))
    }

    return (
        <div className={styles.container}>
            {loading && <div className="loader"><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
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
    )
}

export default Login