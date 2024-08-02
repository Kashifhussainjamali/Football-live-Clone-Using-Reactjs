import styles from "./match2.module.css"

const Match2=({match2teamsflags,match2teamsnames,match2teamsscore})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>FT</li>
            <li >
                {match2teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match2teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["score"]}>
            {match2teamsscore.map((scor)=><li className={styles["lii"]}>{scor}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match2