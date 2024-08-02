import styles from "./manchester.module.css"

function League(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="france.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Ligue 1</p>
            <p className={styles["eng"]}>France</p>
        </div>
        </div>
    </>)
}
export default League;