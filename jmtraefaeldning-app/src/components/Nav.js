import React, {Component} from 'react';
import NavItem from './NavItem';
import PropTypes from 'prop-types';

class Nav extends Component {

    render(){

    return this.props.nav.map((nav) => (
        <div className='li'>
            <NavItem key={nav.id} nav={nav} CurrentPage={this.props.CurrentPage}/>
        </div>
    ));
  }
}

Nav.propTypes = {
    nav: PropTypes.array.isRequired
}

export default Nav;