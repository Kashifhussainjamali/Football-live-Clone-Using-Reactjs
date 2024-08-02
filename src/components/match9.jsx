import styles from "./match1.module.css"

const Match9=({match9teamsflags,match9teamsnames,match9teamsscore})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>FT</li>
            <li >
                {match9teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match9teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["score"]}>
            {match9teamsscore.map((scor)=><li className={styles["lii"]}>{scor}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match9