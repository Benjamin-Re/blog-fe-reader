import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import styles from './HomePage.module.css'

export function HomePage () {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }, [])

    return (
        <>
            <h1>ALl Posts</h1>
            <div className={styles.cardContainer}>
            { posts.map((post) => (
                <Card key={post.id} id={post.id} title={post.title} content={post.content}></Card>
            ))}
            </div>
        </>
    )
}