import React from 'react'
import img from '../img/Figma_erhverv.jpg'


function business() {
    return (
        <div>
            <div className="intro--container">
                <div className="home-headline">
                    <h1>Skovpleje i hele Danmark</h1>
                </div>
                <div className="intro">
                    <div className="intro--text">
                        <h1>Professionelt og effektivt</h1>
                        <p>
                        Udover træfældning og -beskæring til privat så tilbyder jeg også skovpleje til virksomheder.
                        </p>
                    </div>
                    <img className="img--intro" src={img} alt="Jens posere med motorsav" />
                </div>
            </div>
        </div>
    )
}

export default business;