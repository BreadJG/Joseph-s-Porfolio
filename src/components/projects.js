import React, {useState} from "react";
import CarouselFade from "./carouselFade";
import PROJECTCARDS from "./projectCards";




function PROJECTS (){

    return(
        <div className="spacePaste my-3">
            <div className="text-center mb-3">
                <h1>My Projects</h1>
                <h2 className="text-warning text-center"></h2>
            </div>
            
            <div className="text-center mb-3">
                <CarouselFade/>
                <PROJECTCARDS/>
            </div>
            
            <div className="text-center my-4">
                <a href="https://docs.google.com/document/d/1hZxlKIUptc55nHLgmR0vhk9tx_jF4mMVq8OUUAcXKqA/view" target='blank' className="button-77">My Resume</a>
            </div>
        </div>
        )
}

export default PROJECTS;