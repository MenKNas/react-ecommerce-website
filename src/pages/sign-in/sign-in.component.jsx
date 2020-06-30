import React from 'react';
import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className="sign-in-main-page">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default SignInPage;