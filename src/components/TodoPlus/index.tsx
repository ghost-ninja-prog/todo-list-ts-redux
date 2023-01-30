import classes from './index.module.css'

export const TodoPlus = () => {
    return(
        <div className={classes.inputPlusItem}>
            <input className={classes.inputPlus} type="text" />
            <button className={classes.btnPlus}></button>
        </div>
    )
}