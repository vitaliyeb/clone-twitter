import React from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path='/'>
              <SignIn/>
           </Route>
           <Route exact path='/home/'>
              <Home/>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
