import styles from "./match4.module.css"
 
const Match4=({match4teamsflags,match4teamsnames})=>{
    return(<>
        <ul className={styles["match"]}>
            <li className={styles["ft"]}>22:30</li>
            <li >
                {match4teamsflags.map((flg)=><li className={styles["lii"]}><img src={flg} alt="" className={styles["flgs"]}/></li>)}
            </li>
            <li className={styles["names"]}>
              {match4teamsnames.map((name)=><li className={styles["lii"]}>{name}</li>)}
            </li>
            <li className={styles["star"]}><img src="star2.png" alt="" className={styles["star1"]}/></li>
        </ul>
        </>)
}
export default Match4