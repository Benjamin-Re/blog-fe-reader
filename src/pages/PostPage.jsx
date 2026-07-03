import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify";

export function PostPage() {
    const { id } = useParams(); // grabs the ":id" from the URL
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data.post))
    }, [id])

    if (!post) return <div>Loading ...</div>

    return (
        <>
            <h1>Post Page</h1>
            <h2>{ post.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
        </>
    )
}