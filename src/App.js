import React from 'react';

import './App.css';
import logo from './logo.svg'

import Todos from './components/todos/Todos';
import TodosContextProvider from './components/todos/context/TodosContext';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Todos logoImage={logo}/>
      </TodosContextProvider>
      <Footer sourceCodeUrl="https://github.com/si7o/react-todo-list"/>
    </div>
  )
  
}

export default App;
