import styles from '../styles/Home.module.css';
import loginStyles from '../styles/Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <form className={loginStyles.form}>
                <h2>Welcome Achille, login!</h2>
                <div>
                    <label forHtml='email'>Email</label>
                    <input type="email" name="email"></input>
                </div>
                <div>
                    <label forHtml='password'>Password</label>
                    <input type="password" name="password"></input>
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login