import { useEffect, useState, useContext } from "react";
import Card from "../Card";
import { UsersContext } from "../../context/UsersProvider";

const Users = ({ data }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const { name } = useContext(UsersContext);
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
    console.log(count);
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchPosts();
        setPosts(allPosts);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{name}</p>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {data.map((user) => (
          <Card user={user} post={posts?.[user?.id]} />
        ))}
      </div>
    </>
  );
};

export default Users;
