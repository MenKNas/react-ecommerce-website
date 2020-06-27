import React from 'react';
import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <SignIn />
            </div>
        )
    }
}

export default SignInPage;