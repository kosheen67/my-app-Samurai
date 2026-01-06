import classes from './MyPosts.module.css'
import Post from './Post/Post'
import posts from './../../Profile/Profile'

const MyPosts = (props) => {

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