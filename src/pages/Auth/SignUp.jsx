import { useState } from "react"
import { Link, useLocation } from "react-router-dom"; 

import styles from "../../styles/modules/SignUp.module.scss"
import InputBox from "../../components/InputBox"

import Email from "../../assets/icons/email.svg"
import School from "../../assets/icons/school.svg"
import Name from "../../assets/icons/name.svg"
import Username from "../../assets/icons/username.svg"
import Password from "../../assets/icons/password.svg"
import Close from "../../assets/icons/close.svg"
import UnClose from "../../assets/icons/unclose.svg"

export default function SignUp() {
    const [email,setEmail] = useState("");
    const [school,setSchool] = useState("");
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [chekcPassword,setCheckPassword] = useState("");
    const [visible,setVisable] = useState(false);
    const [checkVisible,setCheckvisable] = useState(false);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.title}> SignUp </div>
                <form className={styles.InputWrapper} action="" method="post">
                    <div className={styles.InputGroup}>
                        <InputBox 
                            id={styles.email}
                            src={Email} 
                            type={"email"} 
                            placeholder={"이메일"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={"required"}
                        /> {/*email*/}

                        <InputBox 
                            id={styles.school}
                            src={School}  
                            type={"text"} 
                            placeholder={"학교"}
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            required={"required"}
                        /> {/*school*/}

                        <InputBox 
                            id={styles.name}
                            src={Name}  
                            type={"text"} 
                            placeholder={"이름"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={"required"}
                        /> {/*name*/}

                        <InputBox 
                            id={styles.username}
                            src={Username} 
                            type={"text"} 
                            placeholder={"아이디"}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required={"required"}
                        /> {/*username*/}
                    </div>
                    <div className={styles.InputGroup}>
                        <InputBox
                            id={styles.passwordUp} 
                            src={Password} 
                            type={"password"} 
                            placeholder={"비밀번호"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={"required"}
                        /> {/* password */}

                        <InputBox 
                            id={styles.passwordDown}
                            src={Password} 
                            type={"password"} 
                            placeholder={"비밀번호"}
                            value={chekcPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                            required={"required"}
                        /> {/* check password */}
                    </div>
                    <div className={styles.InputGroup}>
                        <button type="submit">회원 가입</button>
                    </div>
                </form>
        </div>
    )
}