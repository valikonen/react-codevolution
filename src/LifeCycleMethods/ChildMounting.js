import React, { Component } from 'react';

export class ChildMounting extends Component {
        // execute first
        constructor() {
            super();
            console.log('Child constructor');

            this.state = {
                name: 'Zorro'
            };
        }
        // second
        static getDerivedStateFromProps(props, state) {
            console.log('Child getDerivatesStateFromProps');
            return null;
        }
    
        //third -> singura care e required
        // poate intoarce un obiect
        render() {
            console.log('Child render');
            return (
                <div>
                    
                </div>
            );
        }
        // ultima, se exe. doar o data
        // buna pt http request
        // invocata dupa ce s-a incarcat componenta si tot copiii ei
        componentDidMount() {
            console.log('Child componentDidMount');
        }
}

export default ChildMounting;
