import { useState } from "react"
import { useNavigate } from "react-router-dom"

import styles from "../../styles/modules/SignUp.module.scss"
import InputBox from "../../components/InputBox"
import { signup } from "../../api/auth/signup"

import Email from "../../assets/icons/email.svg"
import School from "../../assets/icons/school.svg"
import Name from "../../assets/icons/name.svg"
import Username from "../../assets/icons/username.svg"
import Password from "../../assets/icons/password.svg"


export default function SignUp() {
    const [email,setEmail] = useState("");
    const [school,setSchool] = useState("");
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [checkPassword,setCheckPassword] = useState("");
    const [visible,setVisable] = useState(false);
    const [checkVisible,setCheckvisable] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (password !== checkPassword) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
    
        signup({email , school  , name , username , password})
          .then(() => navigate("/"))
          .catch(() => {
            alert("회원가입에 실패했습니다.");
        });
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.title}> SignUp </div>
                <form 
                    className={styles.InputWrapper} 
                    onSubmit={(e)=>{e.preventDefault();handleSubmit();}}>
                    <div className={styles.InputGroup}>
                        <InputBox 
                            id={styles.email}
                            src={Email} 
                            placeholder={"이메일"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={"required"}
                        /> {/*email*/}

                        <InputBox 
                            id={styles.school}
                            src={School}  
                            placeholder={"학교"}
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                            required={"required"}
                        /> {/*school*/}

                        <InputBox 
                            id={styles.name}
                            src={Name}  
                            placeholder={"이름"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={"required"}
                        /> {/*name*/}

                        <InputBox 
                            id={styles.username}
                            src={Username} 
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
                            visable={visible}
                            setVisable={setVisable}
                            required={"required"}
                        /> {/* password */}

                        <InputBox 
                            id={styles.passwordDown}
                            src={Password} 
                            type={"password"} 
                            placeholder={"비밀번호"}
                            value={checkPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                            visable={checkVisible}
                            setVisable={setCheckvisable}
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