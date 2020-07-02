import React from 'react';

import './App.css';
import logo from './logo.svg'

import Todos from './components/todos/Todos';

function App() {
  return (
    <div className="App">
      <Todos logoImage={logo}/>      
    </div>
  )
  
}

export default App;
