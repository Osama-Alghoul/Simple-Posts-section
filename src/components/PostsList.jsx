import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from './PostsList.module.css';
import { useState } from "react";

export default function PostsList(props) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredText, setEnteredText] = useState('');

    function handelBodyChange(event) {
        setEnteredBody(event.target.value);
    }
    function handelNameChange(event) {
        setEnteredText(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost
                    onBodyChange={handelBodyChange}
                    onNameChange={handelNameChange}
                />
            </Modal>

            <ul className={styles.posts}>
                <Post author={enteredText} body={enteredBody} />
                <Post author="MTDeeb" body="I know nigga" />
            </ul>
        </>
    );
}