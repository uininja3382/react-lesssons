import React, { useRef } from "react";

const DocumentRefExample = () => {
  const divRef = useRef(null);
  console.log('intial Ref Value ',divRef);
  const handleScrollToDiv = () => {
    console.log('updated Ref Value ',divRef);
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-6">Scroll to Div Example</h1>
      <button
        onClick={handleScrollToDiv}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Scroll to Target
      </button>
      <div className="h-96"></div>
      <div
        ref={divRef}
        className="bg-white p-6 rounded-lg shadow-md w-80 mt-6 text-center"
      >
        <h2 className="text-xl font-semibold">Target Div</h2>
        <p className="text-gray-600">You’ve scrolled to me!</p>
      </div>
    </div>
  );
};

export default DocumentRefExample;
