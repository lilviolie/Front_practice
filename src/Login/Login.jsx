import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <div>
        <h1 className={styles.headLine}>Day Log</h1>
      </div>
      <div>
        <input className={styles.idInput} type="text" />
        <input className={styles.passwordInput} type="password" />
        <button className={styles.confirm} type="confirm">Log In</button>
      </div>
    </div>
  );
}

export default Login;
