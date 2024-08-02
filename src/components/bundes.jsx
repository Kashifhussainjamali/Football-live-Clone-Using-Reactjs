import styles from "./manchester.module.css"

function Bundesliga(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="germany.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Bundesliga</p>
            <p className={styles["eng"]}>germany</p>
        </div>
        </div>
    </>)
}
export default Bundesliga;