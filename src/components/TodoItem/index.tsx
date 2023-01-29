import { ITodo } from "../../models/models"
import classes from "./index.module.css"


interface TodoItemProps {
    todo: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <div className={classes.item}>
            {todo.title}
        </div>
    )
}