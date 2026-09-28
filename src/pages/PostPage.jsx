import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DOMPurify from "dompurify";
import { ShowCommentForm } from '../components/ShowCommentForm'
import { Comment } from '../components/Comment'
import styles from './PostPage.module.css'
import { useGetPostById } from '../hooks/useGetPostById'
import { useGetComments } from '../hooks/useGetComments'

export function PostPage() {
    const { id } = useParams(); // grabs the ":id" from the URL
    const [showCommentForm, setShowCommentForm] = useState(false)
    const { post } = useGetPostById(id)
    const { comments } = useGetComments(id)
    console.log(`comments: ${comments}`)
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