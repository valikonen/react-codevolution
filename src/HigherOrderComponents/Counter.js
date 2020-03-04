import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class Counter extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.handleCount}> Clicked {this.state.count} times</button>
            </div>
        );
    }
}


export default UpdatedComponent(Counter, 3);
