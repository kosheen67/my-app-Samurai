import classes from './Dialogues.module.css'
import DialogueItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogues = (props) => {

    let dialogsElements = props.state.dialogs.
        map((d) => {
            return <DialogueItem name={d.name} id={d.id} />
        })

    let messagesElements = props.state.messages.
        map((m) => {
            return <Message message={m.message} />
        })

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues