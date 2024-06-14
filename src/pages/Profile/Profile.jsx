import { Link } from 'react-router-dom'

import styles from '../../styles/modules/Profile.module.scss'

import Dday from '../../hooks/Day'
import Gallery from '../../components/Gallery'
import Scroll from '../../components/Scroll'

import Username from '../../assets/icons/username.svg'
import Setting from '../../assets/icons/setting.svg'
import Sun from '../../assets/logos/snu.svg'
import Yun from '../../assets/logos/yun.svg'
import Hun from '../../assets/logos/hun.svg'


export default function Profile() {
  const siteList = {
    "EBS" : "https://www.ebsi.co.kr/ebs/pot/poti/main.ebs",
    "megastudy" : "https://www.megastudy.net/megastudy.asp",
    "etoos" : "https://www.etoos.com/home/default.asp" ,
    "daesung" : "https://www.mimacstudy.com/main/main.ds"
  }

  return (
    <>
      <div className={styles.main}>
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
                
                <div className={styles.ThirdWrapper}>
                    <div className={styles.SiteWrapper}>
                      <div className={styles.title}>사이트바로가기</div>
                      <div className={styles.SiteList}>
                        <div><Link target='_blank' to={siteList["EBS"]}>EBS</Link></div>
                        <div><Link target='_blank' to={siteList["megastudy"]}>Megastudy</Link></div>
                        <div><Link target='_blank' to={siteList["etoos"]}>Etoos</Link></div>
                        <div><Link target='_blank' to={siteList["daesung"]}>Daesung</Link></div>
                      </div>
                   </div>

                    <div className={styles.EditWrapper}>
                      <div className={styles.EditSet}>
                        <img src={Setting} />
                        <div className={styles.title}>프로필 편집하기</div>
                      </div>
                      <div className={styles.EditTodo}>
                        <img src={Setting} />
                        <div className={styles.title}>Todo 편집하기</div>
                      </div>
                    </div>
                </div>
            </div>


            <div className={styles.TodoWrapper}>
                <div className={styles.title}>권성민님의 일정</div>
            </div>
         </div>
        </div>
        < Scroll/>
      </div>
    </>
  );
}