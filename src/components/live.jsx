import styles from "./live.module.css"
function Live(){
    return(<>
        <ul className={styles["live"]}>
            <li><button className={styles["livebtn"]}>Live</button></li>
            <li className={styles["livelist"]}>
                <p className={styles["livetext1"]}>WED</p>
                <p className={styles["livetext2"]}>31 JUL</p>
            </li>
            <li className={styles["livelist"]}>
            <p className={styles["livetext12"]}>THU</p>
            <p className={styles["livetext22"]}>01 AUG</p>
            </li>
            <li className={styles["livelist"]}>
            <p className={styles["livetext1"]}>FRI</p>
            <p className={styles["livetext2"]}>02 JUL</p>
            </li>
            <li className={styles["livelist"]}>
            <p className={styles["livetext1"]}>SAT</p>
            <p className={styles["livetext2"]}>03 AUG</p>
            </li >
            <li className={styles["livelist"]}><img src="date.png" alt="" /></li>
        </ul>
    </>)
}
export default Live