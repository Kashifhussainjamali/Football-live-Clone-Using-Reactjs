import styles from "./qua.module.css"

function Qualification(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="champions.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Qualification</p>
            <p className={styles["eng"]}>Champions League</p>
        </div>
        <img src="arrow1.png" alt="" className={styles["arrow"]}/>
        </div>
    </>)
}
export default Qualification