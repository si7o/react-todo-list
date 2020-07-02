import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    const todoList = Array.from(Array(10).keys())

    const todoItemList = todoList.map((todo) => 
        <TodoItem todo={todo}/>
    )

    return (
        <ul>
            {todoItemList}
        </ul>
    )
}
