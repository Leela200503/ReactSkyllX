import React, { useState, useCallback } from 'react';

const WorkingUseCallback = () => {
  const [count, setCount] = useState(0);

  // ✅ useCallback with dependency
  const practice = useCallback(() => {
    console.log("hello, count is:", count);
  }, [count]); // dependency array includes `count`

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={practice}>useCallback</button>
    </div>
  );  
};

export default WorkingUseCallback;
