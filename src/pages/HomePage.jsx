import { Card } from '../components/Card'
import styles from './HomePage.module.css'
import { usePosts } from '../hooks/usePosts.js'

export function HomePage () {
    const { posts } = usePosts()

    return (
        <>
            <h1>All Posts:</h1>
            <div className={styles.cardContainer}>
            { posts.map((post) => (
                <Card key={post.id} id={post.id} title={post.title} content={post.content}></Card>
            ))}
            </div>
        </>
    )
}