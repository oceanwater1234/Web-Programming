import { useState } from "react"
import { Link, useLocation } from "react-router-dom"; 

import styles from "../../styles/modules/SignIn.module.scss"
import InputBox from "../../components/InputBox"

import Username from "../../assets/icons/username.svg"
import Password from "../../assets/icons/password.svg"
import Close from "../../assets/icons/close.svg"
import UnClose from "../../assets/icons/unclose.svg"

export default function SignIn() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [chekcPassword,setCheckPassword] = useState("");
    const [visible,setVisable] = useState(false);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.title}> SignIn </div>
            <form className={styles.InputWrapper} action="" method="post">
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