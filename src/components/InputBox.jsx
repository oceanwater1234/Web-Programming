import styles from '../styles/modules/Input.module.scss'

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
                <img id="password"
                    src={
                        visable ? "../assets/close.svg" : "../assets/unclose.svg"
                    }
                    onClick={()=> setVisable((prev)=> !prev)}
                />
            )}
        </div>
    )
}