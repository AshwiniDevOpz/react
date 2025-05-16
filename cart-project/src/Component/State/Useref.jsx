import React, { useState, useRef, useEffect } from 'react';

function PreviousCountExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log(`Previous count: ${prevCountRef.current}`);
  });

  const prevCount = prevCountRef.current;

  return (
    
    <div className="p-4">
      <p className="text-lg">Current Count: {count}</p>
      <p className="text-gray-600">Previous Count: {prevCount}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousCountExample;




