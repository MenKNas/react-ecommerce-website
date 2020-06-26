import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>  
    </div>
  );
}

export default App;
