import React, {useState, useMemo} from 'react';
import {Button} from 'semantic-ui-react';

const expensiveFunction = val => {
  console.error(`Expensive function ${val}`);
  return val;
};
const Memo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const value = useMemo(() => expensiveFunction(1), [count2]);
  const value2 = expensiveFunction(2);
  return (
    <div>
      <h1>useMemo</h1>
      <p>Expensive value: {value}</p>
      <p>Expensive value: {value2}</p>
      <p>Counter: {count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <p>Counter 2: {count2}</p>
      <Button onClick={() => setCount2(count2 + 1)}>+</Button>
    </div>
  );
};

export default Memo;
