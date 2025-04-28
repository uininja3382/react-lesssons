import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const allPosts = await response.json();
      return allPosts;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const processUsers = async () => {
      const postLists = await fetchPosts();
      setPosts(postLists);
    };
    processUsers();
  }, []);

  return (
    <>
      <PostContext.Provider value={{ posts,setPosts }}>
        {children}
      </PostContext.Provider>
    </>
  );
};

export default PostProvider;
