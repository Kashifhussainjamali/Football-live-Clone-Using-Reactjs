import Live from "./live";
import styles from "./side2.module.css"
import Qualification from "./qualification";
import Match1 from "./match1";
import Qualification_2 from "./qualifi2";
import Match2 from "./match2";
import Match3 from "./match3";
import Match4 from "./match4";
import Match5 from "./match5";
import Match6 from "./match6";
import Match7 from "./match7";
import Match8 from "./match8";
import Qualification_3 from "./quali3";
import Match9 from "./match9";
import Match10 from "./match10";
import Qualification_4 from "./quali4";
import Match11 from "./match11";
import Match12 from "./match12";
import Add3 from "./add3";
import Qualification_5 from "./quali5";

function Side2(){
    let match1teamsflag=["borac.png","poak.png"]
    let match1teamsname=["Borac Banja Luka","PAOK FC"]
    let match1teamsscores=["3","1"]

    let match2teamsflag=["elf.png","fc.png"]
    let match2teamsname=["Elfsborg", "FC Sheriff "]
    let match2teamsscores=["0","1"]

    let match3teamsflag=["si.png","mo.png"]
    let match3teamsname=["Silkeborg", "Molde"]
    let match3teamsscores=["1","0"]

    let match4teamsflag=["ma.png","sa.png"]
    let match4teamsname=["Maccabi Petach Tikva", "SC Braga"]
    
    let match5teamsflag=["ce.png","ki.png"]
    let match5teamsname=["Cercle Brugge", "Kilmarnock"]

    let match6teamsflag=["la.png","is.png"]
    let match6teamsname=["La Fiorita", "Istanbul Basaksehir"]
    
    let match7teamsflag=["to.png","st.png"]
    let match7teamsname=["Tobol Kostanay", "St. Gallen "]
    let match7teamsscores=["2","1"]

    let match8teamsflag=["in.png","ae.png"]
    let match8teamsname=["Inter Club d'Escaldes","AEK Athens"]
    let match8teamsscores=["1","1"]

    let match9teamsflag=["fc1.png","fc2.png"]
    let match9teamsname=["FC Astana","FC Milsami Orhei"]
    let match9teamsscores=["1","0"]

    let match10teamsflag=["sa1.png","ma1.png"]
    let match10teamsname=["Sabah FK","Maccabi Haifa"]
    let match10teamsscores=["0","0"]

    let match11teamsflag=["si.png","st.png"]
    let match11teamsname=["Union St.Gilloise", "Beerschot"]
    let match11teamsscores=["1","0"]

    let match12teamsflag=["in.png","la.png"]
    let match12teamsname=["St. Gallen", "LA Milsami Orhei"]
    let match12teamsscores=["1","3"]
    


    return(<>
    <div className={styles["side2main"]}>
    <Live></Live>
    <hr className={styles["side2line"]}/>
    <img src="add2.png" alt="" className={styles["add2"]} />
    <Qualification></Qualification>
    <Match1 match1teamsflags={match1teamsflag} match1teamsnames={match1teamsname} match1teamsscore={match1teamsscores}></Match1>
    <Qualification_2/>
    <Match2 match2teamsflags={match2teamsflag} match2teamsnames={match2teamsname} match2teamsscore={match2teamsscores}></Match2>
    <Match3 match3teamsflags={match3teamsflag} match3teamsnames={match3teamsname} match3teamsscore={match3teamsscores}></Match3>
    <Match4 match4teamsflags={match4teamsflag} match4teamsnames={match4teamsname}> </Match4>
    <Match5 match5teamsflags={match5teamsflag} match5teamsnames={match5teamsname}> </Match5>
    <Match6 match6teamsflags={match6teamsflag} match6teamsnames={match6teamsname}> </Match6>
    <Match7 match7teamsflags={match7teamsflag} match7teamsnames={match7teamsname} match7teamsscore={match7teamsscores}> </Match7>
    <Match8 match8teamsflags={match8teamsflag} match8teamsnames={match8teamsname} match8teamsscore={match8teamsscores}> </Match8>
    <Qualification_3/>
    <Match9 match9teamsflags={match9teamsflag} match9teamsnames={match9teamsname} match9teamsscore={match9teamsscores}> </Match9>
    <Match10 match10teamsflags={match10teamsflag} match10teamsnames={match10teamsname} match10teamsscore={match10teamsscores}> </Match10>
    <Add3></Add3>
    <Qualification_4/>
    <Match11 match11teamsflags={match11teamsflag} match11teamsnames={match11teamsname} match11teamsscore={match11teamsscores}></Match11>
    <Match12 match12teamsflags={match12teamsflag} match12teamsnames={match12teamsname} match12teamsscore={match12teamsscores}></Match12>
    <Match1 match1teamsflags={match4teamsflag} match1teamsnames={match1teamsname} match1teamsscore={match1teamsscores}></Match1>
    <Match5 match5teamsflags={match6teamsflag} match5teamsnames={match5teamsname}> </Match5>
    <Qualification_5/>
    <Match4 match4teamsflags={match4teamsflag} match4teamsnames={match6teamsname}> </Match4>
    <Match7 match7teamsflags={match8teamsflag} match7teamsnames={match7teamsname} match7teamsscore={match7teamsscores}> </Match7>
    <Match10 match10teamsflags={match10teamsflag} match10teamsnames={match5teamsname} match10teamsscore={match8teamsscores}> </Match10>
    </div>
    </>)
}
export default Side2