import React, { useContext } from 'react'
import './TodoSummary.scss'
import { TodosContext } from '../../../../contexts/TodosContext';

export default function TodoSummary() {
    const {todoItems} = useContext(TodosContext)

    const pendigTodos = todoItems?.filter((todo) => todo.done === false).length;
    const doneTodos = todoItems?.filter((todo) => todo.done === true).length;

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
