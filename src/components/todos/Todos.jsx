import React, {useState, useEffect}  from 'react'

import Header from '../header/Header'
import TodoSummary from './components/todo-summary/TodoSummary'
import TodoAdd from './components/todo-add/TodoAdd'
import TodoList from './components/todo-list/TodoList'

const todoDataUrl = process.env.PUBLIC_URL + './data/todos.json'

export default function Todos({logoImage}) {
    // state
    const [todoItems, setTodoItems] = useState([])
    const [loadedItems, setLoadedItems] = useState(false)

    // fetch todos from file
    useEffect(() => {
        // delay the request so we can see the spinner :D
        setTimeout( () => {
            if (!loadedItems)
                fetch(todoDataUrl)            
                    .then((r) => r.json())
                    .then((data) => {
                        console.log('todo(s) loaded')
                        
                        setLoadedItems(true)
                        setTodoItems(data)
                    })
        }, 1000)
    })

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
            <Header title="Todo list" logoImage={logoImage} isLoading={!loadedItems}/>

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
