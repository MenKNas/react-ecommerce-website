import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../4.3 crown.svg.svg'
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';

const Header = ({currentUser}) => {
    return (
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
                {currentUser.photoURL ?  <img className="user-avatar" alt="user profile" src={currentUser.photoURL} /> : null}
                    <span> {currentUser.displayName} </span>
                    <Link className="option" onClick={ () => auth.signOut()}> SIGN OUT </Link>
                </div> 
                :  <Link className="option" to="/signin"> SIGN IN </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);