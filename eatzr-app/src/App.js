import React from 'react';
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App  bg-white">
      <Switch>
        <Route exact path="/" component={Hotels}></Route>
        <Route exact path="/order/:id" component={Orders}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
