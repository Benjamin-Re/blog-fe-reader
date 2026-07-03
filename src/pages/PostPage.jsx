import { useParams } from 'react-router-dom';

export function PostPage() {
    const { id } = useParams(); // grabs the ":id" from the URL
    return (
        <>
            <h1>Post Page</h1>
            <p>Post with { id }</p>
        </>
    )
}