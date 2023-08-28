import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {

    const date = moment(props.date_utc).format('MMMM Do YYYY')
    const time = moment(props.date_utc).format('h:mm:ss a')

    return (
        <div className={styles.launchDiv}>
            <div className={styles.launchImgDiv}>
                <img src={props.links.patch.small} alt={"Group logo"}></img>
            </div>
            <div className={styles.launchDataDiv}>
                <div className={styles.launchTitle}>{props.name}</div>
                <div className={styles.launchLocation}>{props.launchpad.region}</div>
                <div className={styles.launchDate}>{time}<br/>{date}</div>
            </div>
        </div>
    )

}

export default Launch