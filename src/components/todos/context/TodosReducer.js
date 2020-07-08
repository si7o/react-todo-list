import { ADD_FETCHED_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS, SET_LOADING, SET_ERROR } from "./TodosActionTypes"

export const todosReducer = (state, action) => {
    switch(action.type) {
        case ADD_FETCHED_TODOS:
            console.log(`reducer: add fetched todo list`)

            return {
                ...state,
                todoList: [...state.todoList,...action.todos],
                status: 1,
            }

        case ADD_TODO:
            console.log(`reducer: add todo "${action.todoText}"`)

            return {
                ...state,
                todoList: [...state.todoList,{ text: action.todoText, done: false}],
            }

        case REMOVE_TODO:
            console.log(`reducer: remove todo "${action.todoText}"`)

            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.text!==action.todoText),
            }

        case TOGGLE_TODO_STATUS:            
            console.log(`reducer: toggle todo "${action.todoText}"`)            

            return {
                ...state,
                todoList: state.todoList.map((todo)=> {
                    if (todo.text === action.todoText) {
                        return {text: todo.text, done: !todo.done}
                    }
                    return todo
                }),
            }

        case SET_LOADING:
            console.log(`reducer: change status to Loading`)

            return {
                ...state,
                status: 0
            }        

        case SET_ERROR:
            console.log(`reducer: change status to Error`)            
            console.log(action.error)
            
            return {
                ...state,
                status: -1,
                error: action.error
            }
            
        default:
            return state
    }
}