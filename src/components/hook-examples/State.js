import React, {useState} from 'react';
import {Form, Checkbox, Input, Button} from 'semantic-ui-react';

const expensiveFunction = val => {
  console.error(`Running expensive function ${val}`);
  return val;
};
const State = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [invert, setInvert] = useState(false);
  const [expensive, setExpensive] = useState(expensiveFunction(1));
  const [lazyExpensive, setLazyExpensive] = useState(() => {
    return expensiveFunction(2);
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Username: ${user}\nPass: ${pass}`);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <Input value={user} onChange={e => setUser(e.target.value)} placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" type="password" />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={invert}
            onChange={() => {
              setInvert(prevInvert => !prevInvert);
            }}
            label="Invert button color"
          />
        </Form.Field>
        <Form.Field>
          <label>expensiveFunction 1</label>
          <Input value={expensive} onChange={e => setExpensive(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>expensiveFunction 2</label>
          <Input value={lazyExpensive} onChange={e => setLazyExpensive(e.target.value)} />
        </Form.Field>
        <Button secondary={invert} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default State;
