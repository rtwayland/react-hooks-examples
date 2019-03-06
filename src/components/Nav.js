import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

const Nav = () => (
  <Menu>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>
  </Menu>
);

export default Nav;
