import styles from "./manchester.module.css"

function Manchester(){
    return(<>
    <div className={styles["dive"]}>
      <div className={styles["imgg"]}>
        <img src="manchester.png" alt=""  className={styles["img2"]}/>
        </div>
        <div className={styles["textdiv"]}>
            <p className={styles["mer"]}>Merchent United</p>
            <p className={styles["eng"]}>England</p>
        </div>
        </div>
    </>)
}
export default Manchester