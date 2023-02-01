import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./types";


interface ITodo {
    id: number
    title: string
    completed: boolean
}

export const addTodo = (todo: ITodo) => ({ type: ADD_TODO, payload: todo })

export const removeTodo = () => ({ type: REMOVE_TODO })

export const editTodo = () => ({ type: EDIT_TODO })
