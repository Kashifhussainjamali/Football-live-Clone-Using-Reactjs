import styles from "./manchester.module.css"

function Madrid(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="madrid.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Real Madrid</p>
            <p className={styles["eng"]}>Spain</p>
        </div>
        </div>
    </>)
}
export default Madrid;