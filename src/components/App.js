import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SideNav from './SideNav';
import State from './hook-examples/State';
import Ref from './hook-examples/Ref';
import Reducer from './hook-examples/Reducer';
import Memo from './hook-examples/Memo';
import LayoutEffect from './hook-examples/LayoutEffect';
import ImperitiveHandle from './hook-examples/ImperativeHandle';
import Effect from './hook-examples/Effect';
import Debug from './hook-examples/DebugValue';
import Custom from './hook-examples/Custom';
import Context from './hook-examples/Context';
import Callback from './hook-examples/Callback';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"> Home</Link>
        </nav>
        <Route exact path="/" component={SideNav} />
        <Route path="/state" component={State} />
        <Route path="/ref" component={Ref} />
        <Route path="/reducer" component={Reducer} />
        <Route path="/memo" component={Memo} />
        <Route path="/layout-effect" component={LayoutEffect} />
        <Route path="/imperative-handle" component={ImperitiveHandle} />
        <Route path="/effect" component={Effect} />
        <Route path="/debug-value" component={Debug} />
        <Route path="/custom" component={Custom} />
        <Route path="/context" component={Context} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  );
};

export default App;
