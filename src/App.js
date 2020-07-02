import React, {Component} from 'react';

import './App.css';
import logo from './logo.svg'

import Header from './components/header/Header';
import TodoSummary from './components/todo-summary/TodoSummary';
import TodoAdd from './components/todo-add/TodoAdd';
import TodoList from './components/todo-list/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todoItems: [
        {
          text:"Improve the application", 
          done: false
        },
        {
          text:"Have breakfast", 
          done: true
        },
      ]
    }

    this.addTodo = this.addTodo.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Header title="Todo list" logoImage={logo}/>
        <TodoSummary 
          todoList={this.state.todoItems} />
        <TodoAdd 
          todoList={this.state.todoItems} 
          addTodoHandler={this.addTodo}/>
        <TodoList 
          items={this.state.todoItems} 
          completeTodoHandler={this.completeTodo}
          removeTodoHandler={this.removeTodo}/>
      </div>
    )
  }

  addTodo(todoText) {
    console.log(`add todo "${todoText}"`);
    const todo = {
      text: todoText,
      done: false,
    }

    const todoItems = this.state.todoItems.slice().concat(todo)

    this.setState(
      {todoItems: todoItems}
    )
    
  }
   
  completeTodo(todoIndex) {
    console.log(`complete todo "${todoIndex}"`);
    const todoItems = this.state.todoItems.slice()
    todoItems[todoIndex].done=true

    this.setState(
      {todoItems: todoItems}
    )
  }

  removeTodo(todoText) {
    console.log(`remove todo "${todoText}"`);
    
    const todoItems = this.state.todoItems.filter((todo) => todo.text!==todoText)   
    
    this.setState(
      {todoItems: todoItems}
    )
  }
}

export default App;
