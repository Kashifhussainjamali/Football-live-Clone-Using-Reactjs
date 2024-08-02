import styles from "./match6.module.css"
 
const Match6=({match6teamsflags,match6teamsnames})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>20:10</li>
            <li >
                {match6teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match6teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match6;