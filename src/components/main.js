import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


function MAIN () {
    const [hover, setHover] = useState('')
    function spinThis (e) {
        setHover(e)
        console.log('over')
    }

    function stopSpin() {
        setHover('0')
        console.log('left')
    }
    return(
        <div className="spacePaste my-3">
            <div className="text-center mb-3">
                <h1>Joseph George</h1>
                <h2 className="text-warning text-center">Junior Web Developer</h2>
            </div>

            <div className="text-center mb-3">
                <p className="text-light">
                    Welcome to my Portfolio! My name is Joseph George and my portfolio will showcase all that I learned
                    through my 6 month Digital Crafts Bootcamp experience and personal projects. Feel free to navigate around
                    and let me know what you think!
                </p>
            </div>

            <div className="text-center mb-5">
                <h2 className="text-center text-warning">
                    Skills
                </h2>

                <h3 className="faStuff">
                    <FontAwesomeIcon icon={faHtml5}  className={hover === '1'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('1')} onMouseOut={() => stopSpin()} />
                    <FontAwesomeIcon icon={faCss3}  className={hover === '2'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('2')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faJs}  className={hover === '3'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('3')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faReact}  className={hover === '4'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('4')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faBootstrap}  className={hover === '5'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('5')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faGit}  className={hover === '6'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('6')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faGithub}  className={hover === '7'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('7')} onMouseOut={() => stopSpin()}/>
                    <FontAwesomeIcon icon={faNodeJs}  className={hover === '8'? "mx-2 faicon fa-spin":"mx-2 faicon"} onMouseOver={() => spinThis('8')} onMouseOut={() => stopSpin()}/>
                </h3>
            </div>
            <div className="text-center my-4">
                <a href="https://docs.google.com/document/d/1hZxlKIUptc55nHLgmR0vhk9tx_jF4mMVq8OUUAcXKqA/view" target='blank' className="button-77">My Resume</a>
            </div>
        </div>
    )
}

export default MAIN;