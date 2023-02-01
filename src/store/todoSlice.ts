import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


type TodoState = Array<{
    id: number
    title: string
    completed: boolean
}>

const initialState: TodoState = [
    {id: 1, title: 'Default Todo', completed: false}
]


export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => state.concat({id: Date.now(), title: action.payload, completed: false}),
        removeTodo: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos
 
export default todoSlice.reducer