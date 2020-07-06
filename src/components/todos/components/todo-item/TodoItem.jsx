import React, { useContext } from 'react'
import './TodoItem.scss'
import { TodosContext } from '../../context/TodosContext'
import { TOGGLE_TODO_STATUS, REMOVE_TODO } from '../../context/TodosActionTypes'

export default function TodoItem({item, index}) {

    const {todosDispatch} = useContext(TodosContext)

    return (
        <li className={'todo-item ' + (item.done ? 'completed':'')}>
            <button className="complete" alt="Mark as done" title="Mark as done" onMouseUp={() => todosDispatch({type:TOGGLE_TODO_STATUS, todoText: item.text})}>
                &#x2713;
            </button>
            <span className="text">
                {item.text}
            </span>
            <button className="remove" alt="Remove" title="Remove" onClick={() => todosDispatch({type:REMOVE_TODO, todoText: item.text})}>
                &#x1f5d1;
            </button>
        </li>
    )
}
