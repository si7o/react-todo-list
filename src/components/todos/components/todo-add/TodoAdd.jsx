import React, {useState} from 'react'
import './TodoAdd.scss'

export default function TodoAdd({addTodoHandler}) {
    const [todoText, setTodoText] = useState('')

    function handleTodoTextChange(event) {
        setTodoText(event.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTodoClick()
        }
    } 

    function addTodoClick() {
        addTodoHandler(todoText)        
        setTodoText('')
    }

    return (
        <div className="todo-add">
            <input 
                type="text"
                placeholder="type todo text here" 
                value={todoText} 
                onChange={handleTodoTextChange}
                onKeyPress={handleKeyDown}/>
            <button onClick={addTodoClick} disabled={todoText.length===0}>
                Add todo
            </button>
        </div>
    )
}
