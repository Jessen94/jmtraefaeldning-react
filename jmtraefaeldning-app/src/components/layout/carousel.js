import React, { Component } from 'react';
import img from "../img/img_19_1.jpg";

export default class carousel extends Component {
    render() {
        return (
        <div className="main-banner">
            <img className="img--banner" src={img} alt="Jens posere med motorsav, og nedlagt træ"/>
        </div>
        )
    }
}
