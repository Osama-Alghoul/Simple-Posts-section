import styles from './Modal.module.css'
import { useNavigate } from 'react-router-dom';

export default function Modal({children}) {
    const naivigate = useNavigate();
    function closeHandeler() {
        naivigate('..');
    }
    return (
    <>
        <div className={styles.backdrop} onClick={closeHandeler}/>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
);
}