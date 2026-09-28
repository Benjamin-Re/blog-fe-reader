import { useState } from "react";
import styles from './ShowCommentForm.module.css'
import { postCreateComment } from '../api/comments'

export function ShowCommentForm(props) {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    postCreateComment(author, body, props.postId)
    props.onSubmitSuccess()
  }
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="body">Comment: </label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
