import React from 'react';

import './App.css';
import logo from './logo.svg'

import Header from './components/header/Header';
import TodoSummary from './components/todo-summary/TodoSummary';
import TodoAdd from './components/todo-add/TodoAdd';
import TodoList from './components/todo-list/TodoList';

function App() {
  return (
    <div className="App">
      <Header title="Todo list" logoImage={logo}/>
      <TodoSummary />
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
