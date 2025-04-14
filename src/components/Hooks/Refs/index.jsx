import { useState, useEffect, useRef } from "react";
const RefExample = () => {
  const [count, setCount] = useState(0);
  const exampleRef = useRef(0);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    buttonRef.current.innerHTML = "Change Name";
  }, []);

  return (
    <>
      <div className="py-4">Count:{exampleRef.current}</div>

      <div class="flex items-center mb-6 gap-5">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            ref={inputRef}
          />
        </div>
        <button
          ref={buttonRef}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-12 rounded"
        >
          Click Me
        </button>
      </div>
    </>
  );
};
export default RefExample;
