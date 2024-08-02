import styles from "./manchester.module.css"

function Laliga(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="spain.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Laliga</p>
            <p className={styles["eng"]}>Spain</p>
        </div>
        </div>
    </>)
}
export default Laliga;