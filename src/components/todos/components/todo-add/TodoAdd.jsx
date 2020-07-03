import React, {useState} from 'react'
import './TodoAdd.scss'

export default function TodoAdd({addTodoHandler}) {
    const [todoText, setTodoText] = useState('')

    const handleTodoTextChange = (event) => {
        setTodoText(event.target.value)
    }    

    const submitTodo = (e) => {
        e.preventDefault()
        addTodoHandler(todoText)
        setTodoText('')
    }

    return (
        <form className="todo-add" onSubmit={submitTodo}>
            <input 
                type="text"
                placeholder="type todo text here" 
                value={todoText} 
                onChange={handleTodoTextChange} />
            <input type="submit" disabled={todoText.length===0} value="Add todo"/>
        </form>
    )
}
