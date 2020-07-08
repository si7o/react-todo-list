import { ADD_FETCHED_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO_STATUS, RESET_TODOS ,SET_ERROR } from "./TodosActionTypes"

export const todosReducer = (state, action) => {
    switch(action.type) {
        case ADD_FETCHED_TODOS:
            console.log(`reducer: add fetched todo list`)

            return {
                ...state,
                todoList: [...state.todoList,...action.todos],
                status: 1, // success
            }

        case ADD_TODO:
            console.log(`reducer: add todo "${action.todoText}"`)

            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    { 
                        id: Math.random().toString(36),
                        name: action.todoText,
                        complete: false
                    }
                ],
            }

        case REMOVE_TODO:
            console.log(`reducer: remove todo "${action.id}"`)

            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id!==action.id),
            }

        case TOGGLE_TODO_STATUS:            
            console.log(`reducer: toggle todo "${action.todoText}"`)            

            return {
                ...state,
                todoList: state.todoList.map((todo)=> {
                    if (todo.id === action.id) {
                        return {...todo, complete: !todo.complete}
                    }
                    return todo
                }),
            }

        case RESET_TODOS:
            console.log(`reducer: change status to Loading`)

            return {
                ...state,
                error: null,
                todoList: [],
                status: 0, //loading
            }        

        case SET_ERROR:
            console.log(`reducer: change status to Error`)            
            console.log(action.error)
            
            return {
                ...state,
                status: -1, //error
                error: action.error,
            }
            
        default:
            return state
    }
}