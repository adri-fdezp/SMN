import styles from "./leftbar.module.css"

const Leftbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.user}>
                    CurrentUser

                </div>
                <div className={styles.general}>

            </div>
            </div>
        </div>
    )
}

export default Leftbar