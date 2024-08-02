import styles from "./manchester.module.css"

function Liverpool(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="liverpool.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Liverpool</p>
            <p className={styles["eng"]}>England</p>
        </div>
        </div>
    </>)
}
export default Liverpool