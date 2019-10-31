import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div class="container">
                <nav>
                    <ul>
                        <li id="Home"><p>Hjem</p></li>
                        <li id="Business"><p>Erhverv</p></li>
                        <li id="Private"><p>Privat</p></li>
                        <li id="Contact">Kontakt</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
