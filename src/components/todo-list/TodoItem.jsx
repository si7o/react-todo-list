import React from 'react'

export default function TodoItem({item, index, toggleTodoHandler, removeTodoHandler}) {

    return (
        <li className={'todo-item ' + (item.done ? 'completed':'')}>
            <button className="complete" alt="Mark as done" title="Mark as done" onClick={() => toggleTodoHandler(index)}>
                &#x2713;
            </button>
            <span className="text">
                {item.text}
            </span>
            <button className="remove" alt="Remove" title="Remove" onClick={() => removeTodoHandler(item.text)}>
                &#x1f5d1;
            </button>
        </li>
    )
}
