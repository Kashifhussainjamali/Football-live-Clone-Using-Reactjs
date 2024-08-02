import styles from "./buttons.module.css"

function Buttons(){
    return(<>
        <div className={styles["main1"]}>
        <ul className={styles["ul11"]}>
            <li className={styles["li"]}><button className={styles["button1"]}>Football</button></li>
            <li className={styles["li"]}><button className={styles["button2"]}>Hocky</button></li>
            <li className={styles["li"]}><button className={styles["button2"]}>Basketball</button></li>
            <li className={styles["li"]}><button className={styles["button2"]}>Tannis</button></li>
            <li className={styles["li"]}><button className={styles["button2"]}>Cricket</button></li>
        </ul>
        <ul className={styles["ul1"]}>
            <li className={styles["li1"]}><img src="lang.png" alt="" />EN</li>
        </ul>
        </div>
    </>)
}
export default Buttons