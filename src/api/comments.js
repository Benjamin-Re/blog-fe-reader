import { request } from "./client.js";

export function getCommenstByPostId(postId) {
  return request(`/comments/post/${postId}`, { method: "GET" });
}

export function postCreateComment(author, body, postId) {
    return request(`/comments/create`, {
        method: "POST",
        body: { author, body, postId }
    })
}

