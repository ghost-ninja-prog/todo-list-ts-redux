import { useState } from 'react'

import classes from './index.module.css'


interface ITodoPlusProps {
    addTodo: (title: string) => void
}

export const TodoPlus: React.FC<ITodoPlusProps> = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const onClickHandler = () => {
        addTodo(value)
        setValue('')
    }

    return(
        <div className={classes.inputPlusItem}>
            <input className={classes.inputPlus}
                type="text"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
            <button className={classes.btnPlus} onClick={onClickHandler}></button>
        </div>
    )
}