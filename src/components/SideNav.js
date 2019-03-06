import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'semantic-ui-react';

const SideNav = () => (
  <List ordered divided relaxed>
    <List.Item>
      <Link to="/state">useState</Link>
    </List.Item>
    <List.Item>
      <Link to="/effect">useEffect</Link>
    </List.Item>
    <List.Item>
      <Link to="/context">useContext</Link>
    </List.Item>
    <List.Item>
      <Link to="/reducer">useReducer</Link>
    </List.Item>
    <List.Item>
      <Link to="/callback">useCallback</Link>
    </List.Item>
    <List.Item>
      <Link to="/memo">useMemo</Link>
    </List.Item>
    <List.Item>
      <Link to="/ref">useRef</Link>
    </List.Item>
    <List.Item>
      <Link to="/imperative-handle">useImperativeHandle</Link>
    </List.Item>
    <List.Item>
      <Link to="/layout-effect">useLayoutEffect</Link>
    </List.Item>
    <List.Item>
      <Link to="/debug-value">useDebugValue</Link>
    </List.Item>
  </List>
);

export default SideNav;
