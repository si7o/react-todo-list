import React, {useState, useContext} from 'react'
import {TodosContext} from '../../../../contexts/TodosContext'
import './TodoAdd.scss'

export default function TodoAdd() {
    const [todoText, setTodoText] = useState('')
    const {addTodo} = useContext(TodosContext)

    const handleTodoTextChange = (event) => {
        setTodoText(event.target.value)
    }    

    const submitTodo = (e) => {
        e.preventDefault()
        addTodo(todoText)
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
