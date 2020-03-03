import React, { Component } from 'react';
import ForwardRefChild from './ForwardRefChild';

class ForwardRefParent extends Component {
    constructor() {
        super();

        this.inputRef = React.createRef();

    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <ForwardRefChild ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        );
    }
}


ForwardRefParent.propTypes = {
    
};


export default ForwardRefParent;
