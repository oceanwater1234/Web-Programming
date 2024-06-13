import styles from '../../styles/modules/Profile.module.scss'

import Dday from '../../hooks/Day'
import Gallery from '../../components/Gallery'
import Scroll from '../../components/Scroll'

import Username from '../../assets/icons/username.svg'
import Sun from '../../assets/logos/snu.svg'
import Yun from '../../assets/logos/yun.svg'
import Hun from '../../assets/logos/hun.svg'


export default function Profile() {


  return (
    <>
      <div className={styles.main}>
        <Scroll/>
        <div className={styles.MainWrapper}>
            <div className={styles.Wrapper}>
              <div className={styles.FirstWrapper}>
                <div className={styles.InforGroup}>
                  <img src={Username}  />
                  <div className={styles.Infor}>
                      <div className={styles.name}>권성민(oceanwater1234)</div>
                      <div className={styles.school}>sunrin internet high school</div>
                  </div>
                </div>
                <div className={styles.day}> 
                  <Dday day={false}/>
                  <Dday day={true}/>
                </div>
              </div>
            
              <div className={styles.SecondWrapper}>
                <div className={styles.UniWrapper}>
                    <div className={styles.title}>권성민님의 지망대학교</div>
                    <div className={styles.UniGroup}>
                      <Gallery src={Sun} rank={"1지망  "} name={"/ 서울대학교"}/>
                      <Gallery src={Yun} rank={"2지망  "} name={"/ 연세대학교"}/>
                      <Gallery src={Hun} rank={"3지망  "} name={"/ 한양대학교"}/>
                    </div>
                </div>
                
                <div className={styles.Testservice}>
                  
                </div>
              </div>
            </div>


            <div className={styles.TodoWrapper}>
                <div className={styles.title}></div>
            </div>
        </div>
      </div>
    </>
  );
}