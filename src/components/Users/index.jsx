import { useContext } from "react";
import Card from "../Card";
import { UsersContext } from "../../context/UsersProvider";
import { PostContext } from "../../context/PostProvider";

const Users = () => {
  const { name, users } = useContext(UsersContext);
  const { posts } = useContext(PostContext);

  return (
    <>
      <p>{name}</p>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4">
        {users.map((user) => (
          <Card user={user} post={posts?.[user?.id]} />
        ))}
      </div>
    </>
  );
};

export default Users;
