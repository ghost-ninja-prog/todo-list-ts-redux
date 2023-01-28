import TodoItem from '../TodoItem';
import styles from './index.module.css'

type TodoListProps = {
    todos: Array<Todo>
}

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}





const TodoList = ({ todos }: TodoListProps) => {
    return (
        <div className={styles.center}>
            {todos.map(todo => (
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
            )
            )}
        </div>
    )
}

export default TodoList