import { request } from "./client.js";

export function listPosts() {
    return request("/posts", { method: "GET" })
}

export function getPostById(id) {
    return request(`/posts/${id}`, { method: "GET"})
}


