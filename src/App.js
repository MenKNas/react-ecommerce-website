import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInPage from './pages/sign-in/sign-in.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInPage} />
      </Switch>  
    </div>
  );
}

export default App;
