import styles from '../styles/modules/Input.module.scss'

import Close from "../assets/icons/close.svg"
import UnClose from "../assets/icons/unclose.svg"

export default function InputBox({
    src,
    id,
    value, 
    placeholder , 
    type ,  
    onChange ,
    required,
    visable,
    setVisable
    }) {

    if(type === "password"){
        type = visable ? "text" : "password";
    }

    return (
        <div className={styles.InputWrapper} id={id}>
            <img src={src}/>
            <input 
            type={type ?? "text"} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            />
            { visable !== undefined && (
            <img 
                src={
                    visable ? Close : UnClose
                }
                onClick={()=> setVisable((prev)=> !prev)}
            />
            )}
        </div>
    )
}