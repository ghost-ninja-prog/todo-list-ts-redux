import classes from "./index.module.css"


import { TodoItem } from "../TodoItem"
import { TodoPlus } from "../TodoPlus"
import { useAppSelector } from "../../store/hooks"

// import { store } from '../../store/store'


export const TodoList = () => {
    
    const store = useAppSelector(state => state.todos)


    const onEdited = (id: number, title: string) => {
        // setTodos(
        //     todos.map(todo => {
        //         if(todo.id === id) {
        //             todo.title = title
        //         }
        //         return todo
        //     })
        // )
    }

    // const removeTodo = (id: number) => {
    //     setTodos(
    //         todos.filter(todo => todo.id !== id)
    //     )
    // }

    return (
        <div className={classes.todo__body}>
            <h3 className={classes.todo__title}>TodoList</h3>
            <TodoPlus />
            <ul>
                {
                    store.map((todo) => {
                        return (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                onEdited={onEdited}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}