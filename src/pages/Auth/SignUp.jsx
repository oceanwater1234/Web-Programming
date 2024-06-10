import styles from "../../styles/modules/SignUp.module.scss"

export default function SignUp() {
    return (
        <div className={styles.InputWrapper}>
            <form action="">
                <input type="text" />  {/*email*/}
                <input type="text" />  {/*school*/}
                <input type="text" />  {/*name*/}
                <input type="text" />  {/*username*/}
                
                <input type="text" />  {/*password*/}
            </form>
        </div>
    )
}