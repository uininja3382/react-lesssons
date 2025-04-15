/* eslint-disable no-unused-vars */
import { useState } from "react";
import { studentContext } from "../../../../assets/Context/studentContext";
import Name from "./Name";
import Age from "./age";

const Drilling = () => {
  const [student, setStudent] = useState({
    name: "Raj",
    age: 21,
    class: "10th",
    section: "D",
  });
  return (
    <>
      <h1 className="flex justify-center text-5xl">Prop Drilling</h1>
      <studentContext.Provider value={student}>
        <Name />
        <Age />
      </studentContext.Provider>
    </>
  );
};

export default Drilling;
