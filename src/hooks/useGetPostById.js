import { useState, useEffect } from "react";
import { getPostById } from "../api/posts";

export function useGetPostById(postId) {
  const [post, setPost] = useState();

  useEffect(() => {
    getPostById(postId).then((result) => {
      setPost(result.post);
    });
  }, [postId]);
  
  return { post };
}
