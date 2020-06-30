import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
  
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({email:'', password:''});
           this.props.history.push('/');
        } catch (err) {
            console.log(err);
        }

    }

    handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target
        this.setState({ [name]: value});
    }

    handleGoogleSignIn = (e) => {
        // e.preventDefault()
        console.log('over ride !')
        signInWithGoogle();
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="text" value={this.state.email} required handleChange={this.handleChange} label="Email"/>
                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="Password"/>
                    <div className="button-group">
                        <CustomButton type="submit" text="SIGN IN"/>
                        <button className="custom-button google-button" type="button" text="Google Sign In" onClick={signInWithGoogle}> Sign In with Google </button>
                    </div>
                </form> 
            </div>
        )
    }
}

export default withRouter(SignIn);