import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "It's my first post", likesCount: 11 },
        { id: 4, message: "It's my first post", likesCount: 11 },
    ]

    let postsElements = posts.
        map((p) => {
            return <Post message={p.message} likesCount={p.likesCount} />
        })

    return (
        <>
            <div className={classes.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </>
    )
}

export default MyPosts