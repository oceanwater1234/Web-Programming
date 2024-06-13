import styles from '../..//styles/modules/Profile.module.scss'
import Username from '../../assets/icons/username.svg'

export default function Profile() {
  return (
    <>
      <div className={styles.main}>
          <div className={styles.Wrapper}>
            <div className={styles.InforWrapper}>
              <img src={Username}  />
              <div className={styles.Infor}>
                  <div className='name'>권성민</div>
                  <div className='username'>oceanwater</div>
                  <div className='school'>sunrin high school</div>
              </div>
            </div>
            
            <div className={styles.UniWrapper}>
              
            </div>
          </div>
      </div>
    </>
  );
}