import React, { Component } from 'react';
import Counter from './Counter';
import Input from './Input';
import Header from './Header';

class Parent extends Component {
    render() {
        return (
            <div>
                <Counter {...this.props} />
                <Input />
                <Header />
            </div>
        );
    }
}


export default Parent;
