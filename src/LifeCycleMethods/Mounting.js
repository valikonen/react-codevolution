import React, { Component } from 'react';
import ChildMounting from './ChildMounting';

class Mounting extends Component {
    // execute first
    constructor(props) {
        super(props);
        console.log('Parent constructor');

        this.state = {
            name: 'Zorro'
        };
    }
    // second
    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps');
        return null;
    }

    //third -> singura care e required
    // poate intoarce un obiect
    render() {
        console.log('Parent render');
        return (
            <div>
                <ChildMounting />
            </div>
        );
    }
    // ultima, se exe. doar o data
    // buna pt http request
    // invocata dupa ce s-a incarcat componenta si tot copiii ei
    componentDidMount() {
        console.log('Parent componentDidMount');
    }
}

export default Mounting;
