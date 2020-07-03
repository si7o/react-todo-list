import React, { useContext } from 'react'
import './TodoItem.scss'
import { TodosContext } from '../../../../contexts/TodosContext'

export default function TodoItem({item, index}) {

    const {toggleTodo, removeTodo} = useContext(TodosContext)

    return (
        <li className={'todo-item ' + (item.done ? 'completed':'')}>
            <button className="complete" alt="Mark as done" title="Mark as done" onClick={() => toggleTodo(index)}>
                &#x2713;
            </button>
            <span className="text">
                {item.text}
            </span>
            <button className="remove" alt="Remove" title="Remove" onClick={() => removeTodo(item.text)}>
                &#x1f5d1;
            </button>
        </li>
    )
}
