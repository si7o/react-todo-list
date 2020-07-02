import React, {useState} from 'react'

export default function TodoAdd({addTodoHandler}) {
    const [todoText, setTodoText] = useState('')

    function handleTodoTextChange(event) {
        setTodoText(event.target.value)
    }

    function addTodoClick() {
        addTodoHandler(todoText)        
        setTodoText('')
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="type todo text here" 
                value={todoText} 
                onChange={handleTodoTextChange}/>
            <button onClick={addTodoClick}>
                Add todo
            </button>
        </div>
    )
}
