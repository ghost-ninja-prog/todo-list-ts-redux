import classes from "./index.module.css"
import { TodoItem } from "../TodoItem"
// import { TodoListProps } from "../../models/models"
import { TodoPlus } from "../TodoPlus"
import { useState } from "react"
import { store } from '../../store/store'


export const TodoList: React.FC = () => {

    const [todos, setTodos] = useState(store)

    const addTodo = (title: string) => {
        const todo = {
            id: Date.now(),
            title,
            completed: false

        }
        setTodos([todo,...todos])
    }

    return (
        <div className={classes.todo__body}>
            <h3 className={classes.todo__title}>TodoList</h3>
            <TodoPlus addTodo={addTodo} />
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <TodoItem key={todo.id} todo={todo} />
                        )
                    })
                }
            </ul>
        </div>
    )
}