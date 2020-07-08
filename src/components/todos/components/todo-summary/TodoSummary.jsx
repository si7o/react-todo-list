import React, { useContext } from 'react'
import './TodoSummary.scss'
import { TodosContext } from '../../context/TodosContext';
import { RESET_TODOS } from '../../context/TodosActionTypes';

export default function TodoSummary() {
    const {todosStore} = useContext(TodosContext)

    const pendigTodos = todosStore.todoList?.filter((todo) => todo.complete === false).length;
    const doneTodos = todosStore.todoList?.filter((todo) => todo.complete === true).length;

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
