import styles from "./manchester.module.css"

function Arsenal(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="arsenal.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Arsenal</p>
            <p className={styles["eng"]}>England</p>
        </div>
        </div>
    </>)
}
export default Arsenal;