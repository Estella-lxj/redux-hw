import React from 'react';

const TodoList = (props) => {

    let filteredTodos = []
    if (props.filter === 'all') {
        filteredTodos = props.todos;
    } else if (props.filter === 'active') {
        filteredTodos = props.todos.filter((item) => item.completed === false)
    } else {
        filteredTodos = props.todos.filter((item) => item.completed === true)
    }

    return (
        <div>
            <ul>
                {filteredTodos.map(item => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => props.toggleTodo(item.id)}
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {item.text}
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default TodoList;
