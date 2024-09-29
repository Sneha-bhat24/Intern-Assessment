import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Orders from './components/Orders';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
