import React, { useContext } from 'react'
import './TodoItem.scss'
import { TodosContext } from '../../context/TodosContext'
import { TOGGLE_TODO_STATUS, REMOVE_TODO } from '../../context/TodosActionTypes'

export default function TodoItem({item}) {

    const {todosDispatch} = useContext(TodosContext)

    return (
        <li className={'todo-item ' + (item.complete ? 'completed':'')}>
            <button className="complete" alt="Mark as done" title="Mark as done" onMouseUp={() => todosDispatch({type:TOGGLE_TODO_STATUS, id: item.id})}>
                &#x2714;
            </button>
            <span className="text">
                {item.name}
            </span>
            <button className="remove" alt="Remove" title="Remove" onClick={() => todosDispatch({type:REMOVE_TODO, id: item.id})}>
                &#x2716;
            </button>
        </li>
    )
}
