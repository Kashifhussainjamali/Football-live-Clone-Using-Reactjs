import styles from "./manchester.module.css"

function Premier(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="england.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Premier League</p>
            <p className={styles["eng"]}>England</p>
        </div>
        </div>
    </>)
}
export default Premier;