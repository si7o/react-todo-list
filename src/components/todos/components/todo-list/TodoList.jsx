import React, { useContext } from 'react'
import TodoItem from './TodoItem'

import './TodoList.scss'
import { TodosContext } from '../../../../contexts/TodosContext'

export default function TodoList() {

    const {todoItems, loadedItems} = useContext(TodosContext)

    const todoItemList = todoItems?.map((todo, index) => 
        <TodoItem 
            item={todo}
            key={index}
            index={index} />
    )

    if (!loadedItems) 
        return (<div>loading ToDo(s)...</div>) 
    else if (!todoItems?.length)
        return (<div>No ToDo(s) yet. Add them!</div>)
    else 
        return (
            <ul className="todo-list">
                {todoItemList}
            </ul>
        )
}
