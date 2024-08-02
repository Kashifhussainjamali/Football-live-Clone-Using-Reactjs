import styles from "./match5.module.css"
 
const Match5=({match5teamsflags,match5teamsnames})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>21:20</li>
            <li >
                {match5teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match5teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match5