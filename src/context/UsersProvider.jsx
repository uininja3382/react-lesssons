import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UsersContext = createContext(null);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("Manideep");
  return (
    <>
      <UsersContext.Provider value={{ users, name, setName, setUsers }}>
        {children}
      </UsersContext.Provider>
    </>
  );
};

export default UsersProvider;
