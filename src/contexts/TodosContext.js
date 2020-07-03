import React, { createContext, useState, useEffect } from 'react'

const todoDataUrl = process.env.PUBLIC_URL + '/data/todos.json'

export const TodosContext = createContext()

function TodosContextProvider({children}) {
    // state
    const [todoItems, setTodoItems] = useState([])
    const [loadedItems, setLoadedItems] = useState(false)

    // data load
    // eslint-disable-next-line
    const fetchTodoData = (dataUrl) => {        
        if (!loadedItems) {
            fetch(dataUrl)            
                .then((r) => r.json())
                .then((data) => {
                    console.log('todo(s) loaded') 

                    if (data) {
                        const newTodoItems = todoItems.slice().concat(data)
                        setTodoItems(newTodoItems)
                    }
                })
                .catch((e)=> alert('ToDo(s) could not be loaded. Create yours...'))
                .finally(()=> setLoadedItems(true))
        }
    }

    // fetch todos from file
    useEffect(() => {
        // delay the request so we can see the spinner :D
        setTimeout( () => fetchTodoData(todoDataUrl), 1200)
    }, [loadedItems]) /* eslint-disable-line react-hooks/exhaustive-deps  */ // <---- OK???

    // event handlers

    const addTodo = (todoText) => {
        console.log(`add todo "${todoText}"`);

        setTodoItems([...todoItems,{ text: todoText, done: false}])        
    }
       
    const toggleTodo = (todoIndex) => {
        console.log(`toggle todo "${todoIndex}"`);
        
        const newTodoItems = todoItems.slice()
        newTodoItems[todoIndex].done= !todoItems[todoIndex].done
    
        setTodoItems(newTodoItems)
    }
    
    const removeTodo = (todoText) => {
        console.log(`remove todo "${todoText}"`);

        setTodoItems(todoItems.filter((todo) => todo.text!==todoText))
    }

    return (
        <TodosContext.Provider value={{
            todoItems,
            loadedItems,
            addTodo,
            toggleTodo,
            removeTodo}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider


