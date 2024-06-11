import styles from "../../styles/modules/Auth.module.scss";
import SignUp from "./SignUp";
import SignIn from "./SignIn";


export default function Auth() {
  return (
    <>
      <div className={styles.main}>
          <div className={styles.Wrapper}>
              <SignUp/>
              <SignIn/>
          </div>
      </div>
    </>
  );
}