import React from 'react'
import img from "../img/Figma_banner.jpg"

function Banner() {
    return (
        <div className="main-banner">
            <img className="img--banner" src={img} alt="Jens posere med motorsav, og nedlagt træ" />
        </div>
    )
}

export default Banner
