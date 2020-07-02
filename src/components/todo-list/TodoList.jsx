import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({items, completeTodoHandler, removeTodoHandler}) {

    const todoItemList = items.map((todo, index) => 
        <TodoItem 
            item={todo}
            key={index}
            index={index}
            completeTodoHandler={completeTodoHandler} 
            removeTodoHandler={removeTodoHandler} />
    )

    return (
        <ul>
            {todoItemList}
        </ul>
    )
}
