import React from "react";

function PROJECTCARDS () {
    return(
        <div className="allCards overflow-auto">
            <div className="card mb-3" style={{width: "55vw"}}>
                <img className="card-img-top"  src={require('./images/ParkPioneer.png')} alt="Park Pioneer"/>
                <div className="card-body">
                    <h5>Park Pioneer</h5>
                    <div>An app that allows you to browse through and plan a trip to any National Park.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/Tayjanee/CapstoneProject" target='blank'>Github</a>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{width: "55vw"}}>
                <img className="card-img-top"  src={require('./images/PokemonGame.png')} alt="Pokemon Game"/>
                <div className="card-body">
                    <h5 >Pokemon Game</h5>
                    <div>A fun game for Pokemon fans to test your Pokemon knowledge.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/BreadJG/pokemonGame" target='blank'>Github</a>
                        <a className="col link-warning" href="https://playful-kitsune-b02b78.netlify.app/" target='blank'>Netlify</a>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{width: "55vw"}}>
                <img className="card-img-top"  src={require('./images/Drink182.png')} alt="Drink 182"/>
                <div className="card-body">
                    <h5 >Drink 182</h5>
                    <div>The mission at Drink-182 is to find the best cocktail for you with what you have - plain and simple.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/joudom/Drink-182" target='blank'>Github</a>
                        <a className="col link-warning" href="https://www.youtube.com/embed/ju64DXZ0ZP4" target='blank'>YouTube Demo</a>
                    </div>
                </div>
            </div>

            <div className="card mb-3" style={{width: "55vw"}}>
                <img className="card-img-top"  src={require('./images/CRM.png')} alt="CRM"/>
                <div className="card-body">
                    <h5>Sexy CRM</h5>
                    <div>A simple, clean and efficient CRM App to help organize and manage any business.</div>
                    <div className="row">
                        <a className="col link-warning" href="https://github.com/TrisanHarto/FullStack" target='blank'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PROJECTCARDS;