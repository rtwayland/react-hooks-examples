import React, {useState} from 'react';

export const Context = React.createContext({});

const Provider = ({children}) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <Context.Provider
      value={{
        user,
        pass,
        setUser,
        setPass,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
