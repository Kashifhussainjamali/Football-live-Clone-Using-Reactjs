import styles from "./navbar.module.css"

function NavBar(){
    return(<>
        <ul className={styles["ull"]}>
            <li className={styles["lii"]}><img src="logo.png" alt="" className={styles["imgg"]}/></li>
            <li className={styles["lii"]}><img src="ball.png" alt="" className={styles["imgg"]}/><span className={styles["sc"]}>Scores</span></li>
            <li className={styles["lii"]}><img src="star.png" alt="" className={styles["imgg"]}/>Favorate</li>
            <li className={styles["lii"]}><img src="more.png" alt="" className={styles["imgg"]}/>News</li>
            <li className={styles["lii"]}><img src="dowm.png" alt="" className={styles["imgg"]}/>Get the app</li>
        </ul>
    </>)
}
export default NavBar;