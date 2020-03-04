import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

export class Header extends Component {

    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.handleCount}>Header: {this.props.count}</h3>
            </div>
        );
    }
}

export default UpdatedComponent(Header);
