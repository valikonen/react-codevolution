import React, { Component } from 'react'

export default class InputChild extends Component {
    
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    handleFocus = () => {
        this.inputRef.current.focus();
    }
    

    render() {
        return (
            <div>
                <input ref={this.inputRef} />
            </div>
        )
    }
}
