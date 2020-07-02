import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInPage from './pages/sign-in/sign-in.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  // initialize unsubcribe method to null 
  unsubscribeFromAuth = null;

  //every time the app component mounts check for user auth state update
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      } else {  
        this.props.setCurrentUser(userAuth)
      }

    });
  }


  //run the unsubscribe method when component unmounts (prevent memory leaks)
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
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
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
