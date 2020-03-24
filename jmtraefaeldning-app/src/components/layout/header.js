import React from 'react'
import { Link } from 'react-router-dom'
import img from "../img/Logo.png"

function Header() {
    return (
        <div className="header sticky">
            <nav>
                <ul>
                    <li className="header-logo" id="Logo"><img className="logo-img" src={img} alt="JMTræfældnings Logo" /></li>
                    <li id="Home"><Link to="/" style={linkstyle}>Hjem</Link></li>
                    <li id="Business"><Link to="/erhverv" style={linkstyle}>Erhverv</Link></li>
                    <li id="Private"><Link to="/privat" style={linkstyle}>Privat</Link></li>
                    <li id="Contact"><Link to="/kontakt" style={linkstyle}>Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    )
}

const linkstyle = {
    textDecoration: 'none',
    color: '#000000'
};

export default Header
