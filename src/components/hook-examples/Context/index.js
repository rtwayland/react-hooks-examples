import React from 'react';
import Original from './Original';
import Hook from './Hook';
import Provider from './context';

const Context = () => (
  <Provider>
    <div>
      <h1>Context</h1>
      <Original />
      <Hook />
    </div>
  </Provider>
);

export default Context;
