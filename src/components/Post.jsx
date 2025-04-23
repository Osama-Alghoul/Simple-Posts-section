import styles from './Post.module.css'
import { Link } from 'react-router-dom'
export default function Post({ author, body, id }) {

    return (
        <li className={styles.post} key={id}>
            <Link to={id}>
                <p className={styles.author}>{author}</p>
                <p className={styles.text}>{body}</p>
            </Link>
        </li>
    )
}