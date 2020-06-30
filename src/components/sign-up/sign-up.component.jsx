import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            return false;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            this.props.history.push('/');

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    handleChange = async (e) => {
       const { value, name } = e.target
       this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state
        return(
            <div className="sign-up">
                <h2> I do not have an account </h2>
                <span> Sign up with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} required handleChange={this.handleChange} label="Name"/>
                    <FormInput name="email" type="email" value={email} required handleChange={this.handleChange} label="Email"/>
                    <FormInput name="password" type="password" value={password} required handleChange={this.handleChange} label="Password"/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} required handleChange={this.handleChange} label="Confirm password"/>
                    { password !== confirmPassword ? <p style={{color:'red'}}> Passwords don't match</p> : null}
                    <div className="button-group">
                        <CustomButton type="submit" text="SIGN UP"/>
                    </div>
                </form> 
            </div>
        )
    }
}
 
export default withRouter(SignUp);