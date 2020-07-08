import React, { createContext, useEffect, useReducer } from 'react'
import { todosReducer } from './TodosReducer'
import { ADD_FETCHED_TODOS, SET_ERROR } from './TodosActionTypes'

const todoDataUrl = process.env.PUBLIC_URL + '/data/todos.json'

export const TodosContext = createContext()

function TodosContextProvider({children}) {
    // state
    const initialState = {
        todoList: [],
        status: 0, // 0: loading, 1: success, -1: error
    }
    
    const [todosStore, todosDispatch] = useReducer(todosReducer, initialState)

    // data load
    const fetchTodoData = (dataUrl) => {        
        if (todosStore.status === 0) {
            fetch(dataUrl)            
                .then((r) => r.json())
                .then((todos) => {
                    console.log('todo(s) loaded') 

                    if (todos) {
                        todosDispatch({type: ADD_FETCHED_TODOS, todos})
                    }
                })
                .catch((error) => {
                    alert('ToDo(s) could not be loaded. Create yours...')
                    todosDispatch({type: SET_ERROR, error})
                })
        }
    }

    // fetch todos from file
    useEffect(() => {
        // delay the request so we can see the spinner :D
        setTimeout( () => fetchTodoData(todoDataUrl), 1200)
    }, []) /* eslint-disable-line react-hooks/exhaustive-deps  */ // <---- OK???
    
    return (
        <TodosContext.Provider value={{
            todosStore,
            todosDispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider


