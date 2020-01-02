import React from 'react';
import img from "../img/img7.jpg";


function home() {
    return (
            <div>
                <div className="intro--container">
                    <p className="intro" id="introtext">
                    Mit navn er Jens Moesgaard og jeg er ejer af JMTræfældning.
                    </p>
                    <img className="intro img--intro" src={img} alt="Jens posere med motorsav"/>
            </div>
        </div>
    )
}

export default home;