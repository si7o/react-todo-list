import React, { useContext } from 'react'
import TodoItem from '../todo-item/TodoItem'

import './TodoList.scss'
import { TodosContext } from '../../context/TodosContext'
import { RESET_TODOS } from '../../context/TodosActionTypes'

export default function TodoList() {

    const {todosStore, todosDispatch} = useContext(TodosContext)

    const todoItemList = todosStore?.todoList?.map((todo) => 
        <TodoItem 
            item={todo}
            key={todo.id} />
    )
    
    if (!todosStore?.todoList?.length)
        return (
            <div className="todo-list">
                No ToDo(s) yet. Add them!
            </div>
        )
    else 
        return (
            <div className="todo-list">
                <ul>
                    {todoItemList}
                </ul>
                <button onClick={() => todosDispatch({type: RESET_TODOS})}>Reset</button>
            </div>
        )
}
