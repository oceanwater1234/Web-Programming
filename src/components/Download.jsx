import styles from '../styles/modules/Profile.module.scss'
import DownloadIcon from '../assets/icons/download.svg'

export default function Download(props) {
    return (
        <div className={styles.DownloadWrapper}>
            <div className={styles.Download}>
                <img src={DownloadIcon}/>
                <div className={styles.name}>{props.name}</div>
            </div>
        </div>
    )
}