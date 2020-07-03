import React from 'react';

import './App.css';
import logo from './logo.svg'

import Todos from './components/todos/Todos';
import TodosContextProvider from './contexts/TodosContext';

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Todos logoImage={logo}/>
      </TodosContextProvider>
    </div>
  )
  
}

export default App;
