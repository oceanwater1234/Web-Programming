import styles from "../styles/modules/Auth.module.scss";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

export default function Auth() {
  return (
    <>
      <div className={styles.main}>
          <div className={styles.wrapper}>
              <SignUp/>
              <SignIn/>
          </div>
      </div>
    </>
  );
}