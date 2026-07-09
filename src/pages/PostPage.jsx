import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from "dompurify";
import { ShowCommentForm } from '../components/ShowCommentForm'
import { Comment } from '../components/Comment'
import styles from './PostPage.module.css'

export function PostPage() {
    const { id } = useParams(); // grabs the ":id" from the URL
    const [post, setPost] = useState(null)
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [comments, setComments] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data.post))

        fetch(`http://localhost:3000/comments/post/${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [id])

    function handleClick () {
        setShowCommentForm(!showCommentForm)
    }

    if (!post) return <div>Loading ...</div>

    return (
        <>
        <h1>Post Page</h1>
            <div className={styles.container}>
                <h2>{ post.title }</h2>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
            </div>
            <div className={styles.commentSectionContainer}>
                <button onClick={ handleClick }>Add Comment</button>
                { showCommentForm ? <ShowCommentForm postId={id} onSubmitSuccess={() => setShowCommentForm(false)}></ShowCommentForm> : <div></div>}
                { comments && comments.map(comment => { return <Comment author={comment.author} body={comment.body}></Comment>})}
            </div>
        </>
    )
}