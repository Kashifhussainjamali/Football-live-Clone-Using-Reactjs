import styles from "./side1.module.css"
import England from "./england";
import Champions from "./champions";
import Span from "./span";
import Itly from "./itly";
import Germany from "./german";
import Manchester from "./manchest";
import Liverpool from "./liverpool";
import Arsenal from "./arsenal";
import Manchest_city from "./machest_city";
import Madrid from "./madrid";
import Premier from "./premer";
import Laliga from "./laliga";
import Seria from "./seriea";
import Bundesliga from "./bundes";
import League from "./league";

function Side1(){
    return(<>
    <div className={styles["side1main"]}>
        <a className={styles["search"]}><img src="search.png" alt="" /><input type="text" name="" className={styles["input"]} placeholder="Search"/></a>
        <hr className={styles["side1line"]}/>
        <b className={styles["textform"]}>REGION</b> <br />
        <England></England>
        <Champions></Champions>
        <Span></Span>
        <Itly></Itly>
        <Germany></Germany>
        <b className={styles["textform"]}>TERMS</b> <br />
        <Manchester></Manchester>
        <Liverpool></Liverpool>
        <Arsenal></Arsenal>
        <Manchest_city></Manchest_city>
        <Madrid></Madrid>
        <b className={styles["textform"]}>COMPETATION</b> <br />
        <Premier></Premier>
        <Laliga></Laliga>
        <Seria></Seria>
        <Bundesliga></Bundesliga>
        <League></League>
    </div>
    </>)
}
export default Side1;