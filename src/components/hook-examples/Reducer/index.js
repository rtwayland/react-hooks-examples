import React, {useReducer} from 'react';
import {Form, Input} from 'semantic-ui-react';
import {reducer, initialState} from './reducer';

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {user, pass} = state;
  return (
    <div>
      <h1>useReducer</h1>
      <Form>
        <Form.Field>
          <label>Username</label>
          <Input
            value={user}
            onChange={e => dispatch({type: 'username', payload: e.target.value})}
            placeholder="Username"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            value={pass}
            onChange={e => dispatch({type: 'password', payload: e.target.value})}
            placeholder="Password"
            type="password"
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default Reducer;
