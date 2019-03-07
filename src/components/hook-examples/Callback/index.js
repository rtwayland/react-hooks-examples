import React, {useState, useCallback} from 'react';
import Child from './Child';

const Callback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const memoizedHandleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const normalHandleClick = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h1>useCallback</h1>
      <p>Counter: {count}</p>
      <Child handleClick={memoizedHandleClick} />
      <p style={{marginTop: 10}}>Counter2: {count2}</p>
      <Child handleClick={normalHandleClick} />
    </div>
  );
};

export default Callback;
