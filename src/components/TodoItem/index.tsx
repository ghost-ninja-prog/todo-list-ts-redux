import style from "./index.module.css"

interface TodoProps {
    id: number;
    title: string;
    completed: boolean
}

const TodoItem = ({ id, title, completed }: TodoProps) => {
    return(
        <p className={style.item}>{title}</p>
    )
}

export default TodoItem