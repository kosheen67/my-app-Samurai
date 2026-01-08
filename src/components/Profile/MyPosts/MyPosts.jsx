import classes from './MyPosts.module.css'
import Post from './Post/Post'
import posts from './../../Profile/Profile'
import React from 'react'


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }



    let postsElements =
        props.posts.map((p) => {
            return <Post message={p.message} likesCount={p.likesCount} />
        })

    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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