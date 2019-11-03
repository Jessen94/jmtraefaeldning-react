import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <ul>
                        <li id="Home"><Link to="/" style={linkstyle}>Hjem</Link></li>
                        <li id="Business"><Link to="/erhverv" style={linkstyle}>Erhverv</Link></li>
                        <li id="Private"><Link to="/privat" style={linkstyle}>Privat</Link></li>
                        <li id="Contact"><Link to="/kontakt" style={linkstyle}>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


const linkstyle = {
    textDecoration: 'none',
    color: '#000000'
};

export default header;
