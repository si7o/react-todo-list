import React, { useContext } from 'react'
import TodoItem from '../todo-item/TodoItem'

import './TodoList.scss'
import { TodosContext } from '../../context/TodosContext'

export default function TodoList() {

    const {todosStore} = useContext(TodosContext)

    const todoItemList = todosStore?.todoList?.map((todo, index) => 
        <TodoItem 
            item={todo}
            key={index}
            index={index} />
    )

    if (todosStore.status === 0) 
        return (<div>loading ToDo(s)...</div>) 
    else if (!todosStore?.todoList?.length)
        return (<div>No ToDo(s) yet. Add them!</div>)
    else 
        return (
            <ul className="todo-list">
                {todoItemList}
            </ul>
        )
}
