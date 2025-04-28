import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("Manideep");

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const allUsers = await response.json();
      return allUsers;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const processUsers = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };
    processUsers();
  }, []);

  return (
    <>
      <UsersContext.Provider value={{ users, name, setName, setUsers }}>
        {children}
      </UsersContext.Provider>
    </>
  );
};

export default UsersProvider;
