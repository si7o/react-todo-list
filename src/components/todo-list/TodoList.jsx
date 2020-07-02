import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({items, toggleTodoHandler, removeTodoHandler}) {

    const todoItemList = items.map((todo, index) => 
        <TodoItem 
            item={todo}
            key={index}
            index={index}
            toggleTodoHandler={toggleTodoHandler} 
            removeTodoHandler={removeTodoHandler} />
    )

    return (
        <ul>
            {todoItemList}
        </ul>
    )
}
