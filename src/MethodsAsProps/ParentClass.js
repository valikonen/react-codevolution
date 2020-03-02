import React, { Component } from 'react'
import ChildFunc from './ChildFunc';

export default class ParentClass extends Component {

    constructor(props) {
        super(props);
        this.logUser = this.logUser.bind(this);

        this.state = {
            user: null
        }
    }

    logUser(user) {
        console.log('Test');
        console.log(user);
        this.setState({ user})
    }

    render() {
        return (
            <div>
                <p>{JSON.stringify(this.state.user)}</p>
                <ChildFunc handlerLogUser={this.logUser} />
            </div>
        )
    }
}
