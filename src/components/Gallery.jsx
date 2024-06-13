import styles from '../styles/modules/Profile.module.scss'

export default function Gallery(props) {
    return(
        <div className={styles.Uni} id={styles.one}>
        <img src={props.src} />
            <div className={styles.name}>
                <div className={styles.rank}>{props.rank}</div>
                <div className={styles.name}>{props.name}</div>
            </div>
        </div>
    )
}