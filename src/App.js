import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>  
    </div>
  );
}

export default App;
