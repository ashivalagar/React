import React from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';


class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play mario kart" }
    ]
  }

  completeItem = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    // console.log(todo)
    let todos = [...this.state.todos, todo]                  //Spread operator dumps each induvidual item into the array
    console.log(todos);
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} completeItem={this.completeItem} />
        <NewTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;