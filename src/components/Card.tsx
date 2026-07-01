import DOMPurify from "dompurify";
import styles from "./Card.module.css"

type CardProps = {
    title: string;
    content: string;
}
export function Card (props: CardProps) {
    return (
        <div className={styles.card}>
            <h1>{props.title}</h1>
            
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }} />
        </div>
    )

}