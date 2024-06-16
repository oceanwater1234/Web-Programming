import { Link } from 'react-router-dom'
import {  BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import styles from '../../styles/modules/Profile.module.scss'

import Dday from '../../hooks/Day'
import Gallery from '../../components/Gallery'
import Scroll from '../../components/Scroll'
import Download from '../../components/Download'
import { useUserInfo } from '../../hooks/User'

import Username from '../../assets/icons/username.svg'
import DownArrow from '../../assets/icons/downarrow.svg'
import Setting from '../../assets/icons/setting.svg'
import Sun from '../../assets/logos/snu.svg'
import Yun from '../../assets/logos/yun.svg'
import Hun from '../../assets/logos/hun.svg'
import Soun from '../../assets/logos/soun.svg'


export default function Profile() {
  const siteList = {
    "EBS" : "https://www.ebsi.co.kr/ebs/pot/poti/main.ebs",
    "megastudy" : "https://www.megastudy.net/megastudy.asp",
    "etoos" : "https://www.etoos.com/home/default.asp" ,
    "daesung" : "https://www.mimacstudy.com/main/main.ds"
  }

  const userInfoQuery = useUserInfo();
  const userInfo = userInfoQuery.data;
  
  const data = [
    {
      name: "전자정보공학부",
      num: 2
    },
    {
      name: "컴퓨터학부",
      num: 3
    },
    {
      name: "전기공학부",
      num: 2
    },
    {
      name: "전자정보공학부",
      num: 2
    },
    {
      name: "글로벌미디어학부",
      num: 3
    },
  ];

  const peopleData = [
    {
      name: "수시지원인원",
      num: 27150
    },
    {
      name: "수시모집인원",
      num: 2078
    },
    {
      name: "정시지원인원",
      num: 8652
    },
    {
      name: "정시모집인원",
      num: 1350
    },
  ];


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
                      <Gallery src={Soun} rank={"1지망  "} name={"/ 숭실대학교"}/>
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
                        <div className={styles.title}>지망대학교 편집하기</div>
                      </div>
                    </div>
                </div>
            </div>


            <div className={styles.FourWrapper}>
              <div className={styles.TopWrapper}>
                <div className={styles.TitleWrapper}>
                  <div className={styles.Infor}>
                    <img src={Soun}/>
                    <div className={styles.list}>
                      <div className={styles.title}>숭실대학교</div>
                      <div className={styles.address}>주소 : 서울특별시 동작구 상도로 369</div>
                      <div className={styles.phone}>전화 : 02-820-0156</div>
                      <div className={styles.fax}>팩스 : 02-828-7143</div>
                    </div>
                  </div>

                  <div className={styles.DocumentWrapper}>
                      <Download name={'대학입학전형 시행계획'}/>
                      <Download name={'수시모집요강'}/>
                      <Download name={'정시모집요강'}/>
                  </div>
                </div>
              </div>

              <div className={styles.UnderWrapper}>
                  <div className={styles.UniversityWrapper}>
                    <div className={styles.UniversityTitle}>
                      <div className={styles.UniversityType}>
                        <img src={DownArrow} />
                        <div>정시 :</div>
                      </div>
                      <div className={styles.UniversityList}>공학계열(12명)</div>
                      <div className={styles.UniversityKind}>특성화고 졸업자전형</div>
                    </div>
                     
                    <div className={styles.UniversityChart} id={styles.one}>
                      <div>
                        <BarChart width={700} height={400} data={data}>
                          <Bar dataKey="num" fill="#FFFFFF"  barSize={30}/>
                          <XAxis stroke="white" dataKey="name" />
                          <YAxis domain={[0, 10]} stroke="white"/>
                        </BarChart>
                      </div>
                    </div>
                  </div>

                  <div className={styles.UniversityWrapper}>
                    <div className={styles.UniversityTitle}>
                      <div className={styles.UniversityType}>
                        <div>모집인원 현황(2024학년도)</div>
                      </div>
                    </div>
                    <div className={styles.UniversityChart}  id={styles.two}>
                      <div>
                        <BarChart width={550} height={400} data={peopleData}>
                          <Bar dataKey="num" fill="#FFFFFF"  barSize={30}/>
                          <XAxis stroke="white" dataKey="name" />
                          <YAxis domain={[0, 30000]} stroke="white"/>
                        </BarChart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          < Scroll/>
      </div>
    </>
  );
}