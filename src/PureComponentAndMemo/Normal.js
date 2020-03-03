import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Normal extends Component {

    render() {
        console.log('Normal rendered');
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
