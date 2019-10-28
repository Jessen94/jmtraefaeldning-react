import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.nav.title}</p>
            </div>
        )
    }
}
NavItem.propTypes = {
    nav: PropTypes.object.isRequired
}
export default NavItem
