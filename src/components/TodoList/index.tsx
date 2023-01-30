import classes from "./index.module.css"
import { TodoItem } from "../TodoItem"
import { TodoListProps } from "../../models/models"
import { TodoPlus } from "../TodoPlus"


export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <div className={classes.todo__body}>
            <h3 className={classes.todo__title}>TodoList</h3>
            <TodoPlus />
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