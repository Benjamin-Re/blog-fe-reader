import { request } from "./client.js";

export function listPosts() {
    return request("/posts", { method: "GET" })
}

