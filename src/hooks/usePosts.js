import { useState, useEffect } from "react"
import { listPosts } from "../api/posts.js"

export function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        listPosts().then(setPosts)
    }, [])
    return {posts}
}