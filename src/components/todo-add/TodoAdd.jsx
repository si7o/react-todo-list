import React from 'react'

export default function TodoAdd({addTodoHandler}) {
    let newTodo

    function handleTodoTextChange(event) {
        newTodo = event.target.value
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="type todo text here" 
                value={newTodo} 
                onChange={handleTodoTextChange}/>
            <button onClick={() => addTodoHandler(newTodo)}>
                Add todo
            </button>
        </div>
    )
}
