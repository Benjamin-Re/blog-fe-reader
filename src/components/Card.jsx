import DOMPurify from "dompurify";
import styles from './Card.module.css'
import { useNavigate } from "react-router-dom";

export function Card (props) {
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/post/${props.id}`)
    }
    return (
        <div className={styles.card} onClick={handleClick}>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }} />
        </div>
    )
}