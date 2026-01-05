import classes from './Dialogues.module.css'
import DialogueItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogues = (props) => {
    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrej' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ]

    let dialogsElements = dialogs.
        map((d) => {
            return <DialogueItem name={d.name} id={d.id} />
        })



    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ]

    let messagesElements = messages.
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