import React, { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import { RESET_TODOS } from '../../context/TodosActionTypes'

export default function TodosStatusBoundary({children}) {  
    // should status management be distributed along each of the {children} components instead of centralicing it here?
    const {todosStore, todosDispatch} = useContext(TodosContext)

    switch (todosStore.status) {
        case 0:
            return (
            <div className="todo-list skeleton">
                <ul>
                    <li className="todo-item"><span className="text"> </span></li>
                    <li className="todo-item"><span className="text"> </span></li>
                    <li className="todo-item"><span className="text"> </span></li>
                </ul>
            </div>
            ) 

        case 1:
            return (
                <div>
                    {children}
                </div>
            )

        case -1:
            return (
                <div className="error">
                    <p className="warning">
                        An error ocurred when trying to load ToDo(s)
                    </p>
                    <button onClick={() => todosDispatch({type: RESET_TODOS})}>Try again</button>
                </div>
            )

        default:            
            return (
                <div className="error">
                    <p className="warning">
                        An unknown error ocurred. Please refresh the page
                    </p>
                </div>
            )        
    }  
        
}
