import React, {useEffect, useLayoutEffect} from 'react';

const LayoutEffect = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f00';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#0f0';
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  return (
    <div>
      <h1>useLayoutEffect</h1>
    </div>
  );
};

export default LayoutEffect;
