import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faHouseChimney, faLaptopCode, faUserNinja} from "@fortawesome/free-solid-svg-icons";
import MAIN from "./main";
import START from "./start";
import CONTACTS from "./contacts";
import PROJECTS from "./projects";
import ABOUT from "./about";


function HOME (){
    const [background, setBackground] = useState('')
    const [hideText, setHideText] = useState(false)

    function backgroundColor(idName) {
        setHideText(true)
        setTimeout(() => {
            setBackground(idName);
          }, 500)
    }

    return(
        <div>
            <nav>
                <a href="#first" onClick={() => backgroundColor('firstContainer')}><FontAwesomeIcon icon={faHouseChimney} /></a>
                <a href="#second" onClick={() => backgroundColor('secondContainer')}><FontAwesomeIcon icon={faUserNinja}/></a>
                <a href="#third" onClick={() => backgroundColor('thirdContainer')}><FontAwesomeIcon icon={faLaptopCode}/></a>
                <a href="#fourth" onClick={() => backgroundColor('fourthContainer')}><FontAwesomeIcon icon={faContactCard} /></a>
            </nav>
            
            <div class= 'container' id={background}> 
                <div className={hideText?"outerStart hide":"outerStart"}>
                    <START/>
                </div>
                
                <section id="first">
                    <MAIN/>
                </section>
                
                <section id= 'second'>
                    <ABOUT/>
                </section>
                
                <section id= 'third'>
                    <PROJECTS/>
                </section>
                
                <section id= 'fourth'>
                    <CONTACTS/>
                </section>
            </div>
        </div>
        )
}

export default HOME;