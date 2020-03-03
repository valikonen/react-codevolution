import React, { Component } from 'react'
import Pure from './Pure';
import Normal from './Normal';
import Memo from './Memo';

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Zorro"
        }
    }
    
    componentDidMount() {
        
        setInterval(() => {
            this.setState({
                name: "Zorroo" 
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent rendered');
        return (
            <div>
                <Pure name={this.state.name} />
                <Normal name={this.state.name} />
                <Memo name={this.state.name} />
            </div>
        )
    }
}
