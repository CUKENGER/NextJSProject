import styles from './PostContainer.module.scss'
import Post from "../Post/Post";
import Container from "../Container/Container";

export default function PostContainer () {
    return (
        <div className={styles.container}>
            <Post/>
        </div>
    )
}
