import React, { useContext}  from 'react'

import Header from '../header/Header'
import TodoSummary from './components/todo-summary/TodoSummary'
import TodoAdd from './components/todo-add/TodoAdd'
import TodoList from './components/todo-list/TodoList'
import { TodosContext } from './context/TodosContext'

export default function Todos({logoImage}) {
    // state    
    const {loadedItems} = useContext(TodosContext)    

    // component
    return (        
        <div className="todos">
            <Header title="Todo list" logoImage={logoImage} isLoading={!loadedItems}/>                             
            <TodoSummary />
            <TodoAdd />
            <TodoList />
        </div>
    )    
}
