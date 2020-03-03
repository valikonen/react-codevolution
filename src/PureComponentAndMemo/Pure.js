import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Pure extends PureComponent {

    render() {
        console.log('Pure rendered');
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
