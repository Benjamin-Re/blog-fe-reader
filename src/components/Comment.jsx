export function Comment (props) {
    return (
        <>
            <h4>from: {props.author}</h4>
            <p>{props.body}</p>
        </>
    )
}