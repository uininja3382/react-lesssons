import React from 'react';

const TailwindCard = ({ title, children }) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default TailwindCard;