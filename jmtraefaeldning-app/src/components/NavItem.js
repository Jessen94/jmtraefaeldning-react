import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NavItem extends Component {
    render() {
        const { id, title} = this.props.nav;
        return (
            <div>
                <span onClick={this.props.CurrentPage.bind(this,id)}>
                <p>{title}
                </p>
                </span>
            </div>
        )
    }
}
NavItem.propTypes = {
    nav: PropTypes.object.isRequired
}
export default NavItem
