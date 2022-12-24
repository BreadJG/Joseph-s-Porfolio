import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faContactCard, faGamepad} from "@fortawesome/free-solid-svg-icons";


function ABOUT () {
    const [contactMe, setContactMe] = useState(false)
    const [pokemon, setPokemon] = useState(false)

    return(
        <div className="spacePaste my-3">
            <div className="text-center mb-3">
                <h1>About Me</h1>
                <h3 className="text-warning">I am a Junior Web Developer and Digital Marketing Specialist from Long Beach, California.</h3>
            </div>

            <div className="text-center mb-3">
                <p className="text-light">
                Hi, my name is Joseph, I am starting a career in web development with a background in digital marketing. I received my Full Stack Developer certificate from Digital Crafts and am exited to grow and learn more in the field.

                I am currently working on a website for the book ALAMAT by Herbert Deleon and am very excited and greatful to start this Journey. 

                Some highlights from my portfolio include my {<a href='https://playful-kitsune-b02b78.netlify.app/' onMouseOver={()=>setPokemon(true)} onMouseOut={()=>setPokemon(false)} className="text-warning"><strong>{pokemon? <FontAwesomeIcon icon={faGamepad} beat size="4x"/>:'Pokemon'}</strong></a>} game, where I was able to create a full video game experience which I still look to improve and Park Pioneer, where I was able to create a full stack project and showcase my growth in the past few months.

                Please feel free to {<a href="#fourth" onMouseOver={()=>setContactMe(true)} onMouseOut={()=>setContactMe(false)} className="link-warning"><strong>{contactMe? <FontAwesomeIcon icon={faContactCard} beat size="4x"/>:'contact me'}</strong></a>} for more information or to discuss potential opportunities.
                </p>
            </div>

            <div className="text-center my-4">
                <a href="https://docs.google.com/document/d/1hZxlKIUptc55nHLgmR0vhk9tx_jF4mMVq8OUUAcXKqA/view" target='blank' className="button-77">My Resume</a>
            </div>
        </div>
    )
}

export default ABOUT;