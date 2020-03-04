import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

export class Input extends Component {

    render() {
        return (
            <div>
                Input: {this.props.count}
                <input onChange={this.props.handleCount} />
            </div>
        );
    }
}

export default UpdatedComponent(Input);
