import { useState } from "react"
import classes from "./index.module.css"


import { TodoItem } from "../TodoItem"
import { TodoPlus } from "../TodoPlus"

import { store } from '../../store/store'


export const TodoList = () => {

    const [todos, setTodos] = useState(store)

    const addTodo = (title: string) => {
        const todo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos([...todos, todo])
    }

    // const addTodo = (title) => {
    //     const todo = {
    //         id: Date.now(),
    //         title,
    //         completed: false
    //     }
    //     store.dispatch(addTodo(todo))
    // }

    const onEdited = (id: number, title: string) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.title = title
                }
                return todo
            })
        )
    }

    const removeTodo = (id: number) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return (
        <div className={classes.todo__body}>
            <h3 className={classes.todo__title}>TodoList</h3>
            <TodoPlus addTodo={addTodo} />
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                onEdited={onEdited}
                                removeTodo={removeTodo}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}