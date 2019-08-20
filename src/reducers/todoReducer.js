import { FETCH_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
    todos: [],
    todo: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload,
                todos: [action.payload, ...state.todos], 
            }
        case EDIT_TODO:
            return {
                ...state,
                todo: action.payload,
                todos: [...state.todos.map(todo => {
                    if (todo.id === action.payload.id) return action.payload
                    return todo
                })], 
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => action.payload !== todo.id)]
            }
        default:
            return state;
    }
}