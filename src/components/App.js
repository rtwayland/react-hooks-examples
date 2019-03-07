import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import SideNav from './SideNav';
import State from './hook-examples/State';
import Reducer from './hook-examples/Reducer';
import Memo from './hook-examples/Memo';
import LayoutEffect from './hook-examples/LayoutEffect';
import Effect from './hook-examples/Effect';
import Context from './hook-examples/Context';
import Callback from './hook-examples/Callback';
// import Ref from './hook-examples/Ref';
// import ImperitiveHandle from './hook-examples/ImperativeHandle';
// import Debug from './hook-examples/DebugValue';
// import Custom from './hook-examples/Custom';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div style={{padding: 20}}>
          <Route exact path="/" component={SideNav} />
          <Route path="/state" component={State} />
          <Route path="/effect" component={Effect} />
          <Route path="/layout-effect" component={LayoutEffect} />
          <Route path="/context" component={Context} />
          <Route path="/reducer" component={Reducer} />
          <Route path="/callback" component={Callback} />
          <Route path="/memo" component={Memo} />
          {/* <Route path="/ref" component={Ref} /> */}
          {/* <Route path="/imperative-handle" component={ImperitiveHandle} /> */}
          {/* <Route path="/debug-value" component={Debug} /> */}
          {/* <Route path="/custom" component={Custom} /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
