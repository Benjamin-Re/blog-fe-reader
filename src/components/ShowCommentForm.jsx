import { useState } from "react";
import styles from './ShowCommentForm.module.css'

export function ShowCommentForm(props) {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://blog-api-silk-nine.vercel.app/comments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: author, body: body, postId: props.postId }),
    });
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
