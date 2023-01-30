import { ITodo } from "../../models/models"
import classes from "./index.module.css"


interface TodoItemProps {
    todo: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return (
        <li className={classes.item}>
            <input className={classes.checkbox} type="checkbox" />
            <span className={classes.title}>{todo.title}</span>
            <div>
                <button className={classes.btn__edit}></button>
                <button className={classes.btn__remove}></button>
            </div>
        </li>
    )
}