import { useContext } from "react";
import { studentContext } from "../../../../context/studentContext";

const Name = () => {
  const { name } = useContext(studentContext);
  return (
    <>
      <h2>The student name is {name}</h2>
    </>
  );
};

export default Name;
