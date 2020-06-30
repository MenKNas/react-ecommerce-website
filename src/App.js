import React from 'react';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInPage from './pages/sign-in/sign-in.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  // initialize unsubcribe method to null 
  unsubscribeFromAuth = null;

  //every time the app component mounts check for user auth state update
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }})
          })
      } else {  
        this.setState({currentUser: userAuth})
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage} />
        </Switch>  
      </div>
    );
  }

}

export default App;
