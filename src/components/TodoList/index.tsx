import classes from "./index.module.css"
import { TodoItem } from "../TodoItem"
// import { TodoListProps } from "../../models/models"
import { TodoPlus } from "../TodoPlus"
import { useState } from "react"
import { store } from '../../store/store'


export const TodoList = () => {

    const [todos, setTodos] = useState(store)

    const addTodo = (title: string) => {
        const todo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos([todo,...todos])
    }

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

    return (
        <div className={classes.todo__body}>
            <h3 className={classes.todo__title}>TodoList</h3>
            <TodoPlus addTodo={addTodo} />
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem key={todo.id} todo={todo} onEdited={onEdited} />
                        )
                    })
                }
            </ul>
        </div>
    )
}