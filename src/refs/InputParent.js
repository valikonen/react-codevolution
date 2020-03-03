import React, { Component } from 'react'
import InputChild from './InputChild'

export default class InputParent extends Component {
    constructor() {
        super();
        this.componentRef = React.createRef();
    }

    makeFocus = () => {
        this.componentRef.current.handleFocus();
    }

    render() {
        return (
            <div>
                <InputChild ref={this.componentRef} />
                <button onClick={this.makeFocus}>Focus</button>
            </div>
        )
    }
}
