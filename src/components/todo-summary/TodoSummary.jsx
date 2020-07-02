import React from 'react'
import './TodoSummary.scss'

export default function TodoSummary({todoList}) {
    const pendigTodos = todoList.filter((todo) => todo.done === false).length;
    const doneTodos = todoList.filter((todo) => todo.done === true).length;

    return (
        <div className="todo-summary">
            <div className="pending">
                Pending ToDo(s): <span>{pendigTodos}</span>
            </div>
            <div className="completed">
                Done ToDo(s): <span>{doneTodos}</span>
            </div>
        </div>        
    )
}
