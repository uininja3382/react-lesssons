import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    console.log('returned interval id ',intervalRef.current);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">Timer: {time}s</h2>
        <div className="flex justify-around mt-4">
          <button
            onClick={startTimer}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
