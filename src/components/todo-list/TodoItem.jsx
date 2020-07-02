import React from 'react'

export default function TodoItem({todo}) {
    return (
        <li className="todo-item">
            <button className="complete" alt="Mark as done" title="Mark as done">
                &#x2713;
            </button>
            <span className="text">
                {todo}
            </span>
            <button className="remove" alt="Remove" title="Remove">
                &#x1f5d1;
            </button>
        </li>
    )
}
