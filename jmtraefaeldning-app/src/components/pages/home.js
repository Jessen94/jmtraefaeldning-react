import React from 'react'
import img from "../img/Figma_hej.jpg"


function Home() {
    return (
        <div>
            <div className="intro--container">
                <div className="home-headline">
                    <h1>Professionel træfældning på Sjælland</h1>
                </div>
                <div className="intro">
                    <div className="intro--text">
                        <div className="intro-text-headline">
                            <h1>Professionelt og effektivt</h1>
                        </div>
                        <p>
                            JMtræfældning er drevet af mig Jens Moesgaard. Fældning foregår altid med hensyn til de omgivelser som træet, eller træerne befinder sig i.<br /><br /><br />
                            Oprydningen klare jeg også gerne for dig, du bestemmer helt selv om det skal skæres op til brænde eller om jeg skal tage det med.
                        </p>
                    </div>
                    <img className="img--intro" src={img} alt="Jens posere med motorsav" />
                </div>
            </div>
        </div>
    )
}

export default Home