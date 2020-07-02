import React, {useState} from 'react';

import './App.css';
import logo from './logo.svg'

import Header from './components/header/Header';
import TodoSummary from './components/todo-summary/TodoSummary';
import TodoAdd from './components/todo-add/TodoAdd';
import TodoList from './components/todo-list/TodoList';

function App() {

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
  
  return (
    <div className="App">
      <Header title="Todo list" logoImage={logo}/>
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
}

export default App;
