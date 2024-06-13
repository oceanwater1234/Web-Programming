import { useState } from "react"

import styles from "../../styles/modules/SignIn.module.scss"
import InputBox from "../../components/InputBox"

import Username from "../../assets/icons/username.svg"
import Password from "../../assets/icons/password.svg"

export default function SignIn() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [visible,setVisable] = useState(false);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.title}> SignIn </div>
            <form className={styles.InputWrapper} action="auth/SignIn" method="post">
                <div className={styles.InputGroup}>
                    <InputBox 
                        id={styles.username}
                        src={Username} 
                        type={"text"} 
                        placeholder={"아이디"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required={"required"}
                    /> {/*username*/}
                    <InputBox
                        id={styles.password} 
                        src={Password} 
                        type={"password"} 
                        placeholder={"비밀번호"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        visable={visible}
                        setVisable={setVisable}
                        required={"required"}
                    /> {/* password */}
                </div>
            
                <div className={styles.LoginGroup}>
                    <button type="submit">로그인</button>
                    <button type="submit">로그아웃</button>
                </div>
            </form>
        </div>
    
    )
}