import React, { createContext, useState, useEffect, useReducer } from 'react'
import { todosReducer } from '../reducers/TodosReducer'
import { ADD_FETCHED_TODOS } from '../reducers/TodosActionTypes'

const todoDataUrl = process.env.PUBLIC_URL + '/data/todos.json'

export const TodosContext = createContext()

function TodosContextProvider({children}) {
    // state
    const [loadedItems, setLoadedItems] = useState(false)
    const [todoItems, todosDispatch] = useReducer(todosReducer, [])


    // data load
    const fetchTodoData = (dataUrl) => {        
        if (!loadedItems) {
            fetch(dataUrl)            
                .then((r) => r.json())
                .then((todos) => {
                    console.log('todo(s) loaded') 

                    if (todos) {
                        todosDispatch({type: ADD_FETCHED_TODOS, todos})
                    }
                })
                .catch((e) => {
                    console.log(e)
                    alert('ToDo(s) could not be loaded. Create yours...')
                })
                .finally(() => setLoadedItems(true))
        }
    }

    // fetch todos from file
    useEffect(() => {
        // delay the request so we can see the spinner :D
        setTimeout( () => fetchTodoData(todoDataUrl), 1200)
    }, [loadedItems]) /* eslint-disable-line react-hooks/exhaustive-deps  */ // <---- OK???
    
    return (
        <TodosContext.Provider value={{
            todoItems,
            loadedItems,
            todosDispatch}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider


