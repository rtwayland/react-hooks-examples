import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = () => (
  <div>
    <ul>
      <li>
        <Link to="/state">useState</Link>
      </li>
      <li>
        <Link to="/effect">useEffect</Link>
      </li>
      <li>
        <Link to="/context">useContext</Link>
      </li>
      <li>
        <Link to="/reducer">useReducer</Link>
      </li>
      <li>
        <Link to="/callback">useCallback</Link>
      </li>
      <li>
        <Link to="/memo">useMemo</Link>
      </li>
      <li>
        <Link to="/ref">useRef</Link>
      </li>
      <li>
        <Link to="/imperative-handle">useImperativeHandle</Link>
      </li>
      <li>
        <Link to="/layout-effect">useLayoutEffect</Link>
      </li>
      <li>
        <Link to="/debug-value">useDebugValue</Link>
      </li>
    </ul>
  </div>
);

export default SideNav;
