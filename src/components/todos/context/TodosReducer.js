import { ADD_FETCHED_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS } from "./TodosActionTypes"

export const todosReducer = (state, action) => {
    switch(action.type) {
        case ADD_FETCHED_TODOS:
            console.log(`reducer: add fetched todo list`)
            return [...state,...action.todos]

        case ADD_TODO:
            console.log(`reducer: add todo "${action.todoText}"`)
            return [...state,{ text: action.todoText, done: false}]

        case REMOVE_TODO:
            console.log(`reducer: remove todo "${action.todoText}"`)
            return state.filter((todo) => todo.text!==action.todoText)

        case TOGGLE_TODO_STATUS:            
            console.log(`reducer: toggle todo "${action.todoText}"`)
            return state.map((todo)=> {
                if (todo.text === action.todoText) {
                    return {text: todo.text, done: !todo.done}
                }
                return todo
            })
            
        default:
            return state
    }
}