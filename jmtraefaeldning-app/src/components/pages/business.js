import React from 'react'
import img from '../img/Figma_erhverv.jpg'


function Business() {
    return (
        <div>
            <div className="intro--container">
                <div className="home-headline">
                    <h1>Skovpleje i hele Danmark</h1>
                </div>
                <div className="intro">
                    <div className="intro--text">
                        <div className="intro-text-headline">
                            <h1>Professionelt og effektivt</h1>
                        </div>
                        <p>
                            Udover træfældning og -beskæring til private så tilbyder jeg også skovpleje til virksomheder. Dette inkludere:<br /><br />
                            <ol>
                                <li>Fældning af træer i alle størrelser</li>
                                <li>Udtyndning</li>
                                <li>Udrensning</li>
                                <li>Pakning af juletræer inkl. kørsel</li>
                            </ol>
                            <br />
                        Ring for at få et tilbud
                        </p>
                    </div>
                    <img className="img--intro" src={img} alt="Jens posere med motorsav" />
                </div>
            </div>
        </div>
    )
}

export default Business