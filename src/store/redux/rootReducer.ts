// import { combineReducer } from 'redux'
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./types"


const initialState = [
    {
        id: 1,
        title: 'купить молоко',
        completed: false,
    },
    {
        id: 2,
        title: 'купить хлеб',
        completed: false,
    },
    {
        id: 3,
        title: 'купить пиво',
        completed: false,
    },
]

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {id: Date.now(), title: action.payload, completed: false}]
        case REMOVE_TODO: 
            return state.filter(todo => todo.id !== action.payload)
        case EDIT_TODO: 
            return state.map(todo => todo.id === action.payload.id ? todo.title = action.payload.title : todo.title)
    }
}

export const rootReducer = combineReducer({
    todo: todoReducer,
})