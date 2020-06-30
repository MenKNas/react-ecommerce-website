import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../4.3 crown.svg.svg'
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/shop"> CONTACT </Link>
            {
              currentUser ? 
              <div className="option user-exists"> 
                <img className="user-avatar" alt="user profile" src={currentUser.photoURL} /> 
                <span> {currentUser.displayName} </span>
                <Link className="option" onClick={ () => auth.signOut()}> SIGN OUT </Link>
              </div> 
              :  <Link className="option" to="/signin"> SIGN IN </Link>
            }
        </div>
    </div>
)

export default Header;