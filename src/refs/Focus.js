import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Focus extends Component {
    
    constructor() {
        super();

        this.myInput = React.createRef();
        // old way
        // this.cbInput = null;
        // this.setCbRef = elem => {
        //     this.cbInput = elem;
        // }
    }

    componentDidMount() {
        this.myInput.current.focus();

        // if(this.cbInput) {
        //     this.cbInput.focus();
        // }

    }

    render() {
        return (
            <div>
                <input ref={this.myInput} />
                {/* <input ref={this.setCbRef} /> */}
            </div>
        )
    }
}
