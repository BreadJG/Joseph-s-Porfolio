import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";


function CONTACTS () {
    const [hover, setHover] = useState('')
    const [displayText, setDisplayText] = useState(null)

    function spinThis (e) {
            if(e === '1') {
                setDisplayText( '@BreadJG');
            } else if (e === '2') {
                setDisplayText("Connect with me!")
            } else if (e === '3') {
                setDisplayText('Email me!')
            } else if (e ==='4') {
                setDisplayText('818-964-9587')
            }
        setHover(e)
    }

    function stopSpin() {
        setHover('0')
    }



    return(
        <div className="spacePaste my-3">
            <div className="text-center mb-3">
                <h1>Contacts</h1>
                <h2 className="text-warning text-center">Get in touch!</h2>
            </div>

            <h3 className="text-center mb-3 text-dark">
                    <a href="https://github.com/BreadJG" className='link-dark' target='blank'>
                        <FontAwesomeIcon icon={faGithubAlt} href="https://github.com/BreadJG" className={hover === '1'? "mx-2 faicon fa-beat":"mx-4 faicon"} onMouseOver={() => spinThis('1')} onMouseOut={() => stopSpin()} />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-george-405b38223/" className='link-dark' target='blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} className={hover === '2'? "mx-2 faicon fa-beat":"mx-4 faicon"} onMouseOver={() => spinThis('2')} onMouseOut={() => stopSpin()}/>
                    </a>
                    <a href="mailto:josephdeleongeorge@gmail.com?body=Let's Connect!" className='link-dark' target='blank'>
                        <FontAwesomeIcon icon={faEnvelopeOpen}  className={hover === '3'? "mx-2 faicon fa-beat":"mx-4 faicon"} onMouseOver={() => spinThis('3')} onMouseOut={() => stopSpin()}/>
                    </a>
                    <a href="" onClick={()=>{navigator.clipboard.writeText('818-964-9587')}} className='link-dark' target='blank'>
                        <FontAwesomeIcon icon={faMobilePhone}  className={hover === '4'? "mx-2 faicon fa-beat":"mx-4 faicon"} onMouseOver={() => spinThis('4')} onMouseOut={() => stopSpin()}/>
                    </a>
            </h3>

            <div className="text-center my-4">
                <a href="https://docs.google.com/document/d/1hZxlKIUptc55nHLgmR0vhk9tx_jF4mMVq8OUUAcXKqA/view" target='blank' className="button-77">My Resume</a>
            </div>

            <div className="text-center">
                {displayText === null?null:<h2><span className="text-warning">{displayText}</span></h2>}
            </div>
        </div>
    )
}

export default CONTACTS;