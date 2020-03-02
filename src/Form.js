import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            comment: '',
            topic: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} name="comment" onChange={this.handleChange}> </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} name="topic" onChange={this.handleChange}> 
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }
}
