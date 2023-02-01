import React, { useState } from 'react'

// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch } from '../../store/hooks'
import { addTodo } from '../../store/todoSlice'

import classes from './index.module.css'


// interface ITodoPlusProps {
//     addTodo: (title: string) => void
// }

export const TodoPlus = () => {

    const dispatch = useAppDispatch()


    const [value, setValue] = useState('')

    const onClickHandler = () => {
        dispatch(addTodo(value))
        setValue('')
    }

    const onKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === "Enter") {
            dispatch(addTodo(value))
            setValue('')
        }
    }

    return(
        <div className={classes.inputPlusItem}>
            <input className={classes.inputPlus}
                type="text"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                onKeyDown={onKeyDownInput}
            />
            <button className={classes.btnPlus} onClick={onClickHandler}></button>
        </div>
    )
}