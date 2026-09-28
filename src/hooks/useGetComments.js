import { useState, useEffect } from "react";
import { getCommenstByPostId } from "../api/comments";

export function useGetComments(postId) {
  const [comments, setComments] = useState();

  useEffect(() => {
    getCommenstByPostId(postId).then((result) => {
      setComments(result);
    });
  }, [postId]);
  
  return { comments };
}
