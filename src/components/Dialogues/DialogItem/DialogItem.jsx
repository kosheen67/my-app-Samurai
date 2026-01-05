import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id

    return (
        <div className={`${classes.d} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem