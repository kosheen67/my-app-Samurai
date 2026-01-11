import classes from './MyPosts.module.css'
import Post from './Post/Post'
import posts from './../../Profile/Profile'
import React from 'react'


const MyPosts = (props) => {

    let newPostElement = React.createRef()


    let postsElements =
        props.posts.map((p) => {
            return <Post message={p.message} likesCount={p.likesCount} />
        })


    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={addPost} > Add post</button>
                    </div>
                </div>
            </div >
            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts