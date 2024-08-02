import styles from "./manchester.module.css"

function Seria(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="italy.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Serie A</p>
            <p className={styles["eng"]}>Italy</p>
        </div>
        </div>
    </>)
}
export default Seria;