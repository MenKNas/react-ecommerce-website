import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit !')
        this.setState({email:'', password: ''});
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target
        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required />
                    <label> Email </label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    <label> Password </label>

                    <button type="submit"> Submit Form </button>
                </form>
            </div>
        )
    }
}

export default SignIn;