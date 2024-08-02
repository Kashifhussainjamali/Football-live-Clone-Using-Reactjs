import styles from "./match8.module.css"

const Match8=({match8teamsflags,match8teamsnames,match8teamsscore})=>{
    return(<>
        <ul className={styles["match"]}>
            <div className={styles["dic"]}></div>
            <li className={styles["ft"]}>107'</li>
            <li >
                {match8teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match8teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["score"]}>
            {match8teamsscore.map((scor)=><li className={styles["lii"]}>{scor}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match8