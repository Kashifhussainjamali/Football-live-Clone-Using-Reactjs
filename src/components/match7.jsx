import styles from "./match7.module.css"

const Match7=({match7teamsflags,match7teamsnames,match7teamsscore})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>FT</li>
            <li >
                {match7teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match7teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["score"]}>
            {match7teamsscore.map((scor)=><li className={styles["lii"]}>{scor}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match7