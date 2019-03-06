import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {Context} from './context';

const Original = () => (
  <div>
    <h2>Consumer w/render prop</h2>
    <Context.Consumer>
      {context => {
        const {user, pass, setUser, setPass} = context;
        return (
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
        );
      }}
    </Context.Consumer>
  </div>
);

export default Original;
