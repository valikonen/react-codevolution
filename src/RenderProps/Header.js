import React, { Component } from 'react';

export class Header extends Component {

    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}>Header: {this.props.count}</h3>
            </div>
        );
    }
}

export default Header;
