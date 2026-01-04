import classes from './Dialogues.module.css'

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Andrej
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Viktor
                </div>
                <div className={classes.dialog}>
                    Valera
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogues