import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message="It's my first post" likesCount='23' />

            </div>
        </>
    )
}

export default MyPosts