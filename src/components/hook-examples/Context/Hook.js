import React, {useContext} from 'react';
import {Form, Input} from 'semantic-ui-react';
import {Context} from './context';

const Hook = () => {
  const context = useContext(Context);
  const {user, pass, setUser, setPass} = context;
  return (
    <div style={{marginTop: 20}}>
      <h2>Hook</h2>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input value={user} onChange={e => setUser(e.target.value)} placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" type="password" />
        </Form.Field>
      </Form>
    </div>
  );
};

export default Hook;
