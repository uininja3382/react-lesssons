import React, { useRef } from "react";

const FocusInputCard = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Focus Input Example
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Click the button below to focus on the input field.
        </p>
        <input
          ref={inputRef}
          type="text"
          className="border-gray-300 border rounded-md p-2 w-full mb-4 focus:ring-2 focus:ring-blue-500"
          placeholder="Type something..."
        />
        <button
          onClick={handleFocus}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default FocusInputCard;
