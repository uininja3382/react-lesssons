import { useContext } from "react";
import { studentContext } from "../../../../context/studentContext";

const Age = () => {
  const { age } = useContext(studentContext);
  return (
    <>
      <h2>The student age is {age}</h2>
    </>
  );
};

export default Age;
