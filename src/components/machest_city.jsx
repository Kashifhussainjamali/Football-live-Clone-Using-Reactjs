import styles from "./manchester.module.css"

function Manchest_city(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="manchester_city.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Manchest City</p>
            <p className={styles["eng"]}>England</p>
        </div>
        </div>
    </>)
}
export default Manchest_city;