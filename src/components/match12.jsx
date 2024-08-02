import styles from "./match1.module.css"

const Match12=({match12teamsflags,match12teamsnames,match12teamsscore})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>FT</li>
            <li >
                {match12teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match12teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["score"]}>
            {match12teamsscore.map((scor)=><li className={styles["lii"]}>{scor}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match12