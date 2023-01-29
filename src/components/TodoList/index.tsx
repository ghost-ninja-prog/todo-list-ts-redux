import classes from "./index.module.css"
import { TodoItem } from "../TodoItem"
import { ITodo } from "../../models/models"



interface TodoListProps {
    todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <div className={classes.center}>
            <h3>TodoList</h3>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo} />
                    )
                })
            }
        </div>
    )
}