import React from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';
import axios from 'axios';

var fetch = require("node-fetch");


class App extends React.Component {
  state = {
    todos: ''
  }

  completeItem = (id) => {
    var options = {
      method: 'POST',
      url: 'http://8bc15796.ngrok.io/remove',
      headers:
      {
        'Postman-Token': '41582a4d-a65f-40d8-ac5d-ca27b473348d',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id }),
      json: true
    };

    fetch(options.url, options).then((res) => res.json()).then((res) => {
      console.log(res);
      const todos = this.state.todos.filter(todo => {
        return todo.id !== res.id;
      });
      this.setState({
        todos: todos
      })
    });
  }

  addTodo = (todo) => {
    todo.id = Math.floor(20 * Math.random());
    // console.log(todo)
    // let todos = [...this.state.todos, todo]                  //Spread operator dumps each induvidual item into the array
    // console.log(todos);
    // this.setState({
    //   todos
    // })
    console.log(todo)
    var options = {
      method: 'POST',
      url: 'http://8bc15796.ngrok.io/create',
      headers:
      {
        'Postman-Token': '41582a4d-a65f-40d8-ac5d-ca27b473348d',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo),
      json: true
    };

    fetch(options.url, options).then((res) => res.json()).then((res) => {
      console.log(res);
      const todos = [...this.state.todos, res]
      this.setState({ todos });
    });
  }

  componentDidMount = () => {
    axios.get("http://8bc15796.ngrok.io/all").then((res) => {
      var data = res.data;
      console.log(data)
      this.setState({
        todos: data
      })
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text lighten-2">Todo List</h1>
        <Todos todos={this.state.todos} completeItem={this.completeItem} />
        <NewTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;