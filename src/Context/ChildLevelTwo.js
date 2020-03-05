import React from 'react'
import UserContext from './userContext'

export default class ChildLevelTwo extends React.Component {
    render() {
        return (
            <div>
                Component E context {this.context}
            </div>
        )
    }
}

ChildLevelTwo.contextType = UserContext;

