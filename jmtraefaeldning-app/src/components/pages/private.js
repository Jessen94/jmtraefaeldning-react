import React from 'react'
import img from '../img/Figma_erhverv.jpg'


function Private() {
    return (
        <div>
        <div className="intro--container">
            <div className="home-headline">
                <h1>Træpleje og beskæring til private</h1>
            </div>
            <div className="intro">
                <div className="intro--text">
                    <h1>Professionelt og effektivt</h1>
                    <p>
                    Udover træfældning og -beskæring til private så tilbyder jeg også skovpleje til virksomheder. Dette inkludere:<br/><br/>
                    <ol>
                        <li>Fældning og Beskæring af træer i alle størrelser</li>
                        <li>Hækklipning</li>
                        <li>Opskæring til brænde</li>
                    </ol>
                    <br/>
                    Ring for at få et tilbud
                    </p>
                </div>
                <img className="img--intro" src={img} alt="Jens posere med motorsav" />
            </div>
        </div>
    </div>
    )
}

export default Private
