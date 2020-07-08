import React, { useContext}  from 'react'

import Header from '../header/Header'
import TodoSummary from './components/todo-summary/TodoSummary'
import TodoAdd from './components/todo-add/TodoAdd'
import TodoList from './components/todo-list/TodoList'
import { TodosContext } from './context/TodosContext'
import TodosStatusBoundary from './components/todos-status-boundary/TodosStatusBoundary'
import TodosSettings from './components/todos-settings/TodosSettings'

export default function Todos({logoImage}) {
    // state    
    const {todosStore} = useContext(TodosContext)

    // component
    return (        
        <div className="todos">
            <Header title="Todo list" logoImage={logoImage} isLoading={todosStore.status === 0}/>            
            <TodosStatusBoundary>
                <TodoSummary />            
                <TodoAdd />
                <TodoList />
            </TodosStatusBoundary>
            <TodosSettings />
        </div>
    )
}
