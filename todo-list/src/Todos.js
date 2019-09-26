import React from 'react';

const Todos = ({ todos, completeItem }) => {    //destructuring
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { completeItem(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">Sleepy Time xD</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;