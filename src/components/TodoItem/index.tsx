import { useState } from "react"
import { ITodo } from "../../models/models"
import classes from "./index.module.css"


interface TodoItemProps {
    todo: ITodo;
    onEdited: (id: number, title: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdited }) => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [value, setValue] = useState(todo.title)


    const handleClickBtn = () => {
        onEdited(todo.id, value)
        setIsEditMode(false)
    }

    return (
        <li className={classes.item}>
            <input className={classes.checkbox} type="checkbox" />
            { isEditMode ? (
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            handleClickBtn()
                        }
                    }}
                />
            ) : (
                <span className={classes.title}>{todo.title}</span>        
            ) }
            <div>
                {
                    isEditMode ? (
                        <button className={classes.btn__edit_done} onClick={handleClickBtn} ></button>
                    ) : (
                        <button className={classes.btn__edit} onClick={() => setIsEditMode(true)}></button>
                    )
                }
                <button className={classes.btn__remove}></button>
            </div>
        </li>
    )
}