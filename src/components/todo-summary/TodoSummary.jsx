import React from 'react'

export default function TodoSummary({todoList}) {
    const pendigTodos = todoList.filter((todo) => todo.done === false).length;
    const doneTodos = todoList.filter((todo) => todo.done === true).length;

    return (
        <div>
            <div>
                Pending ToDo(s): {pendigTodos}
            </div>
            <div>
                Done ToDo(s): {doneTodos}
            </div>
        </div>        
    )
}
