import React, {useEffect, useLayoutEffect} from 'react';

const LayoutEffect = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f00';
  }, []);
  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#0f0';
  }, []);
  return (
    <div>
      <h1>useLayoutEffect</h1>
    </div>
  );
};

export default LayoutEffect;
