import React, { Component } from 'react';

class NewTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <div className="button-pos">
                        <button className="btn teal lighten-1 z-depth-0">
                            Upload Todo
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewTodo;