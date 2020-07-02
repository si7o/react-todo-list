import React, {useState}  from 'react'

import Header from '../header/Header'
import TodoSummary from '../todo-summary/TodoSummary'
import TodoAdd from '../todo-add/TodoAdd'
import TodoList from '../todo-list/TodoList'

export default function Todos({logoImage}) {
    // state
    const [todoItems, setTodoItems] = useState([
        {
          text:"Improve the application", 
          done: false
        },
        {
          text:"Have breakfast", 
          done: true
        },
    ])

    // event handlers

    function addTodo(todoText) {
        console.log(`add todo "${todoText}"`);
        const todo = {
          text: todoText,
          done: false,
    }
    
    const newTodoItems = todoItems.slice().concat(todo)
        
        setTodoItems(newTodoItems)    
    }
       
    function toggleTodo(todoIndex) {
        console.log(`toggle todo "${todoIndex}"`);
        const newTodoItems = todoItems.slice()
        todoItems[todoIndex].done= !todoItems[todoIndex].done
    
        setTodoItems(newTodoItems)
    }
    
    function removeTodo(todoText) {
        console.log(`remove todo "${todoText}"`);    
        const newTodoItems = todoItems.filter((todo) => todo.text!==todoText)   
        
        setTodoItems(newTodoItems)
    }

    // component
    return (
        <div className="todos">
            <Header title="Todo list" logoImage={logoImage}/>
            <TodoSummary 
                todoList={todoItems} />
            <TodoAdd 
                todoList={todoItems} 
                addTodoHandler={addTodo}/>
            <TodoList 
                items={todoItems} 
                toggleTodoHandler={toggleTodo}
                removeTodoHandler={removeTodo}/>
        </div>
    )    
}
