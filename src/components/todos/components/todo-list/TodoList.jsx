import React, { useContext } from 'react'
import TodoItem from '../todo-item/TodoItem'

import './TodoList.scss'
import { TodosContext } from '../../context/TodosContext'
import { RESET_TODOS } from '../../context/TodosActionTypes'

export default function TodoList() {

    const {todosStore, todosDispatch} = useContext(TodosContext)

    const todoItemList = todosStore?.todoList?.length ?(
        <ul> {todosStore.todoList.map((todo) => 
            <TodoItem 
                item={todo}
                key={todo.id} />
            )}
        </ul>
    ) : ( 
        <p>No ToDo(s) yet. Add them!</p>
    )
    
    return (
        <div className="todo-list">
            {todoItemList}
            <button onClick={() => todosDispatch({type: RESET_TODOS})}>Reset</button>
        </div>            
    ) 
}
